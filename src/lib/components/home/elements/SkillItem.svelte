<script>
  export let /** @type {string} */ name
  import { i } from "@inlang/sdk-js";
</script>

<span>{i(name)}</span>

<style>
  span {
    padding: var(--rem) calc( var(--rem) * 2 );
    background-color: var(--black);
    color: var(--white);
  }
</style>