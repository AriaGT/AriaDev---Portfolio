<script>
  import { GLOBAL_CLASSES } from "$lib/constants/cssClasses";
  import { CopyableText, Button } from "$lib/components";
  import axios from "axios"
  import * as yup from "yup"
  import { createForm } from "svelte-forms-lib"

  let form_button_active = false
  let recent_email_sended = false

  const validationSchema = yup.object().shape({
    name: yup.string().required('Please enter a name'),
    organization: yup.string().optional(),
    message: yup.string().required('Please enter a message')
  })

  /** @type { (config: { name: string, organization?: string, message: string }) => Promise<void> } */
  const sendEmail = async ({ name, organization, message }) =>
    axios.post('/api/send-email', { name, organization, message })
      .then(() => {
        recent_email_sended = true
        setTimeout(() => recent_email_sended = false, 4000)
      })

  const { form, handleChange, handleSubmit, isSubmitting } = createForm({
    initialValues: { name: "", organization: "", message: "" },
    onSubmit: async values => {
      validationSchema.validate(values)
        .then(data => {
          form.set({ name: "", organization: "", message: "" })
          sendEmail(data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  })
  $: form_button_active = Boolean($form.name.length && $form.message.length)
</script>

<section class={GLOBAL_CLASSES.PADDED_SECTION}>
  <h3>Por Correo Electrónico</h3>
  <form on:submit={handleSubmit}>
    <label>
      Nombre o correo electrónico
      <input placeholder="someone@example.com" type="text" on:change={handleChange} bind:value={$form.name}>
    </label>
    <label>
      Empresa (Opcional)
      <input placeholder="Nombre de tu empresa" type="text" on:change={handleChange} bind:value={$form.organization}>
    </label>
    <label>
      Mensaje
      <textarea placeholder="Escribe un mensaje para ponernos en contacto" on:change={handleChange} bind:value={$form.message} />
    </label>
    <span class="tip">
      * También puedes enviarme un correo electrónico directamente: <CopyableText text="ariagt191000@gmail.com" iconSize={.9}><strong>ariagt191000@gmail.com</strong></CopyableText>
    </span>
    <div class="button-section">
      <p style:opacity={ recent_email_sended ? 1 : 0 }><i class="fa-solid fa-envelope-circle-check" /> !Enviado!</p>
      <Button text="Enviar" type="submit" disabled={ !form_button_active || $isSubmitting } />
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
    margin-top: var(--rem);
    resize: none;
    width: 100%;
    color: var(--black);
  }

  .button-section {
    display: flex;
    flex-direction: column-reverse;
    gap: var(--rem);
    width: 100%;
    margin-top: calc( var(--rem) * 2 );
  }

  .button-section p {
    margin: 0 auto;
    transition: opacity .2s var(--transition-type);
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
      display: flex;
      flex-direction: row;
      align-items: center;
      width: initial;
      align-self: flex-end;
    }
  }
</style>
