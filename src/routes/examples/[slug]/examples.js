import examplesMeta from "$lib/data/examples.json";

let modifiedExamples = Object.fromEntries(examplesMeta.map((v) => [v.slug, v]));

export const examples = {
	fade: {
		...modifiedExamples.fade,
		component: import("$lib/components/examples/FadeExample.svelte"),
		code: import("$lib/components/examples/FadeExample.svelte?raw")
	},
	"app-folder": {
		...modifiedExamples["app-folder"],
		component: import("$lib/components/examples/AppFolderExample.svelte"),
		code: import("$lib/components/examples/AppFolderExample.svelte?raw")
	}
};
