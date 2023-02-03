<script>
  import { fade, fly } from "svelte/transition";
  import Container from "sveltestrap/src/Container.svelte";
  export let op_fade = { duration: 400 };
  export let op_fly = { x: 300, duration: 1000 };
  export let test = false;
  export let body = false;
  export let fluid = false;
</script>

<section class:test in:fade={op_fade}>
  {#if body}
    <Container {fluid} {...$$restProps}>
      <slot />
    </Container>
  {:else}
    <slot />
  {/if}
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
  .test {
    border: 1px solid red;
  }
</style>
