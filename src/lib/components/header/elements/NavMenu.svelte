<script>
  import { Routes } from '$lib/constants/routes'

  /** @type { Route } */
  export let actual_route

  /** @type { Boolean } */
  let menuIsOpen = false

  const handlePressMenuButton = () => {
    menuIsOpen = !menuIsOpen
    const pageBody = document.getElementById('svelte-page')
    if (menuIsOpen) {
      pageBody?.classList.add('noscroll')
      console.log('class added')
      return
    }
    pageBody?.classList.remove('noscroll')
    console.log('class removed')
  }
</script>

<nav class="nav-menu">
  <a class="logo-container" href={`/${Routes.main}`} data-sveltekit-noscroll>
    <img
      class="logo-icon"
      src="/images/ariaicon512x512.png"
      alt="header-logo"
    />
    <span class="logo-text">riaDev</span>
  </a>
  <button class="button" on:click={handlePressMenuButton}
    >{!menuIsOpen ? 'Abrir menú' : 'Cerrar menú'}</button
  >
  <ul class={`nav-list ${!menuIsOpen ? 'nav-list--close' : ''}`}>
    <li>
      <a
        on:click={() => (menuIsOpen = false)}
        class={`nav-item ${actual_route === 'about' ? 'active' : ''}`}
        href={`/${Routes.about}`}
        >Sobre mí
      </a>
    </li>
    <li>
      <a
        on:click={() => (menuIsOpen = false)}
        class={`nav-item ${actual_route === 'portfolio' ? 'active' : ''}`}
        href={`/${Routes.portfolio}`}
        >Portafolio
      </a>
    </li>
    <li>
      <a
        on:click={() => (menuIsOpen = false)}
        class={`nav-item ${actual_route === 'contact' ? 'active' : ''}`}
        href={`/${Routes.contact}`}
        >Contacto
      </a>
    </li>
  </ul>
</nav>

<style>
  .nav-menu {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding: 2rem 6rem;
    height: 8rem;
    background-color: var(--gray);
    z-index: 10;
  }
  .logo-container {
    display: flex;
    align-items: end;
    transition: filter 0.2s;
  }
  .logo-container:hover {
    filter: drop-shadow(-0.5rem 0.2rem 3rem var(--white));
  }
  .logo-icon {
    width: 4rem;
  }
  .logo-text {
    color: var(--white);
    font-size: 1.4rem;
    margin-bottom: 0.925rem;
    font-family: var(--bold-font);
  }
  .button {
    display: none;
    cursor: pointer;
    color: var(--light-gray);
    margin-bottom: 0.6rem;
    line-height: 1rem;
  }
  .nav-list {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3rem;
  }
  .nav-item {
    margin-bottom: 0.72rem;
    display: flex;
    justify-content: center;
    position: relative;
    font-size: 0.875rem;
    color: var(--light-gray);
    font-weight: 500;
    text-align: center;
    transition: color 125ms cubic-bezier(0.4, 0.25, 0.3, 1);
  }
  .nav-item:hover {
    color: var(--white);
  }
  .nav-item::before {
    content: '';
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
      width: 2.5rem;
    }
    .logo-text {
      color: var(--white);
      font-size: 1rem;
      margin-bottom: 0.4rem;
      font-family: var(--bold-font);
    }
    .button {
      display: block;
    }
    .nav-menu {
      position: relative;
      height: 4.5rem;
      padding: 1rem 1.5rem;
    }
    .nav-list {
      pointer-events: all;
      background-color: var(--gray);
      align-items: center;
      justify-content: center;
      position: fixed;
      flex-direction: column;
      top: 6rem;
      left: 0;
      width: 100%;
      height: calc(100vh - 6rem);
      transition: opacity 0.2s;
      padding-bottom: 8rem;
    }
    .nav-list--close {
      pointer-events: none;
      animation: fade-out 2s;
      opacity: 0;
    }
  }
</style>
