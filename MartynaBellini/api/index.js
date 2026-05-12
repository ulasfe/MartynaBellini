const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');

const app = express();

// Important: Ensure CORS allows your Angular port (usually 4200)
app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/send-email', async (req, res) => {

    // CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

     // Handle preflight
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

     // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({
            error: 'Method not allowed!'
        });
    }

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

if (process.env.NODE_ENV !== 'production') {
    app.listen(3000, () => {
        console.log('Server running on http://localhost:3000');
    });
}

module.exports = app;