import urllib.request
import urllib.parse
import json
import os
import re
import uuid

# Read .env.local
env = {}
if os.path.exists(".env.local"):
    with open(".env.local", "r") as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#"):
                continue
            if "=" in line:
                key, val = line.split("=", 1)
                env[key.strip()] = val.strip().strip('"').strip("'")

project_id = env.get("NEXT_PUBLIC_SANITY_PROJECT_ID", "qgpkolae")
dataset = env.get("NEXT_PUBLIC_SANITY_DATASET", "production")
token = env.get("SANITY_API_TOKEN")

print(f"Project ID: {project_id}")
print(f"Dataset: {dataset}")

with open("draft_blogs/the-resume-battle.md", "r") as f:
    lines = f.readlines()

title = ""
body_blocks = []

in_content = False

for line in lines:
    line = line.strip()
    if not line:
        continue
    
    if line.startswith("#"):
        title = line.replace("#", "").strip()
        # Clean title spaces
        title = re.sub(r'\s+', ' ', title)
        title = title.replace("Points We Can't Write The Real Resume", "Points We Can't Write — The Real Resume")
        continue
    
    if line.startswith("*by Vikash V"):
        continue
    
    if line == "---":
        if not in_content:
            in_content = True
            continue
        else:
            # We can represent divider as a custom span or just skip it, or a block with a special style
            # Let's skip it to keep the Sanity schema happy, or represent it as a styled block.
            # Standard Portable Text block:
            body_blocks.append({
                "_key": str(uuid.uuid4())[:12],
                "_type": "block",
                "style": "normal",
                "children": [{
                    "_key": str(uuid.uuid4())[:12],
                    "_type": "span",
                    "marks": [],
                    "text": "---"
                }]
            })
            continue

    # Process text formatting
    # Replace backticks with code tags is not native in standard spans without marks,
    # but we can parse inline styles. For simplicity, let's extract spans with strong and em marks.
    
    # Simple markdown inline parser to Portable Text spans
    # We will support *text* (em) and **text** (strong)
    spans = []
    
    # Let's do a simple regex-based tokenization of the line to find strong, em, and plain text
    # Token format: (type, text) where type is 'plain', 'em', 'strong', 'code'
    tokens = []
    
    # We will search for bold, italics, code pattern
    pattern = r'(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)'
    parts = re.split(pattern, line)
    
    for part in parts:
        if not part:
            continue
        if part.startswith("**") and part.endswith("**"):
            tokens.append(('strong', part[2:-2]))
        elif part.startswith("*") and part.endswith("*"):
            tokens.append(('em', part[1:-1]))
        elif part.startswith("`") and part.endswith("`"):
            tokens.append(('code', part[1:-1]))
        else:
            tokens.append(('plain', part))
            
    for t_type, t_text in tokens:
        marks = []
        if t_type == 'strong':
            marks.append('strong')
        elif t_type == 'em':
            marks.append('em')
        elif t_type == 'code':
            marks.append('code')
            
        spans.append({
            "_key": str(uuid.uuid4())[:12],
            "_type": "span",
            "marks": marks,
            "text": t_text
        })
        
    if not spans:
        spans.append({
            "_key": str(uuid.uuid4())[:12],
            "_type": "span",
            "marks": [],
            "text": line
        })
        
    body_blocks.append({
        "_key": str(uuid.uuid4())[:12],
        "_type": "block",
        "style": "normal",
        "children": spans
    })

# Construct Sanity document mutation
doc = {
    "_type": "blogPost",
    "_id": "drafts.the-real-resume", # using draft so they can review/publish in Sanity Studio, or just standard "the-real-resume"
    "title": title,
    "slug": {
        "_type": "slug",
        "current": "the-real-resume"
    },
    "tags": ["Personal"],
    "publishedAt": "2026-07-20T06:00:00.000Z",
    "body": body_blocks,
    "excerpt": "A raw look behind the polished bullet points of my resume. Exploring the friction of formal education, the projects that failed, and the personal cost of pursuing early growth."
}

mutations = {
    "mutations": [
        {
            "createOrReplace": doc
        }
    ]
}

url = f"https://{project_id}.api.sanity.io/v2024-01-01/data/mutate/{dataset}"
req = urllib.request.Request(url, method="POST")
req.add_header("Content-Type", "application/json")
if token:
    req.add_header("Authorization", f"Bearer {token}")

try:
    req_data = json.dumps(mutations).encode("utf-8")
    with urllib.request.urlopen(req, data=req_data) as response:
        res_data = response.read().decode("utf-8")
        print("Success! Mutation response:")
        print(json.dumps(json.loads(res_data), indent=2))
except Exception as e:
    print("Error publishing to Sanity:", e)
    if hasattr(e, 'read'):
        print("Detail:", e.read().decode("utf-8"))
