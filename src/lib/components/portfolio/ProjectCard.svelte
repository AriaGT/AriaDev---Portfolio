<script>
  export let /** @type { ProjectData } */ projectData

  let techItemsProgressAnimationValue = 0,
    progressEndValue = 100,
    speed = 20,
    /** @type {number} */ increaseProgress;

  const changeProgress = (/** @type {number} */ increment) => {
    if( increaseProgress) clearInterval(increaseProgress);
    increaseProgress = setInterval(() => {
      techItemsProgressAnimationValue += increment;
      if (techItemsProgressAnimationValue == (increment > 0 ? progressEndValue : 0)) {
        clearInterval(increaseProgress);
      }
    }, speed);
  }

</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<a
  href={projectData.link}
  target="_blank"
  aria-label="Ir a la página del proyecto"
  on:mouseenter={() => changeProgress(5)}
  on:mouseleave={() => changeProgress(-5)}
  style:background-image="url({projectData.imgSrc})"
  class="card-container"
>
  <section class="tech-container">
    {#each projectData.technologiesList as tech}
      <div style:--deg-value={`${techItemsProgressAnimationValue * 3.6}deg`} class="tech-item"><p>{ tech }</p></div>
    {/each}
  </section>
  <section class="project-data-container">
    <h3 class="title">{ projectData.title }</h3>
    <p class="description">{ projectData.description }</p>
  </section>
</a>

<style>
  .card-container {
    position: relative;
    width: 100%;
    aspect-ratio: 2/1.2;
    background-size: cover;
    background-position-x: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    backdrop-filter: brightness(0.8);
    display: flex;
    align-items: end;
  }
  @media (width >= 1028px) {
    .card-container {
      width: calc( 50% - var(--rem) );
    }
  }
  .card-container:hover {
    cursor: pointer;
  }
  .card-container::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00000040;
    transition: background-color .2s var(--transition-type);
  }
  .card-container:hover::after {
    background-color: #00000080;
  }
  .tech-container {
    position: absolute;
    bottom: calc( var(--rem) * 8);
    left: var(--rem);
    display: flex;
    gap: var(--rem);
    z-index: 2;
    transition: bottom .4s var(--transition-type), transform .4s var(--transition-type);
  }
  .card-container:hover .tech-container {
    bottom: calc( calc( var(--rem) * 6) + (100% - var(--rem) * 6) / 2 );
    transform: translateY(50%);
  }
  .tech-item {
    background-color: var(--black);
    border-radius: 50%;
    width: calc( var(--rem) * 4.5);
    aspect-ratio: 1;
    display: grid;
    place-items: center;
    position: relative;
  }
  .tech-item::before {
    content: "";
    position: absolute;
    width: 90%;
    height: 90%;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    border-radius: 50%;
    background: conic-gradient(var(--accent-color) var(--deg-value), transparent 0deg);
  }
  .tech-item::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 80%;
    height: 80%;
    border-radius: 50%;
    background-color: var(--black);
  }
  .tech-item p {
    color: var(--white);
    z-index: 2;
    font-size: calc( var(--rem) * .8 );
  }
  .project-data-container {
    position: relative;
    height: calc( var(--rem) * 6 );
    width: 100%;
    background-color: var(--black);
    opacity: .95;
    padding: 0 var(--rem);
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .project-data-container h3 {
    margin: 0;
  }
  .project-data-container::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 0;
    width: 100%;
    height: calc( var(--pixel) * 2 );
    background-color: var(--accent-color);
    transition: height .2s var(--transition-type);
  }
  .card-container:hover .project-data-container::after {
    height: calc( var(--pixel) * 8 );
  }
  .title {
    font-size: calc( var(--rem) * 1 );
  }
  .description {
    font-size: calc( var(--rem) * .8 );
  }
</style>