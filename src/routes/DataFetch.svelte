<script>
  import { _pages, _currentPage } from "./storeData";
  import { Loader } from "../lib/bs";
  import { onMount } from "svelte";
  let label = "Data Fetcher";
  let daten;
  const unsubscribe = _pages.subscribe((value) => {
    daten = value;
  });
  let datenOp = { asc: true };

  console.log(`${label} init!`);
  onMount(() => {
    console.log(`${label} mounted!`);
    if (daten && !daten.length) {
      _pages.fetchAll(datenOp);
    }
  });
</script>

{#await daten}
  <Loader />
{:then payload}
  <slot {payload} />
{/await}
