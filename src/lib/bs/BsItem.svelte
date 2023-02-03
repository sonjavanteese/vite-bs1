<script>
  import ListGroupItem from "sveltestrap/src/ListGroupItem.svelte";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let name;
  export let path;
  export let center;
</script>

<ListGroupItem tag="a" href="#{path}" action>
  <div on:click={(e) => dispatch("clicked", e)} class:center>
    <article>
      <slot>{name}</slot>
    </article>
    <aside><slot name="right" /></aside>
  </div>
</ListGroupItem>

<style lang="scss">
  div {
    display: flex;
    justify-content: space-between;
    &.center {
      align-items: center;
    }
  }
</style>
