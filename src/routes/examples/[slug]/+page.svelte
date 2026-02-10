<script>
  import ExampleViewer from '$lib/components/ExampleViewer.svelte';

  let { data } = $props();
</script>

<div class="container page">
  {#if data.error}
    <div class="error_block">
      <p>{data.error.message}</p>
    </div>
  {:else}
    <ExampleViewer {...data} />
  {/if}
</div>

<style>
  .page {
    padding-block: 2rem;
    height: 100%;
    overflow: hidden;
  }

  .error_block {
    display: grid;
    place-items: center;
    color: hsl(var(--destructive));
    height: 100%;
    font-size: 4rem;
  }
</style>