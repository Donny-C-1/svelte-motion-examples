<script>
  import { fade } from 'svelte/transition';

  let visible = $state(true);

  function toggle() {
    visible = !visible;
  }
</script>

<div class="block">
  {#if visible}
    <div class="square" transition:fade={{ duration: 300 }}>Fade</div>
  {/if}

  <button class="toggle_button" onclick={_ => visible = !visible}>Toggle Visibility</button>
</div>


<style>
  .block {
    display: grid;
    place-items: center;
    gap: 2rem;
  }
  .square {
    width: 7rem;
    aspect-ratio: 1;
    background-color: hsl(var(--accent));
    display: grid;
    place-items: center;
    color: hsl(var(--primary-foreground));
    border-radius: .5rem;
  }
  .toggle_button {
    display: inline-block;
    background-color: hsl(var(--primary));
    border: 0;
    padding: .35rem .7rem;
    cursor: pointer;
    margin: auto;
    border-radius: .35rem;
  }
</style>