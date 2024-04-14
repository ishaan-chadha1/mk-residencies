import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method === "POST") {
        // Configure your SMTP transporter
        const transporter = nodemailer.createTransport({
            service: "gmail", // or another email service
            auth: {
                user: process.env.EMAIL_USERNAME, // Your email id
                pass: process.env.EMAIL_PASSWORD // Your password for the email
            }
        });

        // Get form data submitted through POST request
        const { name, email, message } = req.body;

        // Set up email data
        const mailOptions = {
            from: email, // sender address
            to: "your-email@example.com", // list of receivers
            subject: `New Enquiry from ${name}`, // Subject line
            text: message, // Plain text body
            html: `<p>${message}</p>` // HTML body content
        };

        // Send email with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                return res.status(500).send("Error sending email");
            }
            res.status(200).send("Email sent successfully");
        });
    } else {
        // Handle any other HTTP method
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
