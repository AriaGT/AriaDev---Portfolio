<script>
  import { NavItems } from "$lib/constants";
  import { LangKeys } from "$lib/constants/langKeys";
  import { language, switchLanguage, i } from "@inlang/sdk-js";

  /** @type { Route } */
  export let actualRoute;

  /** @type { Boolean } */
  let menuIsOpen = false;

  const handlePressMenuButton = () => {
    menuIsOpen = !menuIsOpen;
    const pageBody = document.getElementById("svelte-page");
    if (menuIsOpen) {
      pageBody?.classList.add("noscroll");
      return;
    }
    pageBody?.classList.remove("noscroll");
  };

  /** @type { Object.<string, Language> } */
  const oppositeLanguageValues = {
    es: "en",
    en: "es",
  };
  const changeLanguage = () => {
    switchLanguage(oppositeLanguageValues[language]);
  };
</script>

<nav class="nav-menu">
  <div class="content-box">
    <div style="display: flex;align-items: end;">
      <a class="logo-container" href={`/${language}`} data-sveltekit-noscroll>
        <img
          class="logo-icon"
          src="/images/ariaicon512x512.png"
          alt="header-logo"
        />
        <span class="logo-text">riaDev</span>
      </a>
      <button class="button button--language" on:click={changeLanguage}>
        {oppositeLanguageValues[language]} /
      </button>
    </div>
    <button class="button button--nav-button" on:click={handlePressMenuButton}
      >{!menuIsOpen ? "Abrir menú" : "Cerrar menú"}</button
    >
    <ul class="nav-list" class:nav-list--close={!menuIsOpen}>
      {#each NavItems as NavItem}
        <li>
          <a
            on:click={() => (menuIsOpen = false)}
            class="nav-item"
            class:active={actualRoute === NavItem}
            href={`/${language}/${NavItem}`}
          >
            {i(LangKeys.nav[NavItem])}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</nav>

<style>
  .nav-menu {
    position: relative;
    padding: 2rem 6rem;
    height: 8rem;
    background-color: var(--gray);
    z-index: 10;
    font-family: var(--regular-font);
  }
  .content-box {
    width: 100%;
    max-width: 1145px;
    display: flex;
    justify-content: space-between;
    align-items: end;
    margin: 0 auto;
  }
  .logo-container {
    display: flex;
    align-items: end;
    transition: filter 200ms var(--transition-type);
  }
  .logo-container:hover {
    filter: drop-shadow(
      calc( var(--rem) * -.5 )
      calc( var(--rem) * .2 )
      calc( var(--rem) * 3 )
      var(--white)
    );
  }
  .logo-icon {
    width: 4rem;
  }
  .logo-text {
    line-height: 1.4;
    color: var(--white);
    margin-bottom: 0.7rem;
    font-family: var(--bold-font);
  }
  .button {
    cursor: pointer;
    color: var(--light-gray);
    margin-bottom: 0.7rem;
    font-size: calc( var(--rem) * 1.1 );
    transition: color 125ms var(--transition-type);
  }
  .button:hover {
    color: var(--white);
  }
  .button--language {
    text-transform: capitalize;
    margin-left: calc( var(--rem) * 2 );
    font-family: inherit;
  }
  .button--nav-button {
    display: none;
  }
  .nav-list {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: calc( var(--rem) * 3 );
  }
  .nav-item {
    display: flex;
    justify-content: center;
    margin-bottom: 0.875rem;
    position: relative;
    font-size: 0.875rem;
    line-height: var(--rem);
    color: var(--light-gray);
    font-weight: 500;
    text-align: center;
    transition: color 125ms var(--transition-type);
    font-family: inherit;
  }
  .nav-item:hover {
    color: var(--white);
  }
  .nav-item::before {
    content: "";
    position: absolute;
    bottom: -0.4rem;
    width: 0rem;
    height: 2px;
    border-radius: 1px;
    background-color: var(--light-gray);
    transition: width 175ms cubic-bezier(0.4, 0.25, 0.3, 1),
      background 175ms cubic-bezier(0.4, 0.25, 0.3, 1);
  }
  .nav-item:hover::before {
    width: 100%;
    background-color: var(--white);
  }
  .active::before {
    width: 20%;
  }
  @media (width < 768px) {
    .logo-icon {
      width: calc( var(--rem) * 5 );
    }
    .logo-text {
      font-size: calc( var(--rem) * 2 );
      margin-bottom: calc( var(--rem) * .7 );
    }
    .button {
      font-size: calc( var(--rem) * 1.4 );
      margin-bottom: calc( var(--rem) * .85 );
    }
    .button--nav-button {
      display: block;
    }
    .nav-menu {
      position: relative;
      height: calc( var(--rem) * 8 );
      padding: var(--rem) calc( var(--rem) * 4 );
    }
    .nav-list {
      pointer-events: all;
      background-color: var(--gray);
      align-items: center;
      justify-content: center;
      position: fixed;
      flex-direction: column;
      top: calc( var(--rem) * 6 );
      left: 0;
      width: 100%;
      height: calc(100vh - calc( var(--rem) * 6 ));
      transition: opacity 0.2s;
      padding-bottom: calc( var(--rem) * 8 );
    }
    .nav-list--close {
      pointer-events: none;
      animation: fade-out 2s;
      opacity: 0;
    }
  }
</style>
