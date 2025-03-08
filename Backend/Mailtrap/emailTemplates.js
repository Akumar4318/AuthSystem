
module.exports={PASSWORD_RESET_SUCCESS_TEMPLATE : `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Successful</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Password Reset Successful</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>We're writing to confirm that your password has been successfully reset.</p>
    <div style="text-align: center; margin: 30px 0;">
      <div style="background-color: #4CAF50; color: white; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; display: inline-block; font-size: 30px;">
        ✓
      </div>
    </div>
    <p>If you did not initiate this password reset, please contact our support team immediately.</p>
    <p>For security reasons, we recommend that you:</p>
    <ul>
      <li>Use a strong, unique password</li>
      <li>Enable two-factor authentication if available</li>
      <li>Avoid using the same password across multiple sites</li>
    </ul>
    <p>Thank you for helping us keep your account secure.</p>
    <p>Best regards,<br>Your App Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`};

module.exports={PASSWORD_RESET_REQUEST_TEMPLATE :`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Password Reset</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>We received a request to reset your password. If you didn't make this request, please ignore this email.</p>
    <p>To reset your password, click the button below:</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="{resetURL}" style="background-color: #4CAF50; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Reset Password</a>
    </div>
    <p>This link will expire in 1 hour for security reasons.</p>
    <p>Best regards,<br>Your App Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`};


module.exports = {
  VERIFICATION_EMAIL_TEMPLATE: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email</title>
</head>
<body style="
  font-family: 'Helvetica Neue', sans-serif; 
  background-color: #f3f4f6; 
  color: #333;
  max-width: 600px; 
  margin: 0 auto; 
  padding: 20px; 
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); 
  border-radius: 12px;">

  <!-- Header -->
  <div style="
    background: linear-gradient(135deg, #4CAF50, #2E8B57); 
    padding: 30px; 
    text-align: center;
    border-radius: 12px 12px 0 0;">
    <h1 style="
      color: #fff; 
      margin: 0;
      font-size: 28px;">🚀 Verify Your Email</h1>
  </div>

  <!-- Body -->
  <div style="
    background-color: #ffffff; 
    padding: 30px; 
    border-radius: 0 0 12px 12px; 
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">

    <p>Hello,</p>

    <p>We're excited to have you on board! To activate your account, please use the following verification code:</p>

    <div style="
      text-align: center; 
      margin: 30px 0; 
      padding: 15px; 
      background-color: #e6f4ea; 
      border: 2px solid #4CAF50; 
      border-radius: 8px;">
      <span style="
        font-size: 36px; 
        font-weight: bold; 
        letter-spacing: 3px; 
        color: #4CAF50;">{verificationCode}</span>
    </div>

    <p>Alternatively, you can click the button below to verify your email:</p>

    <div style="text-align: center; margin: 20px 0;">
      <a href="{verificationLink}" 
        style="
        background-color: #4CAF50; 
        color: #fff; 
        padding: 12px 30px; 
        border-radius: 5px; 
        text-decoration: none; 
        font-weight: bold;">Verify Email</a>
    </div>

    <p style="color: #888; font-size: 0.9em;">
      This code will expire in 15 minutes for security reasons. If you didn’t request this, please ignore this email.
    </p>

    <p>Best regards,<br>
    <strong>Your App Team</strong></p>
  </div>

  <!-- Footer -->
  <div style="
    text-align: center; 
    margin-top: 20px; 
    color: #aaa; 
    font-size: 0.8em;">
    <p>This is an automated message — please do not reply.</p>
  </div>
</body>
</html>`
};
