import { defineField, defineType } from "sanity";
import { TagIcon } from "@sanity/icons";

export const categoryType = defineType({
  name: "category",
  title: "Categorías",
  type: "document",
  icon: TagIcon,

  fields: [
    defineField({
      name: "title",
      title: "Nombre",
      type: "string",
      validation: (rule) => rule.required().min(2).max(60),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Dirección legible de la categoría.",
      options: {
        source: "title",
        maxLength: 80,
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "description",
      title: "Descripción",
      type: "text",
      rows: 3,
      validation: (rule) => rule.max(200),
    }),

    defineField({
      name: "order",
      title: "Orden",
      type: "number",
      initialValue: 0,
    }),

    defineField({
      name: "active",
      title: "Activa",
      type: "boolean",
      initialValue: true,
    }),
  ],

  preview: {
    select: {
      title: "title",
      active: "active",
    },
    prepare({ title, active }) {
      return {
        title,
        subtitle: active ? "Activa" : "Inactiva",
      };
    },
  },
});
