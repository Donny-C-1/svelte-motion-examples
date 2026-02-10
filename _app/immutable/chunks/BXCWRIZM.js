const r=`<script>\r
  import { fade } from 'svelte/transition';\r
\r
  let visible = $state(true);\r
\r
  function toggle() {\r
    visible = !visible;\r
  }\r
<\/script>\r
\r
<div class="block">\r
  {#if visible}\r
    <div class="square" transition:fade={{ duration: 300 }}>Fade</div>\r
  {/if}\r
\r
  <button class="toggle_button" onclick={_ => visible = !visible}>Toggle Visibility</button>\r
</div>\r
\r
\r
<style>\r
  .block {\r
    display: grid;\r
    place-items: center;\r
    gap: 2rem;\r
  }\r
  .square {\r
    width: 7rem;\r
    aspect-ratio: 1;\r
    background-color: hsl(var(--accent));\r
    display: grid;\r
    place-items: center;\r
    color: hsl(var(--primary-foreground));\r
    border-radius: .5rem;\r
  }\r
  .toggle_button {\r
    display: inline-block;\r
    background-color: hsl(var(--primary));\r
    border: 0;\r
    padding: .35rem .7rem;\r
    cursor: pointer;\r
    margin: auto;\r
    border-radius: .35rem;\r
  }\r
</style>`;export{r as default};
