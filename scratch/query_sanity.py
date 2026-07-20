import urllib.request
import urllib.parse
import json
import os

# Read .env.local
env = {}
if os.path.exists(".env.local"):
    with open(".env.local", "r") as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#"):
                continue
            key, val = line.split("=", 1)
            env[key.strip()] = val.strip().strip('"').strip("'")

project_id = env.get("NEXT_PUBLIC_SANITY_PROJECT_ID", "qgpkolae")
dataset = env.get("NEXT_PUBLIC_SANITY_DATASET", "production")
token = env.get("SANITY_API_TOKEN")

print(f"Project ID: {project_id}")
print(f"Dataset: {dataset}")

query = '*[_type == "blogPost"]'
url = f"https://{project_id}.api.sanity.io/v2024-01-01/data/query/{dataset}?query={urllib.parse.quote(query)}"

req = urllib.request.Request(url)
if token:
    req.add_header("Authorization", f"Bearer {token}")

try:
    with urllib.request.urlopen(req) as response:
        res_data = response.read().decode("utf-8")
        data = json.loads(res_data)
        print("Existing Sanity Posts:")
        print(json.dumps(data.get("result", []), indent=2))
except Exception as e:
    print("Error:", e)
