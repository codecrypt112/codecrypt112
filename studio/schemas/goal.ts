import { defineType, defineField } from "sanity";

export default defineType({
  name: "goal",
  title: "Goal",
  type: "document",
  fields: [
    defineField({
      name: "text",
      title: "Goal Text",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "completed",
      title: "Completed",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Systems & Security", value: "SYSTEMS & SECURITY" },
          { title: "Open Source", value: "OPEN SOURCE" },
          { title: "Life & Physical", value: "LIFE & PHYSICAL" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: "text",
      completed: "completed",
      category: "category",
    },
    prepare(selection) {
      const { title, completed, category } = selection;
      return {
        title: `${completed ? "[x]" : "[ ]"} ${title}`,
        subtitle: category,
      };
    },
  },
});
