import { docsBundle } from "@/generated/docs-bundle";

export type DocContent =
  | { kind: "markdown"; content: string }
  | { kind: "csv"; rows: readonly (readonly string[])[] }
  | {
      kind: "xlsx";
      sheets: readonly { name: string; rows: readonly (readonly string[])[] }[];
      fileBase64: string;
    }
  | { kind: "unsupported" };

export const bundledDocContent = docsBundle as unknown as Record<string, DocContent | null>;
