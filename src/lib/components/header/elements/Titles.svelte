<script>
  import { i } from "@inlang/sdk-js";
  import { LangKeys } from "$lib/constants/langKeys";
  import { Button } from "$lib/components";

  /** @type { Route } */
  export let actualRoute;

  /** @type { String[] } */
  let subtitleWords;
  $: subtitleWords = i(LangKeys.header[actualRoute].front).split(" ");

  const downloadCV = () => {
    const url = new URL('/src/assets/cv_file.pdf', import.meta.url);
    const link = document.createElement('a');
    link.href = url.href;
    link.download = 'CV - ALESSANDRO FERNANDEZ.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
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
  </h2>
  <div class="buttons-container">
    <Button href="#main-content" text={i(LangKeys.header.more_button)} />
    <Button onClick={downloadCV} text={i(LangKeys.header.cv_button)} />
  </div>
</section>

<style>
  .titles-container {
    display: grid;
    place-items: center;
    place-content: center;
    width: 100%;
    padding-bottom: calc( var(--rem) * 8 );
    height: calc( 100% - calc( var(--rem) * 8 ) );
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
    margin: 0 auto calc( var(--rem) * 2 ) auto;
    cursor: default;
  }
  .subtitle {
    position: relative;
    font-size: calc( var(--rem) * 2.2 );
    line-height: 1.2;
    max-width: calc( var(--rem) * 30 );
    width: 100%;
    color: var(--white);
    font-family: var(--light-font);
    text-align: center;
    margin: 0 auto;
  }
  .subtitle--strong {
    font-family: var(--bold-font);
  }
  .buttons-container {
    position: relative;
    top: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    gap: calc( var(--rem) * 2 );
    z-index: 1;
    flex-direction: column;
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
      max-width: 36rem;
    }
    .buttons-container {
      flex-direction: row;
    }
  }
  @media (width >= 1080px) {
    .title {
      font-size: min(10vw, 11rem);
      max-width: 1040px;
    }
    .subtitle {
      font-size: 3.25rem;
      max-width: 48rem;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
    }
  }
</style>
