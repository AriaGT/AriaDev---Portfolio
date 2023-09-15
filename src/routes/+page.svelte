<script>
  import { Presentation } from "$lib/components";
  import { language } from "$lib/stores";
  import { route } from "$lib/stores/route.store";
  route.set("main");

  /** @type { Language } */
  let currentLanguage;
  language.subscribe((value) => (currentLanguage = value));
</script>

<Presentation {currentLanguage} />
