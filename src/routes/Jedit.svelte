<script>
  // import { _pages, _currentPage } from "./storeData";
  import { onMount } from "svelte";
  import { JSONEditor } from "@json-editor/json-editor/dist/jsoneditor";

  let label = "Jedit";
  let editHolder;
  let jseditor;
  let selOption = {
    title: "Story-Game 1",
    schema: {"title":"Story-Data","definitions":{"lib":{"type":"object","properties":{"image":{"$ref":"#/definitions/image","title":"Image","propertyOrder":30},"disabled":{"$ref":"#/definitions/bool","title":"Disabled","propertyOrder":10}}},"bool":{"type":"boolean","format":"select","default":false,"options":{"hidden":false,"containerAttributes":{"data-container":"nwp-bool"}}},"audio":{"type":"string","links":[{"rel":"Download File","href":"{{self}}","mediaType":"audio/mp3"}],"description":"https://nwp-cgn.de/archiv/audio/break.mp3"},"icons":{"enum":["alert","archive","arrow-left","at","album","bookmark","camera","cast","check","code","compass","copy","database","eye","eye-off","file","film","filter","globe","grid","home","hsp","image","left","mail","menu","mic","more-vertical","music","navi","pause","play","pen","power","right","save","server","settings","shield","shield-off","speaker","tag","trash","tube","user","user-auth","user-unauth","video","video-off","volume","volume-off","warn","wifi","x","zap","zap-off"],"type":"string","options":{"hidden":false}},"image":{"type":"string","links":[{"href":"{{self}}","mediaType":"image/png"}],"description":"https://nwp-cgn.de/img/poser/airhostess_128.png","options":{"hidden":false,"containerAttributes":{"data-container":"nwp-img"},"inputAttributes":{"placeholder":"https://"}}},"video":{"type":"string","links":[{"href":"{{self}}","mediaType":"video/mp4"}],"description":"https://nwp-cgn.de/img/video/p1.mp4"},"yesno":{"enum":["yes","no"],"type":"string","default":"yes"},"comment":{"type":"string","title":"Comment:","format":"textarea","default":""}},"type":"object","defaultProperties":["pages"],"properties":{"pages":{"type":"array","title":"Pages","format":"tabs","items":{"type":"object","title":"Pages ","headerTemplate":"Page {{ self.page }}","id":"page","defaultProperties":["page","pageType","videoUrl","audioUrl","imgUrl","storyText","choice1","choice2","choice1Text","choice2Text"],"properties":{"page":{"type":"number","title":"Page ID","default":0,"options":{"hidden":false},"propertyOrder":10},"imgUrl":{"type":"string","title":"ImgUrl","$ref":"#/definitions/image","propertyOrder":20},"storyText":{"type":"string","title":"StoryText","default":"","format":"text","options":{"hidden":false,"inputAttributes":{"placeholder":"Story Lorem ..."}},"propertyOrder":30},"choice1":{"type":"number","title":"Choice 1 ","default":1,"options":{"hidden":false},"propertyOrder":40},"choice2":{"type":"number","title":"Choice 2","default":1,"options":{"hidden":false},"propertyOrder":50},"choice1Text":{"type":"string","title":"Choice Text","default":"Go to next Page","format":"text","options":{"hidden":false,"inputAttributes":{"placeholder":"..."},"containerAttributes":{"data-container":"nwp-1"}},"propertyOrder":60},"choice2Text":{"type":"string","title":"Choice Text 2","default":"","format":"text","options":{"hidden":false,"inputAttributes":{"placeholder":"..."},"containerAttributes":{"data-container":"nwp-2"}},"propertyOrder":70},"pageTitel":{"type":"string","title":"Story Titel","default":"Titel","format":"text","options":{"hidden":false},"propertyOrder":80},"pageType":{"type":"string","title":"Type","enum":["default","audio","video"],"default":"default","options":{"hidden":false,"inputAttributes":{"class":"form-select"}},"propertyOrder":90},"videoUrl":{"title":"Video","$ref":"#/definitions/video","default":"https://nwp-cgn.de/img/video/p1.mp4","options":{"dependencies":{"pageType":"video"},"containerAttributes":{"data-container":"nwp-video"},"inputAttributes":{"placeholder":"https://"}},"propertyOrder":100},"audioUrl":{"title":"Audio","$ref":"#/definitions/audio","options":{"dependencies":{"pageType":"audio"},"hidden":false,"containerAttributes":{"data-container":"nwp-audio"},"inputAttributes":{"placeholder":"https://"}},"propertyOrder":110}},"propertyOrder":10}}}},
    startval: {"pages":[{"page":0,"pageType":"default","imgUrl":"https://assets.codepen.io/6886419/Page1.png","storyText":"This is a new transfer student who can't hear or speak. For this reason, we could only communicate with her by writing in her notebook. At the same time, the teacher want us to learn sign language before class so that she could be integrated into our class. We hate her because she is different from us.","choice1":1,"choice2":1,"choice1Text":"Go to next page","choice2Text":"","pageTitel":"","videoUrl":"","audioUrl":""}]},
  };
  const startEditor = (id = 0) => {
    let ops = {
      iconlib: "fontawesome4",
      object_layout: "normal",
      schema: selOption.schema,
      show_errors: "interaction",
      theme: "bootstrap4",
      enable_array_copy: true,
      prompt_before_delete: true,
      startval: selOption.startval,
    };

    const element = editHolder;
    if (jseditor instanceof JSONEditor) jseditor.destroy();
    jseditor = new JSONEditor(element, ops);
  };

  console.log(`${label} init!`);
  onMount(() => {
    console.log(`${label} mounted!`);
    startEditor();
  });
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
</svelte:head>

<div class="container-fluid">
  <div bind:this={editHolder} id="json-editor-form" />
</d