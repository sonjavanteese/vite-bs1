<script>
  import BsList from './lib/bs/BsList.svelte';
  import BsItem from './lib/bs//BsItem.svelte';
  import Appbar from './lib/bs/Appbar.svelte'
  import Sidebar from './lib/bs/Sidebar.svelte';
  import Spacer from './lib/bs/Spacer.svelte'
  const navData = [{"path":"/","name":"Start"},{"path":"/game","name":"Game"},{"path":"/settings","name":"Settings"}];
  import Router from 'svelte-spa-router'
  import routes from './routes/routes'
  import {NavbarToggler, Button} from 'sveltestrap';
  
  import { ListGroup, ListGroupItem } from 'sveltestrap';

  let open;
 const openSb = () => {
     open = true;
 };
</script>


<Sidebar bind:open let:toggle dark>
  <Spacer />
    <nav class="d-flex flex-column">
      {#each navData as item, i}

         <button class="list-button text-bg-dark">
          <span>{item.name}</span>
          <span class="badge rounded-pill text-bg-secondary">{i+1}</span>
          </button>
          
      {/each}
      </nav>
   <Spacer />
  <svelte:fragment slot="footer">
		<Button color="danger" on:click={toggle} block>Close</Button>
	</svelte:fragment>
</Sidebar>

<Appbar {openSb} />

<main>
    <Router {routes}/>
</main>



<style>
  .list-button {
    
  }
</style>