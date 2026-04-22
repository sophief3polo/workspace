import { NextRequest, NextResponse } from "next/server";
import { bundledDocContent } from "@/lib/docs-content";
import { getDocBySlug } from "@/lib/docs";

function toCsv(rows: readonly (readonly string[])[]) {
  return rows
    .map((row) =>
      row
        .map((cell) => {
          const value = String(cell ?? "");
          if (/[",\n]/.test(value)) {
            return `"${value.replace(/"/g, '""')}"`;
          }
          return value;
        })
        .join(",")
    )
    .join("\n");
}

function getContentType(path: string) {
  if (path.endsWith(".md")) return "text/markdown; charset=utf-8";
  if (path.endsWith(".csv")) return "text/csv; charset=utf-8";
  if (path.endsWith(".xlsx")) {
    return "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
  }
  return "application/octet-stream";
}

function getDownloadBody(slug: string) {
  const content = bundledDocContent[slug];
  if (!content) return null;

  if (content.kind === "markdown") return content.content;
  if (content.kind === "csv") return toCsv(content.rows);
  if (content.kind === "xlsx") return Buffer.from(content.fileBase64, "base64");
  return null;
}

function getDownloadFilename(path: string) {
  return path.split("/").pop() ?? "document";
}

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;
  const doc = getDocBySlug(slug);

  if (!doc) {
    return NextResponse.json({ error: "Document not found" }, { status: 404 });
  }

  const body = getDownloadBody(slug);

  if (body == null) {
    return NextResponse.json({ error: "Document content unavailable" }, { status: 404 });
  }

  return new NextResponse(body, {
    status: 200,
    headers: {
      "Content-Type": getContentType(doc.path),
      "Content-Disposition": `attachment; filename="${getDownloadFilename(doc.path)}"`,
      "Cache-Control": "no-store",
    },
  });
}
