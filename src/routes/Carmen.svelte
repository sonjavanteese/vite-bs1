<script>
  import Page from "../lib/bs/Page.svelte";
  let label = "Svelte 2";
  let daten = [];
  let details = [];
  const fetchDetail = (id = 0) => {
    fetch("https://nwp-cgn.de/apis/carmen/" + id)
      .then((r) => r.json())
      .then((d) => {
        if (d) {
          details = d.data1;
          console.log("FETCH Details", daten);
        }
      });
  };
  const fetchData = () => {
    fetch("https://nwp-cgn.de/apis/carmen")
      .then((r) => r.json())
      .then((d) => {
        if (d) {
          daten = d.data1;
          console.log("FETCH", daten);
        }
      });
  };

  fetchData();
</script>

<Page body class="py-5">
  <header class="flex items-center justify-around">
    <h1 class="display-4">{label}</h1>
  </header>
  {#if daten.length}
    Daten OK
    {#each daten as el}
      <button on:click={() => fetchDetail(el.id)}>ID {el.id}</button>
    {/each}
  {/if}
  {#if details.length}
    Details OK

    {#each details as el}
      <button class="btn btn-light fs-1">ID {el.id}</button>
    {/each}
  {/if}
</Page>
