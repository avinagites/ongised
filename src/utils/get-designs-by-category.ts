import type { CollectionEntry } from "astro:content";

/**
 * Get filtered designs by category
 * @param designs
 * @param category
 */
export const getDesignsByCategory = (designs: CollectionEntry<"design">[], category: string) =>
  designs.filter(({ data }) => !data.isDraft && data.category.includes(category));
