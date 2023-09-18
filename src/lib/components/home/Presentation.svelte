<script>
  import { AboutContent } from "$lib/constants";
  import { LangKeys } from "$lib/constants/langKeys";
  import { i } from "@inlang/sdk-js";
  const currentLanguage = "ES";
</script>

<section class="section-container">
  <figure class="content-box">
    <hgroup class="titles-box">
      <h2 class="title">{AboutContent[currentLanguage].title}</h2>
      <h3 class="phrase">{i(LangKeys.presentation.phrase)}</h3>
      <span class="name name--boxed">{AboutContent[currentLanguage].name}</span>
    </hgroup>
    <img class="dev-image" src="/images/aria_dev.png" alt="AriaDev" />
    <span class="name name--mobile-mode">
      {AboutContent[currentLanguage].name}
    </span>
    <figcaption class="description-box">
      <p class="description">{AboutContent[currentLanguage].description}</p>
    </figcaption>
  </figure>
</section>

<style>
  .section-container {
    background-color: var(--gray);
    padding: 4rem 1.5rem;
    width: 100%;
  }
  .content-box {
    position: relative;
    width: 100%;
    max-width: 1145px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .titles-box {
    display: grid;
    align-items: end;
    gap: 1rem;
  }
  .title {
    color: var(--dark-gray);
    font-size: 2.625rem;
    line-height: 0.9;
    font-family: var(--bold-font);
  }
  .phrase {
    color: var(--white);
    font-size: 1.5rem;
    line-height: 1.2;
  }
  .dev-image {
    width: 100%;
    filter: brightness(0.8) contrast(0.8);
  }
  .name {
    color: var(--accent-color);
    font-family: var(--book-font);
    font-size: 1.25rem;
    position: relative;
    padding-left: calc(100% - 222px);
    overflow-wrap: normal;
    white-space: nowrap;
  }
  .name::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: calc(100% - 240px);
    height: 1px;
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
    font-size: 0.95rem;
  }
  @media (width >= 600px) {
    .section-container {
      padding: 4rem 2.5rem;
      min-height: 36rem;
    }
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
      font-size: 3.4375rem;
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
      right: 0;
      padding: 1.75rem 0 0 2rem;
      width: 43%;
      max-width: 330px;
    }
  }
  @media (width >= 1150px) {
    .title {
      font-size: 4.5rem;
    }
    .phrase {
      font-size: 2rem;
      margin-top: -1rem;
    }
  }
</style>
