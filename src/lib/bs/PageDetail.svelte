<script>
  // import { fade, fly } from 'svelte/transition'
  // export let op_fade = {duration: 400}
  // export let op_fly = { x: 300, duration: 1000 }
  export let open = false;
</script>

<section class:open={open}>
  <slot />
</section>
<article class:open>
  <slot name="details"><!-- optional fallback --></slot>
</article>

<style>
  section,
  article {
    --color: #565c64;
    --bg: #fff;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 30;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: var(--bg);
    opacity: 1;
    transition: all 300ms ease-in;
  }
  article {
    z-index: 40;
    opacity: 0;
    transition: all 300ms ease-in;
    transform: translateX(100%);
  }
  article.open {
    transform: translateX(0);
    opacity: 1;
  }
  section.open {
    overflow-y: hidden;
    opacity: 0;
  }
</style>
