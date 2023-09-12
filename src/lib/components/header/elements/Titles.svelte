<script>
  import { HeaderMessages } from '$lib/constants/general'

  /** @type { Route } */
  export let actual_route

  /** @type { String[] } */
  let subtitle_words
  $: subtitle_words = HeaderMessages[actual_route].front.split(' ')
</script>

<section class="titles-container">
  <h1 class="title">{HeaderMessages[actual_route].back}</h1>
  <h2 class="subtitle">
    {#each subtitle_words as word}
      {#if word.includes('*')}
        <strong class="subtitle--strong">{word.substring(1)}</strong>
      {:else}
        {word}
      {/if}
      {' '}
    {/each}
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
    font-size: 14vw;
    max-width: 480px;
    width: 100%;
    font-family: var(--bold-font);
    line-height: 1;
    color: var(--dark-gray);
    text-align: center;
    overflow: hidden;
    word-wrap: break-word;
    margin: 0 auto 2rem auto;
    cursor: default;
  }
  .subtitle {
    font-size: 4vw;
    max-width: 280px;
    width: 100%;
    color: var(--white);
    font-family: var(--light-font);
    line-height: 1.4;
    text-align: center;
    margin: 0 auto;
  }
  .subtitle--strong {
    font-family: var(--bold-font);
  }
  @media (height < 442px) {
    .title {
      display: none;
    }
  }
  @media (width >= 600px) {
    .title {
      font-size: 12vw;
      max-width: 6000px;
    }
    .subtitle {
      font-size: 3vw;
      max-width: 420px;
    }
  }
  @media (width >= 1080px) {
    .title {
      font-size: min(10vw, 12rem);
      max-width: 960px;
    }
    .subtitle {
      font-size: min(2vw, 3rem);
      max-width: 480px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
    }
  }
</style>
