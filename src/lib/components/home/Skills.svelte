<script>
  import { GLOBAL_CLASSES } from "$lib/constants/cssClasses";
  import { LangKeys } from "$lib/constants/langKeys";
  import { i, language } from "@inlang/sdk-js";
  import SkillsContainer from "./elements/SkillsContainer.svelte";
  import { Routes } from "$lib/constants";

  export let /** @type { "home" | "about" } */ page_location

  const skills_list = page_location === "home"
    ? LangKeys.skills.skills_list.slice(0, 1)
    : LangKeys.skills.skills_list
</script>

<section class={GLOBAL_CLASSES.PADDED_SECTION}>
  <h2>
    { i(LangKeys.skills.title) }
    {#if page_location === "home"}
      <a href={`/${language}/${Routes.about}`}>
        { i(LangKeys.general.see_more) } <i class="fa-solid fa-arrow-right-long" />
      </a>
    {/if}
    </h2>
  <section class="skills-organizator">
    {#each skills_list as skill}
      <div>
        <h3 class="skill-description">{ i(skill.desciption) }</h3>
        <SkillsContainer items={skill.items}/>
      </div>
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
  .skills-organizator {
    display: flex;
    flex-direction: column;
    gap: calc( var(--rem) * 4 );
    margin-bottom: calc( var(--rem) * 4 );
  }
  .more-section {
    display: flex;
    justify-content: center;
  }
</style>