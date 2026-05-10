const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');

const app = express();

// Important: Ensure CORS allows your Angular port (usually 4200)
app.use(cors());
app.use(express.json());

const resend = new Resend('re_ZZp3ba5c_GZFDL3JSdceELJkUX7KpAqp7');

app.post('/send-email', async (req, res) => {
    // Destructuring keys must match the Angular 'form' object exactly
    const { name, email, subject, message } = req.body;

    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev', // Must be a verified domain in Resend
            to: 'websitemartyna@gmail.com',
            subject: `Website Contact: ${subject}`,
            html: `
                <h2>New Message from Martyna Bellini Website</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Reply-To Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <hr>
                <p><strong>Message:</strong></p>
                <p style="white-space: pre-wrap;">${message}</p>
            `
        });

       res.status(200).json({ message: 'Email sent' });

    } catch (error) {
        console.error('Resend Error:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});