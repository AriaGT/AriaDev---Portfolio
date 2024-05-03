<script>
  import { GLOBAL_CLASSES } from "$lib/constants/cssClasses";
  import { CopyableText, ExternalLink } from "$lib/components";
  import { i } from "@inlang/sdk-js";
    import { LangKeys } from "$lib/constants/langKeys";
</script>
<footer class="footer">
  <div class={GLOBAL_CLASSES.SECTIONS_CONTAINER}>
    <section class={`${GLOBAL_CLASSES.PADDED_SECTION} info-container`}>
      <div>
        <h3><i class="fa-solid fa-envelope"/> {i(LangKeys.footer.email)}</h3>
        <CopyableText text="ariagt191000@gmail.com">
          <p>ariagt191000@gmail.com</p>
        </CopyableText>
      </div>
      <div>
        <h3><i class="fa-solid fa-phone"/> {i(LangKeys.footer.phone)}</h3>
        <CopyableText text="+51 918 902 377">
          <p>+51 918 902 377</p>
        </CopyableText>
      </div>
      <div>
        <h3><i class="fa-brands fa-linkedin"/> {i(LangKeys.footer.linkedin)}</h3>
        <ExternalLink link="https://www.linkedin.com/in/alessandro-fernandez-medrano/">
          {i(LangKeys.footer.linkedin_message)}
        </ExternalLink>
      </div>
    </section>
    <section class={`${GLOBAL_CLASSES.PADDED_SECTION} web-author`}>
      <h4>Alessandro Fernandez Medrano - 2024</h4>
    </section>
  </div>
</footer>

<style>
  .footer {
    background-color: var(--dark-gray);
    width: 100%;
  }
  .info-container {
    display: flex;
    flex-direction: column;
    gap: calc( var(--rem) * 2.5 );
    justify-content: space-between;
  }
  .web-author {
    text-align: center;
  }
  @media (width >= 600px) {
    .info-container {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
</style>
