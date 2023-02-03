<script>
  import ListGroup from "sveltestrap/src/ListGroup.svelte";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let flush = false;
</script>

<div
  on:click={() => {
    dispatch("clicked", { value: "clicked" });
  }}
>
  <ListGroup {flush}>
    <slot />
  </ListGroup>
</div>
