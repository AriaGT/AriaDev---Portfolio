<script>
  import { ProjectCard } from "$lib/components";
  import { GLOBAL_CLASSES } from "$lib/constants/cssClasses";
  import { LangKeys } from "$lib/constants/langKeys";
  import { i, language } from "@inlang/sdk-js";
  import { Projects, Routes } from "$lib/constants";

  export let /** @type { "home" | "portfolio" } */ page_location

  const projects_list = page_location === "home"
    ? Projects.slice(0, 2)
    : Projects
</script>

<section class={GLOBAL_CLASSES.PADDED_SECTION}>
  <h2>
    { i(LangKeys.portfolio.title) }
    {#if page_location === "home"}
      <a href={`/${language}/${Routes.portfolio}`}>
        { i(LangKeys.general.see_more) } <i class="fa-solid fa-arrow-right-long" />
      </a>
    {/if}
  </h2>
  <section class={ `projects-container` }>
    {#each projects_list as projectData}
      <ProjectCard {projectData} />
    {/each}
  </section>
</section>

<style>
  h2 {
    display: inline-block;
  }
  h2 a {
    display: inline-block;
  }
  h2 a {
    display: inline-block;
  }
  h2 a:hover, h2 a:hover i {
    text-decoration: underline;
  }
  .skill-description {
    font-size: calc( var(--rem) * 1.4 );
    color: var(--light-gray);
    text-align: center;
    margin-bottom: calc( var(--rem) * 2 );
  }
  .projects-container {
    display: flex;
    gap: calc( var(--rem) * 2 );
    flex-wrap: wrap;
    justify-content: center;
  }
  .more-section {
    display: flex;
    justify-content: center;
  }
</style>