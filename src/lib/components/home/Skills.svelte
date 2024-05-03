<script>
  import { GLOBAL_CLASSES } from "$lib/constants/cssClasses";
  import { LangKeys } from "$lib/constants/langKeys";
  import { Button } from "$lib/components";
  import { i, language } from "@inlang/sdk-js";
  import SkillsContainer from "./elements/SkillsContainer.svelte";
    import { Routes } from "$lib/constants";

  export let /** @type { "home" | "about" } */ page_location

  const skills_list = page_location === "home"
    ? LangKeys.skills.skills_list.slice(0, 1)
    : LangKeys.skills.skills_list
</script>

<section class={GLOBAL_CLASSES.PADDED_SECTION}>
  <h2>{ i(LangKeys.skills.title) }</h2>
  <section class="skills-organizator">
    {#each skills_list as skill}
      <div>
        <h3 class="skill-description">{ i(skill.desciption) }</h3>
        <SkillsContainer items={skill.items}/>
      </div>
    {/each}
  </section>
  {#if page_location === "home"}
    <div class="more-section">
      <Button
        href={`/${language}/${Routes.about}`}
        text={ i(LangKeys.skills.home_button) }
      />
    </div>
  {/if}
</section>

<style>
  .skill-description {
    font-size: calc( var(--rem) * 1.4 );
    color: var(--light-gray);
    text-align: center;
    margin-bottom: calc( var(--rem) * 2 );
  }
  .skills-organizator {
    margin-top: calc( var(--rem) * 4 );
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