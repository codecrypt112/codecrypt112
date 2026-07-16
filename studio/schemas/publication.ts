import { defineType, defineField } from "sanity";

export default defineType({
  name: "publication",
  title: "Publication",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),
    defineField({
      name: "abstract",
      title: "Abstract",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "journal",
      title: "Journal / Venue",
      type: "string",
    }),
    defineField({
      name: "date",
      title: "Publication Date",
      type: "string",
      description: 'e.g. "May 2024"',
    }),
    defineField({
      name: "color",
      title: "Planet Color",
      type: "string",
      description: 'e.g. "#4fc3f7"',
    }),
    defineField({
      name: "link",
      title: "External Link",
      type: "url",
    }),
    defineField({
      name: "coAuthors",
      title: "Co-Authors",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "journal" },
  },
});
