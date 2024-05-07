<script>
  import { Header, Footer } from "$lib/components";
  import "../reset.css"; import "../app.css";
</script>

<div id="svelte-page">
  <Header />
  <main id="main-content">
    <slot />
  </main>
  <Footer />
</div>

<style>
  #svelte-page {
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }
  #main-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    justify-content: center;
    overflow: hidden;
  }
</style>
