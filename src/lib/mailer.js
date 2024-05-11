import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'aless_fermed@hotmail.com', // tu correo de Outlook
    pass: 'ariagt191000' // tu contraseña
  },
  tls: {
    ciphers:'SSLv3'
  }
})
