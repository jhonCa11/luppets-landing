import Image from "next/image";
import Link from "next/link";
import {
  PortableText,
  type PortableTextComponents,
  type PortableTextProps,
} from "@portabletext/react";

import { urlForImage } from "@/sanity/image";

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-10 mb-4 text-2xl font-bold text-gray-900">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 mb-3 text-xl font-bold text-gray-900">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="mb-5 text-base leading-7 text-gray-700">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-4 border-orange-400 bg-orange-50/80 py-3 pl-5 pr-4 italic text-gray-700">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-6 list-disc space-y-2 pl-6 text-gray-700">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mb-6 list-decimal space-y-2 pl-6 text-gray-700">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-gray-900">{children}</strong>
    ),
    em: ({ children }) => <em>{children}</em>,
    underline: ({ children }) => <span className="underline">{children}</span>,
    link: ({ value, children }) => {
      const href = value?.href ?? "#";
      const isExternal = href.startsWith("http");

      if (isExternal) {
        return (
          <a
            href={href}
            target={value?.openInNewTab ? "_blank" : undefined}
            rel={value?.openInNewTab ? "noopener noreferrer" : undefined}
            className="font-semibold text-orange-600 underline decoration-orange-200 underline-offset-4"
          >
            {children}
          </a>
        );
      }

      return (
        <Link
          href={href}
          className="font-semibold text-orange-600 underline decoration-orange-200 underline-offset-4"
        >
          {children}
        </Link>
      );
    },
  },
  types: {
    contentImage: ({ value }) => {
      if (!value?.asset) return null;

      const url = urlForImage(value).width(1200).quality(85).url();

      return (
        <figure className="my-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-gray-100">
            <Image
              src={url}
              alt={value.alt ?? ""}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          {value.caption && (
            <figcaption className="mt-3 text-center text-sm text-gray-500">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },

    infoBox: ({ value }) => {
      const styles = {
        info: "border-blue-200 bg-blue-50 text-blue-950",
        warning: "border-amber-200 bg-amber-50 text-amber-950",
        tip: "border-green-200 bg-green-50 text-green-950",
      };

      const style =
        styles[value.type as keyof typeof styles] ?? styles.info;

      return (
        <aside className={`my-8 rounded-2xl border p-6 ${style}`}>
          {value.title && (
            <h3 className="mb-2 text-lg font-bold">{value.title}</h3>
          )}
          <p className="m-0 leading-7">{value.text}</p>
        </aside>
      );
    },
  },
};

export default function PortableTextContent({
  value,
}: {
  value: PortableTextProps["value"];
}) {
  return <PortableText value={value} components={components} />;
}
