<script>
  import { onMount, onDestroy } from "svelte";
  import { _user, supabase } from "../data";
  import SignIn from "./SignIn.svelte";
  let ready = false;
  supabase.auth.onAuthStateChange((event, session) => {
    if (event == "SIGNED_IN") {
      _user.set(session.user);
    } else {
      _user.set(null);
    }
  });
  onMount(async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) _user.set(user);

    ready = true;
  });
  onDestroy(() => {
    ready = false;
  });

</script>

{#if ready}
  {#if $_user}
    <slot><!-- optional fallback --></slot>
  {:else}
    <section>
      <SignIn />
    </section>
  {/if}
{/if}

<style>
  section {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
