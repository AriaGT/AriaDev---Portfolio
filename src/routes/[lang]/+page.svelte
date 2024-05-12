<script>
  import { Presentation, Skills, Projects } from "$lib/components";
  import { route } from "$lib/stores/route.store";
  route.set("main");
</script>

<section class="sections-container">
  <Presentation />
  <Skills page_location="home"/>
  <Projects page_location="home"/>
</section>
