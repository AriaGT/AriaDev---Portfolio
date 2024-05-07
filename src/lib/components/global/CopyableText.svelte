<script>
  export let /** @type { string } */ text
  export let /** @type { number } */ iconSize = 1.2

  let copyStatus = false

  const copyText = () => {
      navigator.clipboard.writeText(text)
        .then(() => {
          copyStatus = true
          setTimeout(() => copyStatus = false, 3000)
        })
        .catch((error) => console.log(error))
  }
</script>

<button
  class:copyed={copyStatus}
  on:click={copyText}
  style:font-size="min({iconSize * 2.5}vw, {iconSize}rem)"
>
  <span style:font-size="inherit">
    <slot />
  </span>
  {#if !copyStatus}
    <i
      style:margin-bottom="min({iconSize/3.2 * 2.5}vw, {iconSize/3.2}rem)"
      class="fa-regular fa-clipboard"
    />
  {:else}
    <i
      style:margin-bottom="min({iconSize/3.2 * 2.5}vw, {iconSize/3.2}rem)"
      class="fa-solid fa-clipboard-check"
    />
  {/if}
</button>

<style>
  button {
    display: inline-block;
    justify-content: flex-start;
    gap: calc( var(--rem) * .5 );
    align-items: end;
  }
  span {
    display: inline-block;
  }
  i {
    display: inline-block;
    transition: opacity .1s;
    opacity: 0;
  }
  button:hover i {
    opacity: 1;
  }
  .copyed i {
    transition: opacity .1s;
    opacity: 1;
  }
</style>