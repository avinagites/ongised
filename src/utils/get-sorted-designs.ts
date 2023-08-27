import type { CollectionEntry } from "astro:content";

/**
 * Get sorted designs by publishedDate
 * @param designs
 */
export const getSortedDesigns = (designs: CollectionEntry<"design">[]) =>
  designs
    .filter(({ data }) => !data.isDraft)
    .sort(
      (a, b) =>
        Math.floor(new Date(a.data.publishedDate).getTime() / 1000) -
        Math.floor(new Date(b.data.publishedDate).getTime() / 1000),
    );
