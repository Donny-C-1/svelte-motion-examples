<script>
  import codeIcon from "$lib/assets/code.png";
  import previewIcon from "$lib/assets/preview.png";
	import { fade } from "svelte/transition";

  let { name, description, Component, highlightedCode } = $props();

  let activeTab = $state("preview");
</script>

<div class="example-viewer">
  <div class="viewer-header">
    <h1 class="viewer-title">{name}</h1>
    {#if description}
      <p class="viewer-description">{description}</p>
    {/if}
  </div>

  <div class="tabs_container">
    <div class="controls">
      <button class="tab_button preview" onclick={() => activeTab = "preview"}>
        <img src={previewIcon} alt="" width="14" height="auto" />
        Preview
      </button>
      <button class="tab_button source" onclick={() => activeTab = "source"}>
        <img src={codeIcon} alt="" />
        Source
      </button>
    </div>
    <div>
      {#if activeTab === "preview"}
        <div in:fade class="tab_content preview_area">
          <Component />
        </div>
      {:else if activeTab === "source"}
        <div in:fade class="tab_content code_area">{@html highlightedCode}</div>
      {/if}
    </div>
  </div>
</div>

<style>
.viewer-header {
  margin-bottom: 1rem;
}

.viewer-title {
  font-size: 2.5rem;
  font-weight: 300;
}

.viewer-description {
  color: hsl(var(--muted-foreground));
  max-width: 30rem;
}

.tabs_container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: hsl(var(--card));
  border: .1rem solid hsl(var(--border));
  padding: 1rem;
  border-radius: .5rem;
  width: 100%;
}

.controls {
  display: flex;
  gap: 1rem;
  justify-content: end;
}

.tab_button {
  display: flex;
  align-items: center;
  gap: .5rem;
  font-size: .85rem;
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  border: 0;
  padding: .35rem .7rem;
  border-radius: .25rem;
  cursor: pointer;
  transition: .3s ease;
}

.tab_button:is(:focus-visible, :hover, :active) {
  translate: 0 -.1rem;
}

.preview_area {
  display: flex;
  min-height: 22rem;
  width: 100%;
  align-items: center;
  justify-content: center;
}

@layer shiki {
  .code_area :global(.shiki) {
    background-color: transparent !important;
    border-radius: 0.5rem;
    padding: 1rem;
    overflow-x: auto;
}
}

</style>