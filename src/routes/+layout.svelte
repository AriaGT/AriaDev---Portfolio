<script>
  import Header from '$lib/components/header/Header.svelte'
  import '../app.css'
</script>

<div id="svelte-page">
  <Header />
  <slot />
</div>

<style>
  #svelte-page {
    max-height: 100vh;
  }
</style>
