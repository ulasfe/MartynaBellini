const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');

const app = express();

app.use(cors());
app.use(express.json());

const resend = new Resend('re_ZZp3ba5c_GZFDL3JSdceELJkUX7KpAqp7');

app.post('/send-email', async (req, res) => {

    const { name, email, subject, message } = req.body;

    try {

        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'websitemartyna@gmail.com',
            subject: subject,
            html: `
                <h2>New Contact Message</h2>

                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>

                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        });

        res.status(200).send('Email sent');

    } catch (error) {

        console.error(error);
        res.status(500).send('Failed to send email');
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});