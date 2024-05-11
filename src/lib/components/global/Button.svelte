<script>
  export let /** @type {string | null} */ href = null
  export let /** @type {(() => void) | null} */ onClick = null
  export let /** @type {string} */ text
  export let /** @type { "button" | "submit" } */ type = "button"
  export let /** @type {boolean} */ disabled = false

  const handleClick = () => {
    if (onClick) onClick()
    if (href) window.location.href = href
  }

</script>

<button
  {type}
  {disabled}
  on:click={handleClick}
>
  {text}
</button>

<style>
  button {
    position: relative;
    font-family: var(--bold-font);
    background-color: var(--black);
    padding: calc( var(--rem) * .8 ) calc( var(--rem) * 1.2 );
    color: var(--white);
    cursor: pointer;
    transition: background 150ms var(--transition-type);
    min-width: calc(var(--rem) * 2);
  }
  button:disabled {
    pointer-events: none;
    background-color: var(--light-gray);
  }
  button:hover {
    background-color: var(--accent-color);
  }
  button::before,
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
  button::before {
    bottom: 60%;
    right: 50%;
  }
  button::after {
    top: 60%;
    left: 50%;
  }
  button:hover::before,
  button:hover::after {
    height: 50%;
    background-color: var(--accent-color);
  }
</style>