import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, mobile, email, message } = await request.json();

    if (!name || !mobile || !email || !message) {
      return new Response(
        JSON.stringify({ message: "Please fill all fields" }),
        { status: 400 }
      );
    }

    

    // SMTP transporter for Hostinger
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: "business@vejobiz.com",
        pass: process.env.EMAIL_PASSWORD, // set this in your .env file
      },
    });

    // Main email to your business inbox
    const mailOptions = {
      from: `${name} <business@vejobiz.com>`, // Must be your email
      to: "business@vejobiz.com",
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Mobile: ${mobile}
Email: ${email}
Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    // Optional delay before sending auto-reply
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Auto-reply to the user
    const autoReplyOptions = {
      from: '"Vejobiz Team" <business@vejobiz.com>', // Must match SMTP user
      to: email,
      subject: "Thanks for contacting Vejobiz!",
      text: `Hi ${name},\n\nThanks for reaching out to Vejobiz. We’ve received your message We will get back to you as soon as possible.\n\nWarm regards,\nVejobiz Team\n\n📧 business@vejobiz.com\n🌐 www.vejobiz.com`,
    };

    await transporter.sendMail(autoReplyOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return new Response(JSON.stringify({ message: "Failed to send email" }), {
      status: 500,
    });
  }
}
