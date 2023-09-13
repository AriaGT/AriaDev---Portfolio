<script>
  import { Header, Footer } from "$lib/components";
  import "../app.css";
</script>

<div id="svelte-page">
  <Header />
  <main class="main-content">
    <slot />
  </main>
  <Footer />
</div>

<style>
  #svelte-page {
    max-height: 100vh;
    display: grid;
    place-items: center;
  }
  .main-content {
    padding: 4rem 1.5rem;
    min-height: 36rem;
    max-width: 1080px;
  }

  @media (width >=600) {
    .main-content {
      padding: 4rem 6rem;
      min-height: 36rem;
    }
  }
</style>
