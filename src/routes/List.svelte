<script>
  export let payload = [];
</script>

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

