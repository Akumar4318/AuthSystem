const { mailtrapClient, sender } = require('./mailltrap');
const { VERIFICATION_EMAIL_TEMPLATE } = require('./emailTemplates'); // Correct import ✅

exports.sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{ email }];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Verify Your Email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken)
        });

        console.log("Email sent successfully:", response);
    } catch (error) {
        console.error("Error while sending email:", error.message);
        throw new Error(`Error while sending the verification email: ${error.message}`);
    }
};
