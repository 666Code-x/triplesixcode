import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json()

    // Проверка обязательных полей
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Заполните все поля' },
        { status: 400 }
      )
    }

    // Создаем транспортер (настрой SMTP под свои данные)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER, // твой email
        pass: process.env.SMTP_PASS, // пароль или app password
      },
    })

    // Отправляем письмо
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.RECEIVER_EMAIL || process.env.SMTP_USER, // куда приходят сообщения
      subject: `Новое сообщение с сайта 666.CODE от ${name}`,
      text: `Имя: ${name}\nEmail: ${email}\n\nСообщение:\n${message}`,
      html: `
        <h2>Новое сообщение с сайта 666.CODE</h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Сообщение:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json(
      { error: 'Ошибка отправки сообщения' },
      { status: 500 }
    )
  }
}
