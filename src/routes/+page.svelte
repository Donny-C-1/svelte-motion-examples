<script>
	import ExampleCard from "$lib/components/ExampleCard.svelte";
	import examples from "$lib/data/examples.json";
</script>

<!-- Hero Section -->
<section class="hero_section container">
	<div class="hero_content">
		<h1 class="hero_title">
			Exploring
			<span class="animate-text-gradient">Svelte Motion</span>
		</h1>
		<p class="hero_subtitle">A curated collection of interactive animation examples built with Svelte 5. From built-in transitions to advanced motion libraries.</p>
	</div>
</section>

<!-- Grid of Examples -->
<section class="examples_section container">
	<div class="examples_grid">
		{#each examples as example}
			<ExampleCard {...example} />
		{/each}
	</div>
</section>

<style>
	.hero_section {
		padding-top: 6rem;
		padding-bottom: 8rem;
	}

	.hero_content {
		max-width: 56rem;
		margin: auto;
		text-align: center;
	}

	.hero_title {
		font-size: 2.25rem;
		font-weight: 700;
		letter-spacing: -0.025em;
	}

	.animate-text-gradient {
		background-image: linear-gradient(-225deg, #231557 0%, #44107a 29%, #ff1361 67%, #fff800 100%);
		background-size: auto auto;
		background-clip: border-box;
		background-size: 200% auto;
		color: #fff;
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		animation: textclip 2s linear infinite;
		display: inline-block;
	}

	@keyframes textclip {
		to {
			background-position: 200% center;
		}
	}

	.hero_subtitle {
		margin-top: 1.5rem;
		font-size: 1.125rem;
		line-height: 1.75;
		color: hsl(var(--muted-foreground));
	}

	.examples_section {
		padding-bottom: 6rem;
	}

	.examples_grid {
		display: grid;
		justify-content: center;
		grid-template-columns: repeat(auto-fit, minmax(14rem, max-content));
		gap: 2rem;
	}

	/* Responsive Breakpoints */
	@media (min-width: 640px) {
		.hero_title {
			font-size: 3rem;
		}
	}

	@media (min-width: 1024px) {
		.hero_title {
			font-size: 3.75rem;
		}
	}
</style>
