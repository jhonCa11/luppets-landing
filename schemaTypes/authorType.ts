import { defineField, defineType } from "sanity";
import { UserIcon } from "@sanity/icons";

export const authorType = defineType({
  name: "author",
  title: "Autores",
  type: "document",
  icon: UserIcon,

  fields: [
    defineField({
      name: "name",
      title: "Nombre",
      type: "string",
      validation: (rule) => rule.required().min(2).max(100),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "role",
      title: "Cargo o rol",
      type: "string",
      description:
        "Ejemplo: Equipo Luppets, Veterinaria revisora o Colaborador.",
      validation: (rule) => rule.max(100),
    }),

    defineField({
      name: "image",
      title: "Fotografía",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Texto alternativo",
          type: "string",
        }),
      ],
    }),

    defineField({
      name: "bio",
      title: "Biografía",
      type: "text",
      rows: 4,
      validation: (rule) => rule.max(500),
    }),

    defineField({
      name: "active",
      title: "Autor activo",
      type: "boolean",
      initialValue: true,
    }),
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "role",
      media: "image",
    },
  },
});
