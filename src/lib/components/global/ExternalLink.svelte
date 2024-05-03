<script>
  export let /** @type {string} */ link
</script>

<a href={link} target="_blank">
  <slot />
  <i class="fa-solid fa-arrow-up-right-from-square"></i>
</a>

<style>
  a {
    display: flex;
  }
  a:hover {
    text-decoration: underline;
  }
  i {
    transform: scale(.5);
  }
</style>