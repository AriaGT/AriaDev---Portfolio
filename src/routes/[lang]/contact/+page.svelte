<script>
  import { CopyableText, EmailForm, ExternalLink } from "$lib/components";
  import { GLOBAL_CLASSES } from "$lib/constants/cssClasses";
  import { route } from "$lib/stores/route.store";

  route.set("contact");
</script>

<section class={GLOBAL_CLASSES.SECTIONS_CONTAINER}>
  <EmailForm />
  <section class={GLOBAL_CLASSES.PADDED_SECTION}>
    <h3>Por LinkedIn</h3>
    <div class="contact-media">
      <span>Conéctate conmigo en LinkedIn: </span>
      <ExternalLink link="https://www.linkedin.com/in/alessandro-fernandez-medrano/"><strong>Alessandro Fernandez Medrano</strong></ExternalLink>
    </div>
  </section>
  <section class={GLOBAL_CLASSES.PADDED_SECTION}>
    <h3>Visita mi GitHub</h3>
    <div class="contact-media">
      <span>Echa un vistazo a mis proyectos en GitHub: </span>
      <ExternalLink link="https://github.com/AriaGT"><strong>AriaGT</strong></ExternalLink>
    </div>
  </section>
  <section class={GLOBAL_CLASSES.PADDED_SECTION}>
    <h3>Por Teléfono</h3>
    <div class="contact-media">
      <span>Llámame al: </span>
      <CopyableText text="+51 918 902 377"><strong>+51 918 902 377</strong></CopyableText>
    </div>
  </section>
  <section class={GLOBAL_CLASSES.PADDED_SECTION}>
    <p>Por favor, ten en cuenta que estoy en la zona horaria GMT-5 (Perú), así que intenta llamar durante las horas de trabajo normales.</p>
  </section>
  <section class={GLOBAL_CLASSES.PADDED_SECTION}>
    <p style:text-align="center"><strong>¡Espero tener noticias tuyas pronto!</strong></p>
  </section>
</section>

<style>
  .contact-media {
    display: inline-block;
    gap: calc( var(--rem) * .5 );
  }

  strong {
    color: var(--white);
  }
</style>