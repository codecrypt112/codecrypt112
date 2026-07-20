import re

with open("draft_blogs/the-resume-battle.md", "r") as f:
    lines = f.readlines()

title = ""
html_paras = []

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
            html_paras.append('<hr class="my-8 border-border" />')
            continue
            
    # Process text formatting
    # Replace backticks with code tags
    line = re.sub(r'`([^`]+)`', r'<code>\1</code>', line)
    
    # Replace italicized quotes: *"text"* -> <em>"text"</em>
    line = re.sub(r'\*\"([^\"]+)\"\*', r'<em>"\1"</em>', line)
    # Replace normal italics: *text* -> <em>text</em>
    line = re.sub(r'\*([^*]+)\*', r'<em>\1</em>', line)
    
    # Replace bold: **text** -> <strong>text</strong>
    line = re.sub(r'\*\*([^*]+)\*\*', r'<strong>\1</strong>', line)
    
    # Wrap in paragraph tag
    html_paras.append(f'<p>{line}</p>')

html_content = "\\n".join(html_paras)

# Escape backticks and double quotes for JS string
escaped_content = html_content.replace('`', '\\`').replace('class="', 'class=\\"')

# Format the blog post object
blog_object = f"""  {{
    slug: "the-real-resume",
    title: "{title}",
    date: "2026-07-20",
    tags: ["Personal"],
    summary: "A raw look behind the polished bullet points of my resume. Exploring the friction of formal education, the projects that failed, and the personal cost of pursuing early growth.",
    readTime: "6 min read",
    coverImage: null,
    content: `{escaped_content}`
  }}"""

print(blog_object)
