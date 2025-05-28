import nodemailer from "nodemailer";

export const mailsender = (req, res) => {
    const transport = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 465,
        auth: {
            user: "mukeshprajapati4172@gmail.com",
            pass: "zgoabyotexgnwais",
        },
    });

    const senderMailOptions = {
        from: "monu electronic<mukeshprajapati4172@gmail.com>",
        to: "mukeshprajapati4172@gmail.com",
        subject: "New Inquiry Request Received from your website",
        html: `
            <h1 style="color: green;">New service request received.</h1>
            <p style="text-align:center; color:gray; margin:5px;"> 
                A new service request has been received. Here are the details:
            </p>
            <h2>Contact Details</h2>
            <ul>
                <li><strong>Name:</strong> ${req.body.name}</li>
                <li><strong>Email:</strong> ${req.body.email}</li>
                <li><strong>Mobile:</strong> ${req.body.mobile}</li>
                <li><strong>Message:</strong> ${req.body.message}</li>
            </ul>
        `,
    };

    const recipientMailOptions = {
        from: "monu electronic<mukeshprajapati4172@gmail.com>",
        to: req.body.email,
        subject: "Contact Request Confirmation from monu electronic",
        html: `
            <h1 style="color: black;">Thank you for contacting monu electronic.</h1>
            <p style="text-align:center; color:gray; margin:5px;"> 
                We have received your service request and will get back to you shortly.
            </p>
            <h2>Contact Details</h2>
            <ul>
                <li><strong>Name:</strong> ${req.body.name}</li>
                <li><strong>Email:</strong> ${req.body.email}</li>
                <li><strong>Mobile:</strong> ${req.body.mobile}</li>
                <li><strong>Message:</strong> ${req.body.message}</li>
            </ul>
            <p style="text-align:center; color:gray; margin:5px;"> 
                If you have any further questions or need immediate assistance, please call us at +91 8103004462.
            </p>
            <p style="text-align:center; color:black; margin:5px; font-size:12px">
            <strong>monu electronic </strong>
                <br />
            </p>
        `,
    };

    transport.sendMail(senderMailOptions, (err, info) => {
        if (err) {
            console.error(err);
            return res.send(err);
        }
        console.log('Message sent to sender: %s', info.messageId);

        transport.sendMail(recipientMailOptions, (err, info) => {
            if (err) {
                console.error(err);
                return res.send(err);
            }
            console.log('Message sent to recipient: %s', info.messageId);
            return res.send(
                "<h1 style='text-align:center;color: green; margin-top:10%'><span style='font-size:60px;'>✅</span> <br />Thank you for contacting monu electronic! <br />We have received your service request and will respond shortly.</h1> <br /> <a href='/'>HomePage</a>"
            );
        });
    });
}
