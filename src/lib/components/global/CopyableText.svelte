<script>
  export let /** @type { string } */ text

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
>
  <slot />
  {#if !copyStatus}
    <i class="fa-regular fa-clipboard"></i>
  {:else}
    <i class="fa-solid fa-clipboard-check"></i>
  {/if}
</button>

<style>
  button {
    display: flex;
    gap: calc( var(--rem) * .5 );
    align-items: center;
  }
  i {
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