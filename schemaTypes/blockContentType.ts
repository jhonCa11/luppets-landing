import { defineArrayMember, defineField, defineType } from "sanity";

export const blockContentType = defineType({
  name: "blockContent",
  title: "Contenido",
  type: "array",

  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "Título 2", value: "h2" },
        { title: "Título 3", value: "h3" },
        { title: "Cita", value: "blockquote" },
      ],

      lists: [
        { title: "Viñetas", value: "bullet" },
        { title: "Numerada", value: "number" },
      ],

      marks: {
        decorators: [
          { title: "Negrilla", value: "strong" },
          { title: "Cursiva", value: "em" },
          { title: "Subrayado", value: "underline" },
        ],

        annotations: [
          {
            name: "link",
            type: "object",
            title: "Enlace",
            fields: [
              defineField({
                name: "href",
                title: "URL",
                type: "url",
                validation: (rule) =>
                  rule.uri({
                    allowRelative: true,
                    scheme: ["http", "https", "mailto", "tel"],
                  }),
              }),

              defineField({
                name: "openInNewTab",
                title: "Abrir en una pestaña nueva",
                type: "boolean",
                initialValue: false,
              }),
            ],
          },
        ],
      },
    }),

    defineArrayMember({
      name: "contentImage",
      title: "Imagen",
      type: "image",
      options: {
        hotspot: true,
      },

      fields: [
        defineField({
          name: "alt",
          title: "Texto alternativo",
          type: "string",
          description:
            "Describe la imagen para personas que no pueden verla.",
          validation: (rule) => rule.required(),
        }),

        defineField({
          name: "caption",
          title: "Pie de foto",
          type: "string",
        }),
      ],
    }),

    defineArrayMember({
      name: "infoBox",
      title: "Bloque destacado",
      type: "object",

      fields: [
        defineField({
          name: "type",
          title: "Tipo",
          type: "string",
          options: {
            list: [
              { title: "Información", value: "info" },
              { title: "Importante", value: "warning" },
              { title: "Consejo", value: "tip" },
            ],
            layout: "radio",
          },
          initialValue: "info",
        }),

        defineField({
          name: "title",
          title: "Título",
          type: "string",
        }),

        defineField({
          name: "text",
          title: "Texto",
          type: "text",
          rows: 4,
          validation: (rule) => rule.required(),
        }),
      ],

      preview: {
        select: {
          title: "title",
          subtitle: "text",
        },
      },
    }),
  ],
});
