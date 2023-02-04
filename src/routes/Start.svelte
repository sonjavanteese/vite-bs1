<script>

  import { supabase, _user } from "../lib/data";

</script>


<section class="page">
  <figure class="container-fluid mt-2" style="background-image: url(https://assets.codepen.io/6886419/IntroPage.png);">
      <div>
          <a href="#/game" role="button" class="btn btn-lg btn-primary">Label</a>
      </div>
  </figure>
  <footer class="mb-2 py-4 shadow">
      <div class="container">
        <div>
            <h4>
              Knowledge
            </h4>
            <p>This game's media source all comes from the animated movie 'A Slience Voice'. We used screenshot to capture the images, and we also alter the story to fit the content of our game. </p>
          </div>
        <!--   <div class="justify-content-center row">
              <div class="col-6 d-grid gab-2">
                  <button type="button" class="btn btn-dark btn-lg">Action</button>                                          
              </div>
              <div class="col-6 d-grid gab-2">
                  <button type="button" class="btn btn-lg btn-secondary">Action</button>                                          
              </div>
          </div> -->
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
    flex-grow: 1;
}

.page > footer {
    margin-top: auto;
}
</style>