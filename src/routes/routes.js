  import Game from "./Game.svelte";
  import Start from "./Start.svelte";
  import Settings from "./Settings.svelte";
  import NotFound from "./NotFound.svelte";
  const routes = {
    '/': Start,
    '/game': Game,
    '/settings': Settings,
    '*': NotFound
  }
  export default routes;