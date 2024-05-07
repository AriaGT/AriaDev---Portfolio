<script>
  import { onMount } from 'svelte';
  import { i } from "@inlang/sdk-js";

  export let /** @type { string[] } */ items

  let highlightedItemIndex = 0

  onMount(() => {
    const randomlyOrderedIndexList = items.map((_, i) => i).sort(() => Math.random() - 0.5)
    let actualIndex = 0
    setInterval(() => {
      if (actualIndex > randomlyOrderedIndexList.length -1) {
        actualIndex = 0
        randomlyOrderedIndexList.sort(() => Math.random() - 0.5)
      }
      highlightedItemIndex = randomlyOrderedIndexList[actualIndex++]
    }, 2400);
  });
</script>

<div class="flex-container">
  {#each items as name, index}
    <span
      class="item"
      class:highlighted={index === highlightedItemIndex}
    >
      { i(name) }
    </span>
  {/each}
</div>

<style>
  .flex-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: var(--rem);
  }

  .item {
    position: relative;
    padding: var(--rem) calc( var(--rem) * 2 );
    background-color: var(--dark-gray);
    color: var(--white);
    transition: transform 1.6s var(--transition-type),
                color 1.6s var(--transition-type),
                background-color 1.6s var(--transition-type);
  }
  .item::before,
  .item::after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 50%;
    height: 0%;
    background-color: var(--dark-gray);
    color: var(--white);
    transition: height .8s var(--transition-type),
                background-color 1.6s var(--transition-type);
  }
  .item::before {
    bottom: 60%;
    right: 50%;
  }
  .item::after {
    top: 60%;
    left: 50%;
  }

  .highlighted {
    background-color: var(--light-gray);
    color: var(--black);
    transform: translateY( calc( var(--rem) * -.5 ) );
  }

  .highlighted::before,
  .highlighted::after {
    height: 50%;
    background-color: var(--light-gray);
  }
</style>