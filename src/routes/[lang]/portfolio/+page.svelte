<script>
  import { Projects } from "$lib/components";
  import { GLOBAL_CLASSES } from "$lib/constants/cssClasses";
  import { route } from "$lib/stores/route.store";
  route.set("portfolio");
</script>

<section class={ GLOBAL_CLASSES.SECTIONS_CONTAINER }>
  <div class={ GLOBAL_CLASSES.PADDED_SECTION }>
    <h2>Portafolio</h2>
    <p>Te presento los proyectos en los que he trabajado para que conozcas un poco más el producto que ofrezco.</p>
  </div>
  <Projects page_location="portfolio"/>
</section>

<style>
  .projects-container {
    display: flex;
    gap: calc( var(--rem) * 2 );
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
