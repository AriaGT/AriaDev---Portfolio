<script>
  import { Presentation, Skills } from "$lib/components";
  import { route } from "$lib/stores/route.store";
  route.set("main");
</script>

<section class="sections-container">
  <Presentation />
  <Skills page_location="home"/>
</section>
