import re
import os

with open("draft_devlogs/simulating_quantum.mdx", "r") as f:
    content = f.read()

# Split frontmatter
parts = content.split("---")
frontmatter_raw = parts[1].strip()
body_raw = parts[2].strip()

# Parse frontmatter
metadata = {}
for line in frontmatter_raw.split("\n"):
    if ":" in line:
        k, v = line.split(":", 1)
        metadata[k.strip()] = v.strip()

timestamp = metadata.get("timestamp", "2026-07-20T12:00:00Z")
log_type = metadata.get("type", "NOTE")

# Convert markdown / JSX inside body_raw to HTML
# First, convert JSX style objects to standard HTML style strings
def convert_style(match):
    style_content = match.group(1)
    # Parse key: value pairs
    pairs = re.findall(r'([a-zA-Z]+)\s*:\s*([\'"][^\'"]+[\'"]|\d+(?:\.\d+)?)', style_content)
    style_str = ""
    for k, v in pairs:
        # Convert camelCase to kebab-case
        k_kebab = re.sub(r'(?<!^)(?=[A-Z])', '-', k).lower()
        # Clean quotes
        v_clean = v.strip("'").strip('"')
        # If it's a raw number and needs units (like px for dimensions), append it
        if v_clean.isdigit() and k_kebab in ['width', 'height', 'perspective', 'gap', 'border-radius', 'font-size']:
            v_clean += "px"
        style_str += f"{k_kebab}: {v_clean}; "
    return f'style="{style_str.strip()}"'

body_html = re.sub(r'style=\{\{([^}]+)\}\}', convert_style, body_raw)

# Now, convert markdown blocks to HTML
lines = body_html.split("\n")
html_blocks = []
in_list = False
in_style = False

i = 0
while i < len(lines):
    line = lines[i].strip()
    
    if not line:
        i += 1
        continue
    
    # Handle style boundary
    if "<style>" in line:
        in_style = True
        # strip standard JSX curly brackets from style block if present
        line_clean = line.replace("{`", "")
        html_blocks.append(line_clean)
        i += 1
        continue
    
    if "</style>" in line:
        in_style = False
        line_clean = line.replace("`}", "")
        html_blocks.append(line_clean)
        i += 1
        continue
        
    if in_style:
        html_blocks.append(lines[i])
        i += 1
        continue
        
    # Handle div boundary and inline components
    if line.startswith("<div") or line.startswith("</div>") or line.startswith("<span"):
        html_blocks.append(lines[i])
        i += 1
        continue
        
    if line.startswith("##"):
        if in_list:
            html_blocks.append("</ul>")
            in_list = False
        val = line.replace("##", "").strip()
        html_blocks.append(f'<h2 class="text-xl font-semibold text-text-primary mt-6 mb-3">{val}</h2>')
        i += 1
        continue
        
    if line.startswith("#"):
        if in_list:
            html_blocks.append("</ul>")
            in_list = False
        val = line.replace("#", "").strip()
        html_blocks.append(f'<h1 class="text-2xl font-semibold text-text-primary mt-6 mb-4">{val}</h1>')
        i += 1
        continue
        
    if line.startswith("-"):
        if not in_list:
            html_blocks.append('<ul class="list-disc pl-5 space-y-2 mb-4">')
            in_list = True
        val = line.replace("-", "", 1).strip()
        html_blocks.append(f'  <li>{val}</li>')
        i += 1
        continue
        
    if in_list:
        html_blocks.append("</ul>")
        in_list = False
        
    # Process paragraph
    paragraph = lines[i]
    # Replace bold **text** with strong
    paragraph = re.sub(r'\*\*([^*]+)\*\*', r'<strong>\1</strong>', paragraph)
    # Replace italics *text* with em
    paragraph = re.sub(r'\*([^*]+)\*', r'<em>\1</em>', paragraph)
    # Replace `code` with code tags
    paragraph = re.sub(r'`([^`]+)`', r'<code class="px-1.5 py-0.5 rounded bg-surface border border-border font-mono text-xs text-accent">\1</code>', paragraph)
    
    html_blocks.append(f'<p class="mb-4 text-text-secondary leading-relaxed">{paragraph}</p>')
    i += 1

if in_list:
    html_blocks.append("</ul>")

full_html = "\n".join(html_blocks)

# Format the final typescript content
ts_content = f"""export interface Devlog {{
  timestamp: string;
  type: "INFO" | "SUCCESS" | "DEBUG" | "NOTE";
  content: string;
}}

export const LOCAL_DEVLOGS: Devlog[] = [
  {{
    timestamp: "{timestamp}",
    type: "{log_type}",
    content: `{full_html}`
  }}
];
"""

with open("lib/devlogs.ts", "w") as f:
    f.write(ts_content)

print("Successfully generated lib/devlogs.ts!")
