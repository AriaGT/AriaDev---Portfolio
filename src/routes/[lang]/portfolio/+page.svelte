<script>
  import { ProjectCard } from "$lib/components";
  import { GLOBAL_CLASSES } from "$lib/constants/cssClasses";
  import { route } from "$lib/stores/route.store";
  route.set("portfolio");
</script>

<section class={ GLOBAL_CLASSES.SECTIONS_CONTAINER }>
  <div class={ GLOBAL_CLASSES.PADDED_SECTION }>
    <h2>Portafolio</h2>
    <p>Te presento los proyectos en los que he trabajado para que conozcas un poco más el producto que ofrezco.</p>
  </div>
  <div class={ `projects-container ${GLOBAL_CLASSES.PADDED_SECTION}` }>
    <ProjectCard projectData={ {
      title: "WEATHER APP",
      description: "MIRA EL CLIMA EN TU LOCALIDAD",
      imgSrc: "/images/weather_app.webp",
      technologiesList: [ "React", "CSS", "Axios" ],
      link: "https://arias-weather-widget.netlify.app/"
    } } />
    <ProjectCard projectData={ {
      title: "API RED SOCIAL",
      description: "ENDPOINTS PARA MANEJO DE CONTENIDO DE RED SOCIAL",
      imgSrc: "/images/social_api.webp",
      technologiesList: [ "Express", "Node", "Swagger" ],
      link: "https://api-red-social.onrender.com/api/v1/docs/"
    } } />
    <ProjectCard projectData={ {
      title: "TRAINING 4 RESULTS",
      description: "PROGRAMA DE ENTRENAMIENTO OPERACIONAL",
      imgSrc: "/images/t4r.webp",
      technologiesList: [ "SvelteKit", "JSDocs", "CSS" ],
      link: "https://t4r.com.pe/"
    } } />
  </div>
</section>

<style>
  .projects-container {
    display: flex;
    gap: calc( var(--rem) * 2 );
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
