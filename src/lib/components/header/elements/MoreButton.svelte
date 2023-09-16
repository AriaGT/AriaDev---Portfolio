<button
  on:click={() => (window.location.href = "#page-content")}
  class="button"
>
  Saber más
</button>

<style>
  .button {
    font-family: var(--bold-font);
    font-size: 0.875rem;
    background-color: var(--black);
    padding: 0.8rem 1.2rem;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, 75%);
    color: var(--white);
    cursor: pointer;
    transition: background 150ms var(--transition-type);
  }
  .button:hover {
    background-color: var(--accent-color);
  }
  .button::before,
  button::after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 50%;
    height: 0%;
    background-color: var(--black);
    transition: height 150ms var(--transition-type),
      background-color 150ms var(--transition-type);
  }
  .button::before {
    bottom: 60%;
    right: 50%;
  }
  .button::after {
    top: 60%;
    left: 50%;
  }
  .button:hover::before,
  .button:hover::after {
    height: 50%;
    background-color: var(--accent-color);
  }
</style>
