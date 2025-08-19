# Email Integration Setup Guide

This guide explains how to set up email notifications for the EngageHub contact form using EmailJS.

## 🎯 What This Does

### Email Integration Features:
1. **Automatic Email Notifications**: When someone submits the contact form, an email is automatically sent to the admin
2. **Form Data in Email**: The email contains all the submitted information (student name, email, phone, etc.)
3. **Immediate Alerts**: Admin gets notified instantly when new applications come in
4. **Backup System**: Even if email fails, the form data is still saved to the admin dashboard

### How It Works:
1. User fills out contact form on website
2. Form data is sent via EmailJS to admin email
3. Form data is also saved to browser's localStorage
4. Admin can view submissions in the web dashboard at `/admin`
5. Admin receives immediate email notification

## 📧 EmailJS Setup Instructions

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Add Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID** (you'll need this later)

### Step 3: Create Email Template
1. In EmailJS dashboard, go to "Email Templates"
2. Click "Create New Template"
3. Use this template content:

```html
Subject: New Student Registration - {{student_name}}

Hello Admin,

A new student registration has been submitted:

**Student Information:**
- Name: {{student_name}}
- Email: {{student_email}}
- Phone: {{student_phone}}
- Class: {{student_class}}

**Parent Information:**
- Name: {{parent_name}}
- Phone: {{parent_phone}}

**Address:**
{{address}}

**Submission Details:**
- Submitted: {{submission_date}}
- From: {{from_email}}

Please review and respond within 24 hours.

Best regards,
EngageHub System
```

4. Save the template and note down your **Template ID**

### Step 4: Get Your User ID
1. In EmailJS dashboard, go to "Account" → "API Keys"
2. Copy your **Public Key** (this is your User ID)

### Step 5: Update the Code
1. Open `src/pages/Contact.js`
2. Find these lines (around line 85-87):
```javascript
const SERVICE_ID = 'your_service_id'; // Replace with your EmailJS service ID
const TEMPLATE_ID = 'your_template_id'; // Replace with your EmailJS template ID
const USER_ID = 'your_user_id'; // Replace with your EmailJS user ID
```

3. Replace the placeholder values:
```javascript
const SERVICE_ID = 'service_abc123'; // Your actual service ID
const TEMPLATE_ID = 'template_xyz789'; // Your actual template ID
const USER_ID = 'user_def456'; // Your actual user ID
```

4. Update the admin email address:
```javascript
to_email: 'your-admin-email@domain.com', // Change to your admin email
```

## 🔧 Configuration Options

### Customize Email Template Variables
The following variables are available in your email template:
- `{{student_name}}` - Student's full name
- `{{student_email}}` - Student's email address
- `{{student_phone}}` - Student's phone number
- `{{student_class}}` - Student's class/grade level
- `{{parent_name}}` - Parent's full name
- `{{parent_phone}}` - Parent's phone number
- `{{address}}` - Full address
- `{{submission_date}}` - Date and time of submission
- `{{from_name}}` - Student's name (same as student_name)
- `{{from_email}}` - Student's email (same as student_email)

### Multiple Admin Emails
To send to multiple admin emails, modify the template parameters:
```javascript
const templateParams = {
  to_email: 'admin1@domain.com, admin2@domain.com', // Multiple emails
  // ... other parameters
};
```

### Custom Email Subject
Update the subject line in your EmailJS template:
```html
Subject: 🎓 New Student Application - {{student_name}}
```

## 🚨 Troubleshooting

### Common Issues:

1. **"Failed to send email notification" error**
   - Check your EmailJS credentials are correct
   - Verify your email service is properly connected
   - Check browser console for detailed error messages

2. **Emails not being received**
   - Check spam/junk folder
   - Verify email service setup in EmailJS
   - Test with a different email provider

3. **Form submits but no email**
   - Check EmailJS dashboard for failed sends
   - Verify template variables match the code
   - Check browser console for JavaScript errors

### Testing the Setup:
1. Fill out the contact form on your website
2. Submit the form
3. Check your admin email for the notification
4. Check the admin dashboard at `/admin` for the submission
5. Check browser console for any error messages

## 📊 EmailJS Free Plan Limits

- **200 emails per month** (free plan)
- **2 email services** (Gmail, Outlook, etc.)
- **5 email templates**
- **Basic support**

For higher limits, consider upgrading to a paid plan.

## 🔒 Security Notes

### Current Implementation:
- ✅ Form data is sent via secure EmailJS API
- ✅ No sensitive data is exposed in client-side code
- ✅ EmailJS handles authentication securely

### Production Recommendations:
- 🔄 Use environment variables for EmailJS credentials
- 🔄 Implement rate limiting on form submissions
- 🔄 Add CAPTCHA to prevent spam
- 🔄 Use HTTPS in production

## 📝 Environment Variables (Optional)

For better security, you can use environment variables:

1. Create a `.env` file in your project root:
```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_USER_ID=your_user_id
REACT_APP_ADMIN_EMAIL=admin@yourdomain.com
```

2. Update the Contact.js code:
```javascript
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;
const ADMIN_EMAIL = process.env.REACT_APP_ADMIN_EMAIL;
```

## ✅ Success Checklist

- [ ] EmailJS account created
- [ ] Email service configured
- [ ] Email template created
- [ ] Credentials updated in code
- [ ] Test submission sent
- [ ] Email received by admin
- [ ] Admin dashboard shows submission
- [ ] No console errors

## 🆘 Support

If you need help:
1. Check EmailJS documentation: https://www.emailjs.com/docs/
2. Review browser console for error messages
3. Test with EmailJS's built-in testing tools
4. Contact EmailJS support for service issues

---

**Note**: This email integration works alongside the existing localStorage system. Even if email fails, form data is still saved and accessible in the admin dashboard.
