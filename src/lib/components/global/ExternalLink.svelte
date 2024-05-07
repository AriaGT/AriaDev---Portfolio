<script>
  export let /** @type {string} */ link
</script>

<a href={link} target="_blank">
  <slot />
  <i class="fa-solid fa-arrow-up-right-from-square"></i>
</a>

<style>
  a {
    display: inline-block;
  }
  a:hover {
    text-decoration: underline;
  }
  i {
    transform: translateX( calc( var(--pixel) * -7 ) ) scale(.5);
    vertical-align: top;
  }
</style>