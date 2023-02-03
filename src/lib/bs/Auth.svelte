<script>
  import { onMount, onDestroy } from "svelte";
  import { push } from "svelte-spa-router";
  import { _user, _profile, supabase } from "../data";
  import SignIn from "./SignIn.svelte";
  let ready = false;
  let step = 0;
  export let redirect = "/";
  supabase.auth.onAuthStateChange((event, session) => {
    if (event == "SIGNED_IN") {
      _user.set(session.user);
    } else {
      _user.set(null);
      _profile.set(null);
      push("/");
    }
  });
  const getProfile = async (uid) => {
    if (!uid) return;

    try {
      let { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", uid);
      if (error) throw error;
      if (data) {
        _profile.set(data[0]);
      }
    } catch (error) {
      alert("Error Login!");
    }
  };
  onMount(async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) _user.set(user);

    ready = true;
  });
  onDestroy(() => {
    ready = false;
    step = 0;
  });

  $: if ($_user && !$_profile) {
    step = 1;
    let id = $_user.id;
    getProfile(id);
    push(redirect);
  }
  $: if ($_profile && $_user) {
    step = 2;
  }
  $: console.log("Step", step);
</script>

{#if ready}
  {#if $_user}
    <slot><!-- optional fallback --></slot>
  {:else}
    <main class="form">
      <SignIn />
    </main>
  {/if}
{/if}

<style>
  :global(main.form) {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
