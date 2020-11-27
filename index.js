const express = require("express");
const { json } = require("body-parser");
const path = require("path");
const SgMail = require("@sendgrid/mail");
const keys = require("./config/keys");

const app = express();
app.use(json());

SgMail.setApiKey(keys.SG_API_KEY);

// Contact form API route
app.post("/api/contact-form-submition", (req, res) => {
    const { name, email, msg } = req.body;

    const message = {
        to: [email, "info@auto-alexander.nl"],
        from: "no-reply@auto-alexander.nl",
        subject: "Auto Alexander Contact Formulier ingediend",
        html: `

            <div style=" padding: 10px;">
                <h1 style="font-family: sans-serif; font-size: 24px; color: #353535; letter-spacing: -1px; font-weight: 600; line-height: 1; text-shadow: 3px 3px 3px rgba(0,0,0,.3);">Auto Alexander</h1>
                <h2 style=" font-family: sans-serif; font-size: 16px; color: #353535; letter-spacing: -1px; font-weight: 600; line-height: .5; text-shadow: 3px 3px 3px rgba(0,0,0,.3);">autospuiterij</h2>
            </div>
            <div style="padding: 10px;">
                <h3 style="font-family: 'Forum', sans-serif; font-size: 16px; font-weight: 400; color: #353535;">Goede dag, ${name}! We hebben uw bericht in goede orde ontvangen!</h3>
                <p style="font-family: 'Forum', sans-serif; font-size: 16px; color: #353535; line-height: 1.3; margin: 0;">Wij streven ernaar om je vraag binnen 2 werkdagen te beantwoorden.</p>
                </br>
                <p style="font-family: 'Forum', sans-serif; font-size: 16px; color: #353535; line-height: 1.3; margin: 0;">Uw contact e-mail: ${email}</p>
                <p style="font-family: 'Forum', sans-serif; font-size: 16px; color: #353535; line-height: 1.3; margin: 0;">Uw bericht:</p>
                <p style='text-align:center; font-size: 12px; background-color: #C6C9D2; padding: 10px;'>${msg}</p>
                </br>
                <p style="font-family: 'Forum', sans-serif; font-size: 16px; color: #343a40; line-height: 1.3; margin: 0;">Met vriendelijke groet,</p>
                <p style="font-family: 'Forum', sans-serif; font-size: 16px; color: #343a40; line-height: 1.3; margin: 0;">Auto Alexander</p>
                <p style="font-family: 'Forum', sans-serif; font-size: 16px; color: #343a40; line-height: 1.3; margin: 0;">info@auto-alexander.nl</p>
                <p style="font-family: 'Forum', sans-serif; font-size: 16px; color: #343a40; line-height: 1.3; margin: 0;">06 17 23 15 85</p>
            </div>
        `,
    };

    SgMail.send(message);

    res.status(200).json("Sucess");
});

// Check if in production and
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        return res.sendFile(
            path.resolve(__dirname, "client", "build", "index.html")
        );
    });
}

const PORT = process.env.PORT || 5109;

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
