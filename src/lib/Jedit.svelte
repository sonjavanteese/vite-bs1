<script>
  // import { _pages, _currentPage } from "./storeData";
  import { onMount } from "svelte";
  import { JSONEditor } from "@json-editor/json-editor/dist/jsoneditor";
  const label = "Story-Editor";
  const SCHEMA = {"title":"Story-Page","definitions":{"bool":{"type":"boolean","format":"select","default":false,"options":{"hidden":false,"containerAttributes":{"data-container":"nwp-bool"},"inputAttributes":{"class":"form-select"}}},"audio":{"type":"string","links":[{"rel":"Download File","href":"{{self}}","mediaType":"audio/mp3"}],"description":"https://nwp-cgn.de/archiv/audio/break.mp3"},"image":{"type":"string","links":[{"href":"{{self}}","mediaType":"image/png"}],"description":"https://nwp-cgn.de/img/poser/airhostess_128.png","options":{"hidden":false,"containerAttributes":{"data-container":"nwp-img"},"inputAttributes":{"placeholder":"https://","id":"nwp-img"}}},"video":{"type":"string","links":[{"href":"{{self}}","mediaType":"video/mp4"}],"description":"https://nwp-cgn.de/img/video/p1.mp4"},"yesno":{"enum":["yes","no"],"type":"string","default":"yes"},"comment":{"type":"string","title":"Comment:","format":"textarea","default":""}},"type":"object","id":"page","defaultProperties":["page","pageType","videoUrl","audioUrl","imgUrl","storyText","choice1","choice2","choice1Text","choice2Text"],"properties":{"page":{"type":"number","title":"Page ID","default":0,"options":{"hidden":false},"propertyOrder":10},"imgUrl":{"type":"string","title":"ImgUrl","$ref":"#/definitions/image","propertyOrder":20},"storyText":{"type":"string","title":"StoryText","default":"","format":"textarea","options":{"hidden":false,"inputAttributes":{"placeholder":"Story Lorem ..."}},"propertyOrder":30},"choice1":{"type":"number","title":"Choice 1 ","default":1,"options":{"hidden":false},"propertyOrder":40},"choice2":{"type":"number","title":"Choice 2","default":1,"options":{"hidden":false},"propertyOrder":50},"choice1Text":{"type":"string","title":"Choice Text","default":"Go to next Page","format":"text","options":{"hidden":false,"inputAttributes":{"placeholder":"..."},"containerAttributes":{"data-container":"nwp-1"}},"propertyOrder":60},"choice2Text":{"type":"string","title":"Choice Text 2","default":"","format":"text","options":{"hidden":false,"inputAttributes":{"placeholder":"..."},"containerAttributes":{"data-container":"nwp-2"}},"propertyOrder":70},"pageTitel":{"type":"string","title":"Story Titel","default":"Titel","format":"text","options":{"hidden":false},"propertyOrder":80},"pageType":{"type":"string","title":"Type","enum":["default","audio","video"],"default":"default","options":{"hidden":false,"inputAttributes":{"class":"form-select"}},"propertyOrder":90},"videoUrl":{"title":"Video","$ref":"#/definitions/video","default":"https://nwp-cgn.de/img/video/p1.mp4","options":{"dependencies":{"pageType":"video"},"containerAttributes":{"data-container":"nwp-video"},"inputAttributes":{"placeholder":"https://"}},"propertyOrder":100},"audioUrl":{"title":"Audio","$ref":"#/definitions/audio","options":{"dependencies":{"pageType":"audio"},"hidden":false,"containerAttributes":{"data-container":"nwp-audio"},"inputAttributes":{"placeholder":"https://"}},"propertyOrder":110},"op1":{"$ref":"#/definitions/bool","title":"Option 1","propertyOrder":130},"daten":{"type":"string","title":"Daten"}},"propertyOrder":10};
  
  
  export let pages = [{"page":0,"pageType":"default","imgUrl":"https://assets.codepen.io/6886419/Page1.png","storyText":"This is a new transfer student who can't hear or speak. For this reason, we could only communicate with her by writing in her notebook. At the same time, the teacher want us to learn sign language before class so that she could be integrated into our class. We hate her because she is different from us.","choice1":1,"choice2":1,"choice1Text":"Go to next page","choice2Text":"","pageTitel":null,"videoUrl":null,"audioUrl":null,"daten":null,"op1":false},{"page":1,"pageType":"default","imgUrl":"https://assets.codepen.io/6886419/Page2.png","storyText":"Some classmates always bully her at school because she couldn't talk or hear.","choice1":2,"choice2":2,"choice1Text":"Go to next page","choice2Text":"","pageTitel":null,"videoUrl":null,"audioUrl":null,"daten":null,"op1":false},{"page":2,"pageType":"default","imgUrl":"https://assets.codepen.io/6886419/Page3.png","storyText":"One day after class, one of the students in the class is bullying her, and as a bystander you would：","choice1":3,"choice2":4,"choice1Text":"Stop him and talk to teachers","choice2Text":"Pretend not to know anything and continue watching","pageTitel":null,"videoUrl":null,"audioUrl":null,"daten":null,"op1":false},{"page":3,"pageType":"default","imgUrl":"https://assets.codepen.io/6886419/Page4.png","storyText":"She is very grateful to your help. She always wants to be close to you, now you would:","choice1":5,"choice2":4,"choice1Text":"Become friends with her","choice2Text":"Tell her you hate her and want her to stay away from you","pageTitel":null,"videoUrl":null,"audioUrl":null,"daten":null,"op1":false},{"page":4,"pageType":"default","imgUrl":"https://assets.codepen.io/6886419/Page5.png","storyText":"With no one helping her she was always alone in a corner, sad. This day you see her crying in the classroom. Now you would","choice1":5,"choice2":6,"choice1Text":"Reassure her and encourage her to tell teachers and parents","choice2Text":"Pretend you don't see it","pageTitel":null,"videoUrl":null,"audioUrl":null,"daten":null,"op1":false},{"page":5,"pageType":"default","imgUrl":"https://assets.codepen.io/6886419/Page6.png","storyText":"You became very good friends, and she gradually became cheerful with your help.","choice1":7,"choice2":7,"choice1Text":"Go to next page","choice2Text":null,"pageTitel":null,"videoUrl":null,"audioUrl":null,"daten":null,"op1":false},{"page":6,"pageType":"default","imgUrl":"https://assets.codepen.io/6886419/Page7.png","storyText":"She is bullied more often in the class, and this day you see two students blatantly writing on the blackboard to call her names. At this point you would：","choice1":7,"choice2":8,"choice1Text":"Erase the words on the blackboard and point out the mistakes of the two boys","choice2Text":"Get used to it and laugh at her with them","pageTitel":null,"videoUrl":null,"audioUrl":null,"daten":null,"op1":false},{"page":7,"pageType":"default","imgUrl":"https://assets.codepen.io/6886419/Page8.png","storyText":"She gets rid of school bullying and integrated into your class.","choice1":11,"choice2":11,"choice1Text":"Congratuations on helping her to get out of the woods!","choice2Text":null,"pageTitel":null,"videoUrl":null,"audioUrl":null,"daten":null,"op1":false},{"page":8,"pageType":"default","imgUrl":"https://assets.codepen.io/6886419/Page9.png","storyText":"She is gradually bullied more and more often, from once a week to twice a day...","choice1":9,"choice2":9,"choice1Text":"Go to next page","choice2Text":null,"pageTitel":null,"videoUrl":null,"audioUrl":null,"daten":null,"op1":false},{"page":9,"pageType":"default","imgUrl":"https://assets.codepen.io/6886419/Page10.png","storyText":"On this day, the class bully her as usual. They rudely pull out her hearing aid, so her ears bleed","choice1":10,"choice2":10,"choice1Text":"Go to next page","choice2Text":"The End","pageTitel":null,"videoUrl":null,"audioUrl":null,"daten":null,"op1":false},{"page":10,"pageType":"default","imgUrl":"https://assets.codepen.io/6886419/Page11.png","storyText":"So she transfers and never goes back to this school.","choice1":11,"choice2":11,"choice1Text":"The End","choice2Text":"The End","pageTitel":null,"videoUrl":null,"audioUrl":null,"daten":null,"op1":false},{"page":11,"pageType":"default","imgUrl":"https://assets.codepen.io/6886419/the+end.jpeg","storyText":"You can start over by clicking the restart button.","choice1":0,"choice2":0,"choice1Text":"Restart","choice2Text":"Restart","pageTitel":null,"videoUrl":null,"audioUrl":null,"daten":null,"op1":false}];  
  export let actPage = 0;
  let editHolder;
  let jseditor;
  
  const startEditor = (id = 0) => {
    let options = {
      schema: SCHEMA,
      iconlib: "fontawesome4",
      object_layout: "normal",
      startval: pages[id],
      show_errors: "interaction",
      theme: "bootstrap4",
      enable_array_copy: true,
      prompt_before_delete: true,
    };
    const element = editHolder;
    if (jseditor instanceof JSONEditor) jseditor.destroy();
    jseditor = new JSONEditor(element, options);
  };

  console.log(`${label} init!`);
  onMount(() => {
    console.log(`${label} mounted!`);
    startEditor(actPage);
  });
  $: if (actPage) {
    startEditor(actPage);
  } 
  $: if (actPage && actPage == 0) {
    startEditor(0)
  }
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
</svelte:head>

<div class="container-fluid-x">
  <div bind:this={editHolder} id="json-editor-form" />
</div>
