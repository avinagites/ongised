import { defineCollection, z } from "astro:content";

export const projectCollection = defineCollection({
  schema: ({ image }) =>
    z
      .object({
        id: z.string(),
        title: z.string(),
        url: z.string(),
        aria: z.string().optional(),
        view: z.string(),
        bgMobile: image(),
        bgTablet: image(),
        bgDesktop: image(),
        isHero: z.boolean().default(false),
        isDraft: z.boolean().default(false),
      })
      .strict(),
  type: "content",
});

export const designCollection = defineCollection({
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        description: z.string(),
        url: z.string(),
        aria: z.string().optional(),
        bg: image(),
        category: z.enum(["web", "app", "graphic"]),
        publishedDate: z.date(),
        isDraft: z.boolean().default(false),
      })
      .strict(),
  type: "content",
});

const zodLink = z.object({
  url: z.string(),
  aria: z.string().optional(),
  title: z.string(),
});

export const locationCollection = defineCollection({
  schema: ({ image }) =>
    z
      .object({
        id: z.string(),
        title: z.string(),
        btn: zodLink,
        address: z.object({
          title: z.string(),
          street: z.string(),
          city: z.string(),
        }),
        contact: z.object({
          title: z.string(),
          phone: zodLink,
          email: zodLink,
        }),
        bg: image(),
        map: z.object({
          latitude: z.number(),
          longitude: z.number(),
        }),
        isDraft: z.boolean().default(false),
      })
      .strict(),
  type: "content",
});
