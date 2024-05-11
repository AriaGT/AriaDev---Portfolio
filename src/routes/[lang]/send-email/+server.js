import { json } from '@sveltejs/kit'
import { transporter } from '$lib/mailer.js'
import { render } from 'svelte-email'
import { EmailTemplate } from '$lib/components'

export async function POST ({ request }) {
  const { name, organization, message } = await request.json()
  const emailHtml = render({
    template: EmailTemplate,
    props: { name, organization, message }
  })
  const mailOptions = {
    from: 'aless_fermed@hotmail.com',
    to: 'aless_fermed@hotmail.com',
    subject: 'Se han contactado por el PORTAFOLIO',
    html: emailHtml
  }
  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error)
      return json({ error }, { status: 500 })
    } else {
      console.log('Email sent: ' + info.response)
      return json({ info }, { status: 200 })
    }
  })
  return json({ status: 'ok' }, { status: 200 })
}
