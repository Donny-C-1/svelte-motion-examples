<script>
	import { quintOut } from "svelte/easing";
	import { crossfade, fade } from "svelte/transition";
	import { on } from "svelte/events";

	const [send, receive] = crossfade({
		duration: 400,
		easing: quintOut
	});

	let isCollapsed = $state(true);
	let apps = $state([
		{ id: 1, name: "Pixelmator Pro", icon: "🎨" },
		{ id: 2, name: "Final Cut", icon: "🎬" },
		{ id: 3, name: "Logic Pro", icon: "🎵" },
		{ id: 4, name: "Pages", icon: "📝" },
		{ id: 5, name: "Keynote", icon: "📊" },
		{ id: 6, name: "Compressor", icon: "⚙️" },
		{ id: 7, name: "Freeform", icon: "✏️" },
		{ id: 8, name: "Numbers", icon: "📈" },
		{ id: 9, name: "Alien Invaders", icon: "👽" },
		{ id: 10, name: "Pool", icon: "🎱" }
	]);

	function closeFromParent(node) {
		console.log(node.parentElement);
		let parentElement = node.parentElement;

		const off = on(parentElement, "click", () => (isCollapsed = true));

		return () => {
			off();
		};
	}
</script>

<div class="container">
	<div class="wrapper">
		{#if isCollapsed}
			<button class="folder_preview" onclick={() => (isCollapsed = false)} in:receive={{ key: "folder" }} out:send={{ key: "folder" }}>
				<div class="grid_wrapper">
					{#each apps.slice(0, 3) as app (app.id)}
						<div class="app_icon" in:receive|global={{ key: app.id }} out:receive|global={{ key: app.id }}>
							<span class="icon">{app.icon}</span>
						</div>
					{/each}
					<div class="mini_grid">
						{#each apps.slice(3, 7) as app (app.id)}
							<div class="app_icon small" in:receive|global={{ key: app.id }} out:receive|global={{ key: app.id }}>
								<span class="icon">{app.icon}</span>
							</div>
						{/each}
					</div>
				</div>
			</button>
		{:else}
			<button class="folder_open" onclick={() => (isCollapsed = true)} in:receive={{ key: "folder" }} out:send={{ key: "folder" }} {@attach closeFromParent}>
				<h2 class="folder_title">Creator Studio</h2>
				<div class="grid_wrapper">
					{#each apps as app (app.id)}
						<div class="grid_cell">
							<div class="app_icon expanded" in:receive|global={{ key: app.id }} out:receive|global={{ key: app.id }}>
								<span class="icon">{app.icon}</span>
							</div>
							<div class="app_name">{app.name}</div>
						</div>
					{/each}
				</div>
			</button>
		{/if}
	</div>
</div>

<style>
	.container {
		display: grid;
		min-height: 100vh;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        padding: 0;
	}

	.wrapper {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: auto;
	}

	.folder_preview,
	.folder_open {
		position: absolute;
		border: none;
		background: rgba(255, 255, 255, 0.25);
		backdrop-filter: blur(10px);
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
		cursor: pointer;
	}

	.folder_preview {
		width: 5rem;
		aspect-ratio: 1;
		padding: 0.375rem;
        border-radius: 1.25rem;
        overflow: hidden;
	}

	.folder_preview .grid_wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		gap: 0.25rem;
	}

	.folder_open {
        max-width: 100%;
		background-color: transparent;
		box-shadow: none;
        padding: .5rem;
	}

	.folder_open .grid_wrapper {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: .5rem;
	}

	.mini_grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		gap: 0.25rem;
	}

	.folder_title {
		margin-bottom: 1rem;
		font-weight: 500;
	}

	.app_icon {
		display: grid;
		place-items: center;
		aspect-ratio: 1;
		border-radius: 0.25rem;
		background-color: var(--bg, hsl(var(--primary)));
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
	}

	.app_icon.expanded {
		width: 100%;
		aspect-ratio: 1;
		border-radius: 1.25rem;
	}

	.app_icon.small {
		border-radius: 0.25rem;
	}

	.app_icon .icon {
		font-size: 1.25rem;
	}

	.app_icon.small .icon {
		font-size: 0.5rem;
	}

    .app_icon.expanded .icon {
        font-size: 1.75rem;
    }

	.grid_cell {
		display: grid;
		gap: 0.4rem;
        overflow: hidden;
	}

	.app_name {
		font-size: 0.75rem;
		text-align: center;
		padding: 0.25rem;
		font-weight: 500;
		line-height: 1.2;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
	}

	@media screen and (width >= 45rem) {
        .container {
            padding: 2rem;
        }
		.folder_preview {
			padding: 1rem;
			width: 10rem;
            border-radius: 3rem;
		}

		.folder_preview .grid_wrapper {
			gap: 0.5rem;
		}

        .folder_open .grid_wrapper {
            gap: 1rem;
        }

		.app_icon {
			border-radius: 0.75rem;
		}

        .app_icon.expanded {
            width: 5rem;
            margin: auto;
        }

		.app_icon.small {
			border-radius: 0.375rem;
		}

		.app_icon .icon {
			font-size: 2.5rem;
		}

		.app_icon.small .icon {
			font-size: .8rem;
		}

        .app_name {
            font-size: 1rem;
        }
	}
</style>
