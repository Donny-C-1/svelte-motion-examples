const t=`<script>\r
	import { quintOut } from "svelte/easing";\r
	import { crossfade, fade } from "svelte/transition";\r
	import { on } from "svelte/events";\r
\r
	const [send, receive] = crossfade({\r
		duration: 400,\r
		easing: quintOut\r
	});\r
\r
	let isCollapsed = $state(true);\r
	let apps = $state([\r
		{ id: 1, name: "Pixelmator Pro", icon: "🎨" },\r
		{ id: 2, name: "Final Cut", icon: "🎬" },\r
		{ id: 3, name: "Logic Pro", icon: "🎵" },\r
		{ id: 4, name: "Pages", icon: "📝" },\r
		{ id: 5, name: "Keynote", icon: "📊" },\r
		{ id: 6, name: "Compressor", icon: "⚙️" },\r
		{ id: 7, name: "Freeform", icon: "✏️" },\r
		{ id: 8, name: "Numbers", icon: "📈" },\r
		{ id: 9, name: "Alien Invaders", icon: "👽" },\r
		{ id: 10, name: "Pool", icon: "🎱" }\r
	]);\r
\r
	function closeFromParent(node) {\r
		console.log(node.parentElement);\r
		let parentElement = node.parentElement;\r
\r
		const off = on(parentElement, "click", () => (isCollapsed = true));\r
\r
		return () => {\r
			off();\r
		};\r
	}\r
<\/script>\r
\r
<div class="container">\r
	<div class="wrapper">\r
		{#if isCollapsed}\r
			<button class="folder_preview" onclick={() => (isCollapsed = false)} in:receive={{ key: "folder" }} out:send={{ key: "folder" }}>\r
				<div class="grid_wrapper">\r
					{#each apps.slice(0, 3) as app (app.id)}\r
						<div class="app_icon" in:receive|global={{ key: app.id }} out:receive|global={{ key: app.id }}>\r
							<span class="icon">{app.icon}</span>\r
						</div>\r
					{/each}\r
					<div class="mini_grid">\r
						{#each apps.slice(3, 7) as app (app.id)}\r
							<div class="app_icon small" in:receive|global={{ key: app.id }} out:receive|global={{ key: app.id }}>\r
								<span class="icon">{app.icon}</span>\r
							</div>\r
						{/each}\r
					</div>\r
				</div>\r
			</button>\r
		{:else}\r
			<button class="folder_open" onclick={() => (isCollapsed = true)} in:receive={{ key: "folder" }} out:send={{ key: "folder" }} {@attach closeFromParent}>\r
				<h2 class="folder_title">Creator Studio</h2>\r
				<div class="grid_wrapper">\r
					{#each apps as app (app.id)}\r
						<div class="grid_cell">\r
							<div class="app_icon expanded" in:receive|global={{ key: app.id }} out:receive|global={{ key: app.id }}>\r
								<span class="icon">{app.icon}</span>\r
							</div>\r
							<div class="app_name">{app.name}</div>\r
						</div>\r
					{/each}\r
				</div>\r
			</button>\r
		{/if}\r
	</div>\r
</div>\r
\r
<style>\r
	.container {\r
		display: grid;\r
		min-height: 100vh;\r
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r
        padding: 0;\r
	}\r
\r
	.wrapper {\r
		position: relative;\r
		display: flex;\r
		justify-content: center;\r
		align-items: center;\r
		overflow: auto;\r
	}\r
\r
	.folder_preview,\r
	.folder_open {\r
		position: absolute;\r
		border: none;\r
		background: rgba(255, 255, 255, 0.25);\r
		backdrop-filter: blur(10px);\r
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\r
		cursor: pointer;\r
	}\r
\r
	.folder_preview {\r
		width: 5rem;\r
		aspect-ratio: 1;\r
		padding: 0.375rem;\r
        border-radius: 1.25rem;\r
        overflow: hidden;\r
	}\r
\r
	.folder_preview .grid_wrapper {\r
		display: grid;\r
		grid-template-columns: 1fr 1fr;\r
		grid-template-rows: 1fr 1fr;\r
		gap: 0.25rem;\r
	}\r
\r
	.folder_open {\r
        max-width: 100%;\r
		background-color: transparent;\r
		box-shadow: none;\r
        padding: .5rem;\r
	}\r
\r
	.folder_open .grid_wrapper {\r
		display: grid;\r
		grid-template-columns: repeat(4, 1fr);\r
		gap: .5rem;\r
	}\r
\r
	.mini_grid {\r
		display: grid;\r
		grid-template-columns: 1fr 1fr;\r
		grid-template-rows: 1fr 1fr;\r
		gap: 0.25rem;\r
	}\r
\r
	.folder_title {\r
		margin-bottom: 1rem;\r
		font-weight: 500;\r
	}\r
\r
	.app_icon {\r
		display: grid;\r
		place-items: center;\r
		aspect-ratio: 1;\r
		border-radius: 0.25rem;\r
		background-color: var(--bg, hsl(var(--primary)));\r
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\r
	}\r
\r
	.app_icon.expanded {\r
		width: 100%;\r
		aspect-ratio: 1;\r
		border-radius: 1.25rem;\r
	}\r
\r
	.app_icon.small {\r
		border-radius: 0.25rem;\r
	}\r
\r
	.app_icon .icon {\r
		font-size: 1.25rem;\r
	}\r
\r
	.app_icon.small .icon {\r
		font-size: 0.5rem;\r
	}\r
\r
    .app_icon.expanded .icon {\r
        font-size: 1.75rem;\r
    }\r
\r
	.grid_cell {\r
		display: grid;\r
		gap: 0.4rem;\r
        overflow: hidden;\r
	}\r
\r
	.app_name {\r
		font-size: 0.75rem;\r
		text-align: center;\r
		padding: 0.25rem;\r
		font-weight: 500;\r
		line-height: 1.2;\r
        overflow: hidden;\r
        text-overflow: ellipsis;\r
        white-space: nowrap;\r
	}\r
\r
	@media screen and (width >= 45rem) {\r
        .container {\r
            padding: 2rem;\r
        }\r
		.folder_preview {\r
			padding: 1rem;\r
			width: 10rem;\r
            border-radius: 3rem;\r
		}\r
\r
		.folder_preview .grid_wrapper {\r
			gap: 0.5rem;\r
		}\r
\r
        .folder_open .grid_wrapper {\r
            gap: 1rem;\r
        }\r
\r
		.app_icon {\r
			border-radius: 0.75rem;\r
		}\r
\r
        .app_icon.expanded {\r
            width: 5rem;\r
            margin: auto;\r
        }\r
\r
		.app_icon.small {\r
			border-radius: 0.375rem;\r
		}\r
\r
		.app_icon .icon {\r
			font-size: 2.5rem;\r
		}\r
\r
		.app_icon.small .icon {\r
			font-size: .8rem;\r
		}\r
\r
        .app_name {\r
            font-size: 1rem;\r
        }\r
	}\r
</style>\r
`;export{t as default};
