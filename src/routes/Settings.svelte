<script>
  import List from './List.svelte';

  import Jedit from '../lib/Jedit.svelte';
  import DataFetch from "./DataFetch.svelte";
  import { _pages, _currentPage } from "./storeData";
  import { Spacer } from "../lib/bs";
  import Page from "../lib/bs/Page.svelte";
  import { onMount } from "svelte";
  let label = "Settings";
  let actPage = 0;

  console.log(`${label} init!`);
  onMount(() => {
    console.log(`${label} mounted!`);
  });
</script>

<Page body class="py-4">
  <DataFetch let:payload>
    <div class="container-fluid">
      <header class="flex items-center justify-around">
        <h1 class="display-4">{label}</h1>
      </header>

      
    </div>
    
      <article class="container-fluid">
        <Spacer />
        <div class="row">
          <div class="col-md-4">
            
            <nav class="list-group list-group-flush">
              {#each payload as { pageType, imgUrl, storyText, choice1, choice2, choice1Text, choice2Text, pageTitel, videoUrl, audioUrl, daten, op1, page }, i}
                <button 
                  on:click={() =>{
                    actPage = i;
                    console.log("act", i)
                  }} 
                  class="list-group-item list-group-item-action flex-column"
                  class:active={actPage === i}>
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
          
          </div>
          <div class="col-md">
            <Jedit pages={payload} bind:actPage>
  
            </Jedit>
          </div>
        </div>
        <Spacer />
      </article>
   

  </DataFetch>
</Page>
