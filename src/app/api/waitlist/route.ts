import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (
      !process.env.MAILCHIMP_API_KEY ||
      !process.env.MAILCHIMP_AUDIENCE_ID ||
      !process.env.MAILCHIMP_API_SERVER
    ) {
      throw new Error('Missing Mailchimp configuration');
    }

    const data = {
      email_address: email,
      status: 'subscribed',
    };

    const response = await fetch(
      `https://${process.env.MAILCHIMP_API_SERVER}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_AUDIENCE_ID}/members`,
      {
        method: 'POST',
        headers: {
          Authorization: `apikey ${process.env.MAILCHIMP_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.detail || 'Error subscribing to newsletter');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json({ error: 'Error subscribing to newsletter' }, { status: 500 });
  }
}
