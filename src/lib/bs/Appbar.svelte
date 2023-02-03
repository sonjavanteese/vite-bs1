<script>
  import Navbar from "sveltestrap/src/Navbar.svelte";
  import NavbarBrand from "sveltestrap/src/NavbarBrand.svelte";
  import NavbarToggler from "sveltestrap/src/NavbarToggler.svelte";
  export let label = "Nwp-App";
  export let openSb;
</script>

<header class="sticky-top">
  <nav class="navbar bg-primary navbar-dark" data-bs-theme="dark">
    <span class="navbar-brand ms-2 mb-0 h1">{label}</span>
      
    
    <button
      class="navbar-toggler me-2"
      on:click={openSb}
      type="button"
      aria-controls="offcanvasNavbar"
    >
      <span class="navbar-toggler-icon" />
    </button>
  </nav>
</header>
