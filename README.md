# EngageHub - Educational Services Website

A modern, responsive React.js website for educational services, inspired by leading education websites like Sage Education, UniHawk, and Crimson Education.

## 🚀 Features

### Design & User Experience
- **Modern Design**: Clean, professional design with the specified color scheme (#005A73, #00A7B5, #003B4A)
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion animations for enhanced user engagement
- **Interactive Elements**: Hover effects and micro-interactions throughout

### Navigation & Structure
- **Fixed Header**: With logo, navigation menu, and contact information
- **Complete Navigation**: All required pages implemented
  - Home
  - About
  - Services
  - Events
  - Workshops
  - Blogs
  - Newsletter
  - Contact

### Contact Form
- **Comprehensive Form**: Includes all required fields:
  - Student Name
  - Student Email
  - Student Phone Number
  - Class
  - Parent's Name
  - Parent's Phone Number
  - Address
- **Form Validation**: Client-side validation for all required fields
- **Email Integration**: Automatic email notifications to admin (using EmailJS)
- **Success Page**: Redirects to a success page after form submission
- **Admin Access**: Form data accessible via admin dashboard at `/admin`
- **Dual Storage**: Data saved to both email and browser localStorage

### Technical Features
- **React Router**: Client-side routing for smooth navigation
- **Framer Motion**: Advanced animations and transitions
- **React Icons**: Comprehensive icon library
- **CSS Variables**: Consistent theming with CSS custom properties
- **Performance Optimized**: Web Vitals monitoring and optimization

## 🛠️ Technology Stack

- **Frontend**: React.js 18.2.0
- **Routing**: React Router DOM 6.3.0
- **Animations**: Framer Motion 10.16.4
- **Icons**: React Icons 4.11.0
- **Performance**: Web Vitals
- **Styling**: CSS3 with custom properties
- **Build Tool**: Create React App

## 📁 Project Structure

```
engagehub/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── logo.png
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Header.css
│   │   ├── Footer.js
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── About.js
│   │   ├── About.css
│   │   ├── Services.js
│   │   ├── Services.css
│   │   ├── Events.js
│   │   ├── Events.css
│   │   ├── Workshops.js
│   │   ├── Workshops.css
│   │   ├── Blogs.js
│   │   ├── Blogs.css
│   │   ├── Newsletter.js
│   │   ├── Newsletter.css
│   │   ├── Contact.js
│   │   ├── Contact.css
│   │   ├── ContactSuccess.js
│   │   └── ContactSuccess.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   └── reportWebVitals.js
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd engagehub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Email Integration (Optional)**
   - Follow the detailed guide in `EMAIL_SETUP.md`
   - This enables automatic email notifications to admin
   - Without setup, forms still work but no emails are sent

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files ready for deployment.

## 🎨 Design System

### Color Palette
- **Primary**: #005A73 (Dark Blue)
- **Secondary**: #00A7B5 (Cyan)
- **Accent**: #003B4A (Dark Teal)
- **White**: #ffffff
- **Light Gray**: #f8f9fa
- **Gray**: #6c757d
- **Dark Gray**: #343a40

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Components
- **Buttons**: Primary and secondary variants with hover effects
- **Cards**: Consistent card design with shadows and hover animations
- **Forms**: Styled form inputs with focus states
- **Navigation**: Responsive navigation with mobile menu

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🚀 Deployment

### Vercel Deployment
This project is optimized for Vercel deployment:

1. **Connect to Vercel**
   - Push your code to GitHub
   - Connect your repository to Vercel
   - Deploy automatically

2. **Custom Domain**
   - Configure your custom domain (e.g., xyz.com)
   - Set up admin subdomain (admin.xyz.com) for form data access

### Environment Variables
Create a `.env` file for any API keys or configuration:

```env
REACT_APP_API_URL=your_api_url
REACT_APP_ADMIN_URL=admin.xyz.com
```

## 🔧 Customization

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route in `src/App.js`
3. Create corresponding CSS file
4. Update navigation in `src/components/Header.js`

### Modifying Colors
Update CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #005A73;
  --secondary-color: #00A7B5;
  --accent-color: #003B4A;
}
```

### Adding Animations
Use Framer Motion for new animations:
```jsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

## 📊 Performance

- **Lighthouse Score**: Optimized for high performance scores
- **Web Vitals**: Core Web Vitals monitoring implemented
- **Image Optimization**: Optimized images and lazy loading
- **Code Splitting**: Automatic code splitting with React Router

## 🔒 Security

- **Form Validation**: Client-side validation for all forms
- **XSS Protection**: React's built-in XSS protection
- **HTTPS Ready**: Configured for HTTPS deployment

## 📞 Support

For questions or support:
- **Email**: info@engagehub.com
- **Phone**: +1 (234) 567-890
- **Address**: 123 Education Street, Learning City, LC 12345

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

**EngageHub** - Empowering students through quality education and comprehensive learning experiences. 