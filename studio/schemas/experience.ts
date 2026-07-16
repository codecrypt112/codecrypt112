import { defineType, defineField } from "sanity";

export default defineType({
  name: "experience",
  title: "Work Experience",
  type: "document",
  fields: [
    defineField({
      name: "company",
      title: "Company",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
    }),
    defineField({
      name: "period",
      title: "Period",
      type: "string",
      description: 'e.g. "Jan 2026 – Present"',
    }),
    defineField({
      name: "color",
      title: "Card Color",
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
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [{ type: "text" }],
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 999,
    }),
  ],
  preview: {
    select: { title: "company", subtitle: "role" },
  },
});
