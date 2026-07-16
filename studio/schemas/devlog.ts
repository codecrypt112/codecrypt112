import { defineType, defineField } from "sanity";

export default defineType({
  name: "devlog",
  title: "Devlog",
  type: "document",
  fields: [
    defineField({
      name: "timestamp",
      title: "Timestamp",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "type",
      title: "Log Type",
      type: "string",
      options: {
        list: [
          { title: "Info", value: "INFO" },
          { title: "Success", value: "SUCCESS" },
          { title: "Debug", value: "DEBUG" },
          { title: "Note", value: "NOTE" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      content: "content",
      type: "type",
      timestamp: "timestamp",
    },
    prepare(selection) {
      const { content, type, timestamp } = selection;
      const formattedDate = timestamp ? timestamp.slice(0, 16).replace("T", " ") : "";
      return {
        title: content ? content.slice(0, 50) + (content.length > 50 ? "..." : "") : "(empty)",
        subtitle: `[${type}] ${formattedDate}`,
      };
    },
  },
});
