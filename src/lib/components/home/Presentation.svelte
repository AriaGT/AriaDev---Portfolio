<script>
  import { GLOBAL_CLASSES } from "$lib/constants/cssClasses";
  import { LangKeys } from "$lib/constants/langKeys";
  import { i } from "@inlang/sdk-js";
  const currentLanguage = "ES";
</script>

<section class={GLOBAL_CLASSES.PADDED_SECTION}>
  <figure class="content-box">
    <hgroup class="titles-box">
      <h2 class="title">{i(LangKeys.presentation.title)}</h2>
      <h3 class="phrase">{i(LangKeys.presentation.phrase)}</h3>
      <span class="name name--boxed">Alessandro Fernandez</span>
    </hgroup>
    <img class="dev-image" src="/images/aria_dev.png" alt="AriaDev" />
    <span class="name name--mobile-mode">
      Alessandro Fernandez
    </span>
    <figcaption class="description-box">
      <p class="description">{i(LangKeys.presentation.description)}</p>
    </figcaption>
  </figure>
</section>

<style>
  .content-box {
    position: relative;
    width: 100%;
    max-width: 1145px;
    margin: 0 auto calc( var(--rem) * 4 );
    display: flex;
    flex-direction: column;
    gap: var(--rem);
  }
  .titles-box {
    display: grid;
    align-items: end;
    gap: var(--rem);
  }
  .title {
    color: var(--dark-gray);
    font-size: calc( var(--rem) * 2.625 );
    line-height: 0.9;
    font-family: var(--bold-font);
  }
  .phrase {
    color: var(--white);
    font-size: calc( var(--rem) * 1.5 );
    line-height: 1.2;
  }
  .dev-image {
    width: 100%;
    max-width: calc( var(--rem) * 35.8 );
    filter: brightness(0.8) contrast(0.8);
  }
  .name {
    color: var(--accent-color);
    font-family: var(--book-font);
    font-size: calc( var(--rem) * 1.25 );
    position: relative;
    padding-left: calc(100% - calc(var(--pixel) * 222));
    overflow-wrap: normal;
    white-space: nowrap;
  }
  .name::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: calc(100% - calc(var(--pixel) * 240));
    height: var(--pixel);
    background-color: var(--light-gray);
  }
  .name--boxed {
    display: none;
  }
  .description-box {
    background-color: var(--gray);
  }
  .description {
    color: var(--light-gray);
    font-family: var(--book-font);
    font-size: calc( var(--rem) * 1.2 );
  }
  @media (width >= 600px) {
    .title {
      font-size: 3.4375rem;
    }
  }
  @media (width >= 1150px) {
    .dev-image {
      width: 60%;
      max-width: 972px;
      margin: 0 auto;
      overflow: clip;
      overflow-clip-margin: content-box;
    }
    .titles-box {
      position: absolute;
      z-index: 1;
      width: 40%;
      overflow-wrap: normal;
    }
    .title {
      font-size: 4.5rem;
    }
    .phrase {
      font-size: 2rem;
      margin-top: -1rem;
    }
    .name {
      position: relative;
      padding-left: calc(100% - 202px);
    }
    .name::before {
      width: calc(100% - 220px);
    }
    .name--boxed {
      display: block;
    }
    .name--mobile-mode {
      display: none;
    }
    .description-box {
      position: absolute;
      top: 60%;
      right: -8rem;
      padding: 1.75rem 0 0 2rem;
      width: 50%;
      max-width: 400px;
    }
  }
</style>
