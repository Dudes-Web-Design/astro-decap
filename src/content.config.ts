import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

// Every collection must reflect Decap's config.yml collection schema
// In order to be able to optimize images with Astro built-in compoments, like <Image />, we first must use this image helper
// Doc: https://docs.astro.build/en/guides/images/#images-in-content-collections

const blogsCollection = defineCollection({
	loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/blog" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			author: z.string(),
			date: z.date(),
			image: image(),
			imageAlt: z.string(),
			isFeatured: z.boolean().optional().default(false),
		}),
});

const serviceAreasCollection = defineCollection({
	loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/service-areas" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			slug: z.string(),
			image: image(),
			imageAlt: z.string(),
			body: z.string(),
		}),
});

const servicesCollection = defineCollection({
	loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/services" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			slug: z.string(),
			image: image(),
			imageAlt: z.string(),
			body: z.string(),
		}),
});

export const collections = {
	blog: blogsCollection,
	"service-areas": serviceAreasCollection,
	services: servicesCollection,
};
