<script>
	let { slug, name, description, imageSrc, motionLibrary = "svelte/motion", category } = $props();
</script>

<a href="/examples/{slug}" class="example-card">
	<div class="card-preview">
		{#if imageSrc}
			<img src={imageSrc} alt={name} class="preview-image" />
		{:else}
			<div class="preview-placeholder">
				<span class="placeholder-text">Preview</span>
			</div>
		{/if}
		<div class="motion-badge">{motionLibrary}</div>
	</div>
	<div class="card-footer">
		<div class="card-info">
			<p class="card-title">{name}</p>
		</div>
		<img src="{category}.svg" alt="{category}-icon" class="category-icon" />
	</div>
</a>

<style>
	.example-card {
		display: flex;
		flex-direction: column;
		background-color: hsl(var(--card));
		border: 0.1rem solid hsl(var(--border));
		border-radius: 0.5rem;
		overflow: hidden;
		text-decoration: none;
		color: inherit;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.card-preview {
		position: relative;
		width: 100%;
		aspect-ratio: 9/7;
		background: linear-gradient(135deg, hsl(var(--muted)) 0%, hsl(var(--card)) 100%);
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.preview-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.preview-placeholder {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.placeholder-text {
		font-size: 1.25rem;
		color: hsl(var(--muted-foreground));
	}

	.motion-badge {
		position: absolute;
		top: -2.5rem;
		right: 0.75rem;
		background: hsl(var(--popover) / 0.5);
		color: hsl(var(--primary));
		border: 1px solid hsl(var(--primary) / 0.1);
		padding: 0.225rem 0.5rem;
		border-radius: .375rem;
		font-size: 0.95rem;
		font-weight: 600;
		font-family: var(--monospace);
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		opacity: 0;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	}

	.example-card:is(:hover, :focus-visible, :active) .motion-badge {
		top: 12px;
		opacity: 1;
	}

	.card-footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 0.625rem 1rem;
		background-color: hsl(var(--card));
		border-top: .1rem solid hsl(var(--border));
	}

	.card-info {
		flex: 1;
	}

	.card-title {
		margin: 0 0 0.25rem 0;
		font-size: 0.875rem;
		color: hsl(var(--card-foreground));
		transition: color 0.2s ease;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.example-card:is(:hover, :focus-within, :active) .card-title {
		color: hsl(var(--primary));
	}

	.category-icon {
		width: 2rem;
		height: 2rem;
		flex-shrink: 0;
		opacity: 0.6;
		transition:
			opacity 0.2s ease,
			transform 0.2s ease;
	}

	.example-card:hover .category-icon {
		opacity: 1;
		transform: scale(1.1);
	}
</style>
