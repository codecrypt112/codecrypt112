import { defineType, defineField } from "sanity";

export default defineType({
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Skill Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Frontend", value: "FRONTEND" },
          { title: "Backend", value: "BACKEND" },
          { title: "AI/ML", value: "AI / ML" },
          { title: "Databases", value: "DATABASES" },
          { title: "DevOps & Tools", value: "DEVOPS & TOOLS" },
          { title: "Security & Web3", value: "SECURITY & WEB3" },
        ],
      },
    }),
    defineField({
      name: "level",
      title: "Proficiency (1-100)",
      type: "number",
      validation: (rule) => rule.min(0).max(100),
    }),
    defineField({
      name: "color",
      title: "Bar Color",
      type: "string",
      options: {
        list: [
          { title: "Green", value: "green" },
          { title: "Blue", value: "blue" },
          { title: "Purple", value: "purple" },
          { title: "Orange", value: "orange" },
        ],
      },
    }),
    defineField({
      name: "icon",
      title: "Category Icon",
      type: "string",
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "category" },
  },
});
