<script>
  import { GLOBAL_CLASSES } from "$lib/constants/cssClasses";
  import { CopyableText, Button } from "$lib/components";
</script>

<section class={GLOBAL_CLASSES.PADDED_SECTION}>
  <h3>Por Correo Electrónico</h3>
  <form action="">
    <label>
      Nombre o correo electrónico
      <input placeholder="someone@example.com" type="text">
    </label>
    <label>
      Empresa (Opcional)
      <input placeholder="Nombre de tu empresa" type="text">
    </label>
    <label>
      Mensaje
      <textarea placeholder="Escribe un mensaje para ponernos en contacto"></textarea>
    </label>
    <span class="tip">
      * También puedes enviarme un correo electrónico directamente: <CopyableText text="ariagt191000@gmail.com" iconSize={.9}><strong>ariagt191000@gmail.com</strong></CopyableText>
    </span>
    <div class="button-section">
      <Button onClick={() => null} text="Enviar" />
    </div>
  </form>
</section>

<style>
  form {
    display: flex;
    flex-direction: column;
    margin: calc( var(--rem) * 3 ) auto 0;
    width: 100%;
  }

  input {
    background-color: var(--white);
    padding: var(--rem) calc( var(--rem) * 2 );
    width: 100%;
    margin: var(--rem) 0;
    color: var(--black);
  }

  textarea {
    background-color: var(--white);
    padding: var(--rem) calc( var(--rem) * 2 );
    height: calc( var(--rem) * 14 );
    resize: none;
    width: 100%;
    color: var(--black);
  }

  .button-section {
    display: inline;
    width: 100%;
    margin-top: calc( var(--rem) * 2 );
  }

  .tip {
    font-size: calc( var(--rem) * .9 );
    margin-top: var(--rem);
    text-align: start;
  }

  .strong {
    font-weight: bold;
  }

  @media (width >= 600px) {
    .button-section {
      width: initial;
      align-self: flex-end;
    }
  }
</style>
