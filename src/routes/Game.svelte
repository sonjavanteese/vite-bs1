<script>
  import { supabase, _user } from "../lib/data";
  let pages = [
    //可以hide一个button
    //找javasrcipt how to access button text
    //直接把button的class or id 设成choice
    //if else : if choice1 = choice2 就隐藏choice2

    {
      page: 0,
      imgUrl: "https://assets.codepen.io/6886419/Page1.png",
      storyText:
        "This is a new transfer student who can't hear or speak. For this reason, we could only communicate with her by writing in her notebook. At the same time, the teacher want us to learn sign language before class so that she could be integrated into our class. We hate her because she is different from us.",
      choice1: 1,
      choice2: 1,
      choice1Text: "Go to next page",
      choice2Text: "",
    },
    {
      page: 1,
      imgUrl: "https://assets.codepen.io/6886419/Page2.png",
      storyText:
        "Some classmates always bully her at school because she couldn't talk or hear.",
      choice1: 2,
      choice2: 2,
      choice1Text: "Go to next page",
      choice2Text: "",
    },
    {
      page: 2,
      imgUrl: "https://assets.codepen.io/6886419/Page3.png",
      storyText:
        "One day after class, one of the students in the class is bullying her, and as a bystander you would：",
      choice1: 3,
      choice2: 4,
      choice1Text: "Stop him and talk to teachers",
      choice2Text: "Pretend not to know anything and continue watching",
    },
    {
      page: 3,
      imgUrl: "https://assets.codepen.io/6886419/Page4.png",
      storyText:
        "She is very grateful to your help. She always wants to be close to you, now you would:",
      choice1: 5,
      choice2: 4,
      choice1Text: "Become friends with her",
      choice2Text: "Tell her you hate her and want her to stay away from you",
    },
    {
      page: 4,
      imgUrl: "https://assets.codepen.io/6886419/Page5.png",
      storyText:
        "With no one helping her she was always alone in a corner, sad. This day you see her crying in the classroom. Now you would",
      choice1: 5,
      choice2: 6,
      choice1Text:
        "Reassure her and encourage her to tell teachers and parents",
      choice2Text: "Pretend you don't see it",
    },
    {
      page: 5,
      imgUrl: "https://assets.codepen.io/6886419/Page6.png",
      storyText:
        "You became very good friends, and she gradually became cheerful with your help.",
      choice1: 7,
      choice2: 7,
      choice1Text: "Go to next page",
      choice2Text: "",
    },
    {
      page: 6,
      imgUrl: "https://assets.codepen.io/6886419/Page7.png",
      storyText:
        "She is bullied more often in the class, and this day you see two students blatantly writing on the blackboard to call her names. At this point you would：",
      choice1: 7,
      choice2: 8,
      choice1Text:
        "Erase the words on the blackboard and point out the mistakes of the two boys",
      choice2Text: "Get used to it and laugh at her with them",
    },
    {
      page: 7,
      imgUrl: "https://assets.codepen.io/6886419/Page8.png",
      storyText:
        "She gets rid of school bullying and integrated into your class.",
      choice1: 11,
      choice2: 11,
      choice1Text: "Congratuations on helping her to get out of the woods!",
      choice2Text: "",
    },
    {
      page: 8,
      imgUrl: "https://assets.codepen.io/6886419/Page9.png",
      storyText:
        "She is gradually bullied more and more often, from once a week to twice a day...",
      choice1: 9,
      choice2: 9,
      choice1Text: "Go to next page",
      choice2Text: "",
    },
    {
      page: 9,
      imgUrl: "https://assets.codepen.io/6886419/Page10.png",
      storyText:
        "On this day, the class bully her as usual. They rudely pull out her hearing aid, so her ears bleed",
      choice1: 10,
      choice2: 10,
      choice1Text: "Go to next page",
      choice2Text: "The End",
    },
    {
      page: 10,
      imgUrl: "https://assets.codepen.io/6886419/Page11.png",
      storyText: "So she transfers and never goes back to this school.",
      choice1: 11,
      choice2: 11,
      choice1Text: "The End",
      choice2Text: "The End",
    },
    {
      page: 11,
      imgUrl: "https://assets.codepen.io/6886419/the+end.jpeg",
      storyText: "You can start over by clicking the restart button.",
      choice1: 0,
      choice2: 0,
      choice1Text: "Restart",
      choice2Text: "Restart",
    },
  ];

  let currentPage = 0;
</script>

<section class="page">
  <figure class="container mt-2">
    <img
      class="img-figure"
      alt=""
      src={pages[currentPage].imgUrl
        ? pages[currentPage].imgUrl
        : "https://assets.codepen.io/6886419/Page1.png"}
    />
  </figure>
  <footer class="mb-2 py-4 shadow">
    <div class="container">
      <h5>
        {pages[currentPage].storyText ? pages[currentPage].storyText : "..."}
      </h5>

      <div class="py-2">
        <div class="d-grid gap-2">
          <button
            type="button"
            class="btn btn-dark btn-lg"
            on:click={() => {
              currentPage = pages[currentPage].choice1;
            }}
          >
            {pages[currentPage].choice1Text
              ? pages[currentPage].choice1Text
              : "Action"}
          </button>

          {#if pages[currentPage].choice1 !== pages[currentPage].choice2}
            <button
              type="button"
              class="btn btn-lg btn-secondary"
              on:click={() => {
                currentPage = pages[currentPage].choice2;
              }}
              >{pages[currentPage].choice2Text
                ? pages[currentPage].choice2Text
                : "..."}</button
            >
          {/if}
        </div>
      </div>
    </div>
  </footer>
</section>

<style>
  .page {
    --bg: var(--bs-body-bg);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    overflow-x: hidden;
    background-color: var(--bg);
    display: flex;
    flex-direction: column;
  }
  .page > figure {
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    width: 100%;
    height: 100%;
    min-height: 50vh;
    max-height: 50vh;
  }

  .page > footer {
    margin-top: auto;
  }
  .img-figure {
    display: block;
    width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
</style>
