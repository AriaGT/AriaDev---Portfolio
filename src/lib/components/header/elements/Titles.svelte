<script>
  import { MoreButton } from "./";
  import { i } from "@inlang/sdk-js";
  import { LangKeys } from "$lib/constants/langKeys";

  /** @type { Route } */
  export let actualRoute;

  /** @type { String[] } */
  let subtitleWords;
  $: subtitleWords = i(LangKeys.header[actualRoute].front).split(" ");
</script>

<section class="titles-container">
  <h1 class="title">{i(LangKeys.header[actualRoute].back)}</h1>
  <h2 class="subtitle">
    {#each subtitleWords as word}
      {#if word.includes("*")}
        <strong class="subtitle--strong">{word.substring(1)}</strong>
      {:else}
        {word}
      {/if}
      {" "}
    {/each}
    <MoreButton />
  </h2>
</section>

<style>
  .titles-container {
    display: grid;
    place-items: center;
    place-content: center;
    width: 100%;
    padding-bottom: 8rem;
    height: calc(100vh - 8rem);
  }
  .title {
    font-size: 17vw;
    width: 100%;
    font-family: var(--bold-font);
    line-height: 1.08;
    color: var(--dark-gray);
    text-align: center;
    overflow: hidden;
    word-wrap: break-word;
    margin: 0 auto 2rem auto;
    cursor: default;
  }
  .subtitle {
    position: relative;
    font-size: 2rem;
    line-height: 1.2;
    max-width: 280px;
    width: 100%;
    color: var(--white);
    font-family: var(--light-font);
    text-align: center;
    margin: 0 auto;
  }
  .subtitle--strong {
    font-family: var(--bold-font);
  }
  @media (height < 500px) {
    .title {
      opacity: 0.2;
    }
  }
  @media (height < 600px) {
    .subtitle {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
    }
  }
  @media (width >= 600px) {
    .title {
      font-size: 7.5rem;
    }
    .subtitle {
      font-size: 2.625rem;
      max-width: 420px;
    }
  }
  @media (width >= 1080px) {
    .title {
      font-size: min(10vw, 11rem);
      max-width: 1040px;
    }
    .subtitle {
      font-size: 3.25rem;
      max-width: 480px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
    }
  }
</style>
