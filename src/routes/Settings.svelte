<script>
  import Jedit from './Jedit.svelte';
  import DataFetch from "./DataFetch.svelte";
  import { _pages, _currentPage } from "./storeData";
  import { Spacer } from "../lib/bs";
  import Page from "../lib/bs/Page.svelte";
  import { onMount } from "svelte";
  let label = "Settings";
  let editHolder;

  console.log(`${label} init!`);
  onMount(() => {
    console.log(`${label} mounted!`);
  });
</script>

<Page body class="py-4">
  <Jedit></Jedit>

  <DataFetch let:payload>
    <div class="container-fluid">
      <header class="flex items-center justify-around">
        <h1 class="display-4">{label}</h1>
      </header>

      <section>
        <Spacer />
        <nav class="list-group list-group-flush">
          {#each payload as { pageType, imgUrl, storyText, choice1, choice2, choice1Text, choice2Text, pageTitel, videoUrl, audioUrl, daten, op1, page }, i}
            <button class="list-group-item list-group-item-action flex-column">
              <div
                class="d-flex w-100 justify-content-between align-items-start"
              >
                <h4 class="mb-1">Page {page}</h4>
                <small class="text-muted badge">{page + 1}</small>
              </div>
              <p class="mb-1">{choice1Text}</p>
              <small class="text-muted">next: {choice1}</small>
            </button>
          {/each}
        </nav>
        <Spacer />
      </section>
    </div>
  </DataFetch>
</Page>
