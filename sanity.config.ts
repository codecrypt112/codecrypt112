import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import blogPost from "./studio/schemas/blogPost";
import project from "./studio/schemas/project";
import experience from "./studio/schemas/experience";
import skill from "./studio/schemas/skill";
import publication from "./studio/schemas/publication";
import goal from "./studio/schemas/goal";
import devlog from "./studio/schemas/devlog";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "qgpkolae";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  name: "vikash-portfolio",
  title: "Vikash V Portfolio CMS",
  projectId,
  dataset,
  plugins: [structureTool()],
  schema: {
    types: [blogPost, project, experience, skill, publication, goal, devlog],
  },
});

