<script>
  import { fade, fly } from "svelte/transition";
  export let op_fade = { duration: 400 };
  export let op_fly = { x: 300, duration: 1000 };
</script>

<section {...$$restProps} in:fade={op_fade}>
    <slot />
</section>

<style>
  section {
    --bg: var(--bs-body-bg);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    overflow-x: hidden;
    background-color: var(--bg);
  }
</style>
