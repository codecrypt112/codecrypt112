const { createClient } = require('@sanity/client');
require('dotenv').config({ path: '.env.local' });

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "qgpkolae",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

async function run() {
  try {
    const posts = await sanityClient.fetch('*[_type == "blogPost"]');
    console.log("Existing Sanity Posts:");
    console.log(JSON.stringify(posts, null, 2));
  } catch (error) {
    console.error("Error querying Sanity:", error);
  }
}

run();
