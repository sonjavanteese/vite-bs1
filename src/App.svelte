<script>
  import {
    List,
    ListItem,
    AppBar,
    SideBar,
    Spacer,
    Auth,
    SignOut,
  } from "./lib/bs";
  const navData = [
    { path: "/", name: "Start" },
    { path: "/game", name: "Game" },
    { path: "/user", name: "User" },
    { path: "/settings", name: "Settings" },
  ];
  import Router from "svelte-spa-router";
  import routes from "./routes/routes";
  let open;
  const openSb = () => {
    open = true;
  };
</script>



<SideBar bind:open let:toggle>
  <List flush>
    {#each navData as { path, name }, i}
      <ListItem href="#{path}" on:click={toggle}>
        {name}
        <span slot="right" class="badge bg-secondary rounded-pill">{i + 1}</span
        >
      </ListItem>
    {/each}
  </List>
  <svelte:fragment slot="footer">
    <SignOut>
      <div class="d-grid gap-2">
        <button type="button" class="btn btn-danger" on:click={toggle}>Logout</button>
      </div>
    </SignOut>
  </svelte:fragment>
</SideBar>



<Auth>
  <AppBar {openSb} />
  <main>
    <Router {routes} />
  </main>
</Auth>
