import json, subprocess
from pathlib import Path
body = Path('/Users/sophie/.openclaw/workspace/tmp-draft.json').read_text()
res = subprocess.run([
    'gws','gmail','users','drafts','create',
    '--params','{"userId":"me"}',
    '--json', body
], capture_output=True, text=True)
print(res.stdout)
print(res.stderr)
print(res.returncode)
