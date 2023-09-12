<script>
  import { NavMenu, Titles } from './elements'
  import { route } from '$lib/stores/route.store'

  /** @type { Route } */
  let actual_route
  route.subscribe((value) => (actual_route = value))
</script>

<header class="header">
  <NavMenu {actual_route} />
  <Titles {actual_route} />
</header>

<style>
  .header {
    width: 100%;
    height: 100vh;
    background-color: var(--gray);
  }
</style>
