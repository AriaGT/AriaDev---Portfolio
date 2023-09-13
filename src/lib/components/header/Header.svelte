<script>
  import { NavMenu, Titles } from "./elements";
  import { language, route } from "$lib/stores";

  /** @type { Route } */
  let actualRoute;
  route.subscribe((value) => (actualRoute = value));

  /** @type { Language } */
  let currentLanguage;
  language.subscribe((value) => (currentLanguage = value));
</script>

<header class="header">
  <NavMenu {actualRoute} {currentLanguage} />
  <Titles {actualRoute} {currentLanguage} />
</header>

<style>
  .header {
    width: 100%;
    height: 100vh;
    background-color: var(--gray);
  }
</style>
