import { codeToHtml } from "shiki";
import { examples } from "./examples.js";

export async function load({ params }) {
	const example = examples[params.slug];

	if (!example) {
		return {
			status: 404,
			error: new Error("Example not found")
		};
	}
	const component = (await example.component).default;
	const code = (await example.code).default;

	const highlightedCode = await codeToHtml(code, { lang: "svelte", theme: "aurora-x" });

	return {
		name: example.name,
		description: example.description,
		Component: component,
		highlightedCode: highlightedCode
	};
}
