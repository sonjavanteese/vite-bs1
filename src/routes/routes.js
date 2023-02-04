  import Game from "./Game.svelte";
  import Start from "./Start.svelte";
  import Settings from "./Settings.svelte";
  import User from './User.svelte';
  import NotFound from "./NotFound.svelte";
  const routes = {
    '/': Start,
    '/game': Game,
    '/user': User,
    '/settings': Settings,
    '*': NotFound
  }
  export default routes;