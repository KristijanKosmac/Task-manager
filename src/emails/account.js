const sgMail = require("@sendgrid/mail")

// const sendgridAPIKep = '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'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "kos_kiki@hotmail.com",
        subject: "Thanks for joining in!",
        text: `Welcome to the app, ${name}. Let me know how you get along with the app. `,
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "kos_kiki@hotmail.com",
        subject: "CancelationEmail",
        text: `Bye bey ${name} `,
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}