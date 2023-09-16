<script>
  import { Header, Footer } from "$lib/components";
  import "../app.css";
</script>

<div id="svelte-page">
  <Header />
  <main id="page-content">
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
  main {
    display: flex;
    width: 100%;
    justify-content: center;
    overflow: hidden;
  }
</style>
