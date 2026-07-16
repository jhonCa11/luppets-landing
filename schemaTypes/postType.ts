import { defineField, defineType } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

export const postType = defineType({
  name: "post",
  title: "Artículos",
  type: "document",
  icon: DocumentTextIcon,

  groups: [
    {
      name: "content",
      title: "Contenido",
      default: true,
    },
    {
      name: "publication",
      title: "Publicación",
    },
    {
      name: "seo",
      title: "SEO",
    },
  ],

  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      group: "content",
      validation: (rule) => rule.required().min(10).max(120),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "content",
      description:
        "Dirección del artículo. Ejemplo: calendario-vacunas-cachorros",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "excerpt",
      title: "Resumen",
      type: "text",
      rows: 3,
      group: "content",
      description: "Texto corto mostrado en las tarjetas y en Google.",
      validation: (rule) => rule.required().min(40).max(180),
    }),

    defineField({
      name: "coverImage",
      title: "Imagen de portada",
      type: "image",
      group: "content",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Texto alternativo",
          type: "string",
          validation: (rule) => rule.required(),
        }),

        defineField({
          name: "caption",
          title: "Pie de foto",
          type: "string",
        }),
      ],
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "category",
      title: "Categoría",
      type: "reference",
      to: [{ type: "category" }],
      group: "content",
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "author",
      title: "Autor",
      type: "reference",
      to: [{ type: "author" }],
      group: "content",
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "body",
      title: "Contenido",
      type: "blockContent",
      group: "content",
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "sources",
      title: "Fuentes",
      type: "array",
      group: "content",
      description: "Referencias utilizadas para respaldar el contenido.",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Nombre de la fuente",
              type: "string",
              validation: (rule) => rule.required(),
            }),

            defineField({
              name: "url",
              title: "URL",
              type: "url",
              validation: (rule) =>
                rule.required().uri({
                  scheme: ["http", "https"],
                }),
            }),
          ],

          preview: {
            select: {
              title: "title",
              subtitle: "url",
            },
          },
        },
      ],
    }),

    defineField({
      name: "publishedAt",
      title: "Fecha de publicación",
      type: "datetime",
      group: "publication",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "updatedAt",
      title: "Fecha de actualización",
      type: "datetime",
      group: "publication",
    }),

    defineField({
      name: "featured",
      title: "Artículo destacado",
      type: "boolean",
      group: "publication",
      initialValue: false,
    }),

    defineField({
      name: "medicalReview",
      title: "Revisión profesional",
      type: "object",
      group: "publication",
      fields: [
        defineField({
          name: "reviewed",
          title: "Revisado",
          type: "boolean",
          initialValue: false,
        }),

        defineField({
          name: "reviewerName",
          title: "Nombre del revisor",
          type: "string",
          hidden: ({ parent }) => !parent?.reviewed,
        }),

        defineField({
          name: "reviewerRole",
          title: "Cargo o especialidad",
          type: "string",
          hidden: ({ parent }) => !parent?.reviewed,
        }),

        defineField({
          name: "reviewedAt",
          title: "Fecha de revisión",
          type: "datetime",
          hidden: ({ parent }) => !parent?.reviewed,
        }),
      ],
    }),

    defineField({
      name: "seoTitle",
      title: "Título SEO",
      type: "string",
      group: "seo",
      description: "Si se deja vacío, se utilizará el título principal.",
      validation: (rule) => rule.max(60),
    }),

    defineField({
      name: "seoDescription",
      title: "Descripción SEO",
      type: "text",
      rows: 3,
      group: "seo",
      description: "Si se deja vacía, se utilizará el resumen.",
      validation: (rule) => rule.max(160),
    }),

    defineField({
      name: "noIndex",
      title: "Ocultar de Google",
      type: "boolean",
      group: "seo",
      initialValue: false,
    }),
  ],

  orderings: [
    {
      title: "Más recientes",
      name: "publishedAtDesc",
      by: [
        {
          field: "publishedAt",
          direction: "desc",
        },
      ],
    },
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "category.title",
      media: "coverImage",
      publishedAt: "publishedAt",
    },

    prepare({ title, subtitle, media, publishedAt }) {
      const date = publishedAt
        ? new Date(publishedAt).toLocaleDateString("es-CO")
        : "Sin fecha";

      return {
        title,
        subtitle: `${subtitle ?? "Sin categoría"} · ${date}`,
        media,
      };
    },
  },
});
