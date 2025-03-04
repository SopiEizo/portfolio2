import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '../../contact/email-template';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

const fromEmail = process.env.RESEND_FROM_EMAIL

export async function POST(request: Request) {
  const req = await request.json();

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail ?? 'Acme <onboarding@resend.dev>',
      to: [req.email],
      subject: 'お問い合わせありがとうございます',
      react: EmailTemplate({ senderName: req.name, content: req.message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}