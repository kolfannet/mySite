import { DateTime } from "luxon";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default function (eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy("views/assets/img");
    eleventyConfig.addPassthroughCopy("views/assets/js");

    // PLUGINS
    eleventyConfig.addPlugin(feedPlugin, {
		type: "atom", // or "rss", "json"
		outputPath: "/feed.xml",
		collection: {
			name: "post", // iterate over `collections.posts`
			limit: 10,     // 0 means no limit
		},
		metadata: {
			language: "en",
			title: "blog",
			subtitle: "my personal website",
			base: "https://kolfan.net/",
			author: {
				name: "František",
				email: "", // Optional
			}
		}
	});

    // FILTERS
    eleventyConfig.addFilter("postDate", (dateObj, format = "DDD", locale = "en") => {
        return DateTime.fromJSDate(dateObj).setLocale(locale).toFormat(format);
    });

	// EXCERPTS
	eleventyConfig.setFrontMatterParsingOptions({
		excerpt: true,
		// Optional, default is "---"
		excerpt_separator: "<!-- excerpt -->",
	});
    
};

export const config = {

    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk", 

    dir: {
        input: "views",
        layouts: "_layouts",
        output: "dist"
    }
};