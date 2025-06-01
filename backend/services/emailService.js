const nodemailer = require("nodemailer");

module.exports = async ({ from, to, subject, text, html }) => {
    try {
        let transporter = nodemailer.createTransport({
            service: "gmail", // If you're using Gmail
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASSWORD,
            },
        });

        let info = await transporter.sendMail({
            from: `inShare <${from}>`,
            to,
            subject,
            text,
            html,
        });

        console.log("Email sent: %s", info.messageId);
    } catch (error) {
        console.error("Failed to send email:", error);
    }
};
