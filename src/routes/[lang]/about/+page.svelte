<script>
    import { Biography, Skills } from "$lib/components";
import { GLOBAL_CLASSES } from "$lib/constants/cssClasses";
  import { route } from "$lib/stores/route.store";
  route.set("about");
</script>

<section class={GLOBAL_CLASSES.SECTIONS_CONTAINER}>
  <Biography />
  <Skills page_location="about" />
</section>
