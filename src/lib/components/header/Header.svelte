<script>
  import { NavMenu, Titles } from "./elements";
  import { route } from "$lib/stores";

  /** @type { Route } */
  let actualRoute;
  route.subscribe((value) => (actualRoute = value));
</script>

<header class="header">
  <NavMenu {actualRoute} />
  <Titles {actualRoute} />
</header>

<style>
  .header {
    width: 100%;
    height: 100vh;
    background-color: var(--gray);
  }
</style>
