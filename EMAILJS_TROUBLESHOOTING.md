# EmailJS Troubleshooting Guide

This guide helps you fix common EmailJS issues in your EngageHub project.

## 🔍 **Step 1: Check Your EmailJS Configuration**

### Your Current Configuration:
```javascript
const SERVICE_ID = 'service_35l4m7w';
const TEMPLATE_ID = 'template_h2kn4mp';
const USER_ID = 'VOf9Q1CreblzdZh0b';
```

### Verify These in EmailJS Dashboard:

1. **Go to EmailJS Dashboard**: https://dashboard.emailjs.com/
2. **Check Email Services**: Verify `service_35l4m7w` exists and is active
3. **Check Email Templates**: Verify `template_h2kn4mp` exists and is active
4. **Check API Keys**: Verify `VOf9Q1CreblzdZh0b` is your correct Public Key

## 🚨 **Common Issues & Solutions**

### Issue 1: "Invalid template" Error
**Cause**: Template ID is incorrect or template doesn't exist
**Solution**:
1. Go to EmailJS Dashboard → Email Templates
2. Copy the correct Template ID
3. Update in `src/pages/Contact.js`:
```javascript
const TEMPLATE_ID = 'your_correct_template_id';
```

### Issue 2: "Invalid service" Error
**Cause**: Service ID is incorrect or service is not configured
**Solution**:
1. Go to EmailJS Dashboard → Email Services
2. Copy the correct Service ID
3. Update in `src/pages/Contact.js`:
```javascript
const SERVICE_ID = 'your_correct_service_id';
```

### Issue 3: "Invalid user" Error
**Cause**: User ID is incorrect
**Solution**:
1. Go to EmailJS Dashboard → Account → API Keys
2. Copy your Public Key
3. Update in `src/pages/Contact.js`:
```javascript
const USER_ID = 'your_correct_public_key';
```

### Issue 4: Template Variables Mismatch
**Cause**: Template variables in EmailJS don't match the code
**Solution**:
1. Check your EmailJS template variables
2. Make sure they match these exact names:
   - `{{to_email}}`
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{student_name}}`
   - `{{student_email}}`
   - `{{student_phone}}`
   - `{{student_class}}`
   - `{{parent_name}}`
   - `{{parent_phone}}`
   - `{{address}}`
   - `{{submission_date}}`
   - `{{message}}`

## 🧪 **Testing Your Setup**

### Method 1: Browser Console Test
1. Open your website in browser
2. Open Developer Tools (F12)
3. Go to Console tab
4. Run this test command:
```javascript
// Test EmailJS connection
emailjs.send('service_35l4m7w', 'template_h2kn4mp', {
  to_email: 'jhaayush557@gmail.com',
  from_name: 'Test User',
  from_email: 'test@example.com',
  student_name: 'Test Student',
  student_email: 'test@example.com',
  student_phone: '123-456-7890',
  student_class: 'Test Class',
  parent_name: 'Test Parent',
  parent_phone: '123-456-7890',
  address: 'Test Address',
  submission_date: new Date().toLocaleString(),
  message: 'Test email from EngageHub'
}, 'VOf9Q1CreblzdZh0b')
.then(response => console.log('SUCCESS:', response))
.catch(error => console.log('FAILED:', error));
```

### Method 2: Form Submission Test
1. Fill out the contact form on your website
2. Submit the form
3. Check browser console for error messages
4. Check your email for the notification

## 📧 **EmailJS Template Example**

Make sure your EmailJS template looks like this:

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

## 🔧 **Quick Fixes**

### Fix 1: Reinitialize EmailJS
Add this line at the top of your Contact.js file:
```javascript
emailjs.init('VOf9Q1CreblzdZh0b');
```

### Fix 2: Update Template Variables
Make sure your template variables match exactly:
```javascript
const templateParams = {
  to_email: 'jhaayush557@gmail.com',
  from_name: submissionData.studentName,
  from_email: submissionData.studentEmail,
  student_name: submissionData.studentName,
  student_email: submissionData.studentEmail,
  student_phone: submissionData.studentPhone,
  student_class: submissionData.studentClass,
  parent_name: submissionData.parentName,
  parent_phone: submissionData.parentPhone,
  address: submissionData.address,
  submission_date: new Date().toLocaleString(),
  message: `New student registration from ${submissionData.studentName}`
};
```

### Fix 3: Check EmailJS Service
1. Go to EmailJS Dashboard → Email Services
2. Make sure your Gmail/Outlook service is properly connected
3. Test the service from the dashboard

## 📊 **Debugging Steps**

1. **Check Browser Console**: Look for specific error messages
2. **Verify Credentials**: Double-check all IDs in EmailJS dashboard
3. **Test Template**: Use EmailJS dashboard to test your template
4. **Check Network**: Ensure no network issues blocking the request
5. **Verify Email**: Check spam folder for test emails

## 🆘 **Still Having Issues?**

If you're still getting errors:

1. **Share the exact error message** from browser console
2. **Check EmailJS dashboard** for any service issues
3. **Verify your email service** (Gmail/Outlook) is working
4. **Try a different email service** in EmailJS dashboard

## ✅ **Success Indicators**

When EmailJS is working correctly, you should see:
- ✅ No error messages in browser console
- ✅ Success message in console: `Email sent successfully`
- ✅ Email received in your inbox
- ✅ Form submission completes without errors

---

**Note**: The form will still work and save data to the admin dashboard even if EmailJS fails. The email is an additional notification feature.
