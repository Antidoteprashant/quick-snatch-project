# Quick Snatch 🎯

A modern, sleek event registration website with Google Sheets integration, featuring smooth GSAP animations and WebGL effects.

## ✨ Features

- **Smooth Scroll Animations** - Powered by GSAP ScrollTrigger
- **WebGL Hero Section** - Beautiful liquid goo effect
- **Google Sheets Integration** - Automatic registration data collection
- **Glassmorphism UI** - Modern, professional design
- **Fully Responsive** - Works on all devices
- **Form Validation** - Client-side validation before submission
- **Success Feedback** - Animated success messages

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Set Up Google Sheets (Important!)
Follow the detailed instructions in `SETUP_INSTRUCTIONS.md` to connect the registration form to Google Sheets.

**Quick version:**
1. Create a Google Sheet
2. Go to Extensions > Apps Script
3. Copy code from `google-apps-script.js`
4. Deploy as Web App
5. Copy the Web App URL
6. Paste it in `src/components/Registration.jsx` (line 53)

## 📂 Project Structure

```
quick-snatch-project/
├── src/
│   ├── components/
│   │   ├── Hero.jsx                 # WebGL animated hero section
│   │   ├── Navbar.jsx               # Fixed navigation bar
│   │   ├── EventDetails.jsx         # Event information cards
│   │   ├── Flashback.jsx            # Archive carousel
│   │   └── Registration.jsx         # Google Sheets integrated form
│   ├── App.jsx                      # Main app component
│   ├── main.jsx                     # React entry point
│   └── index.css                    # Global styles
├── google-apps-script.js            # Copy this to Google Apps Script
├── SETUP_INSTRUCTIONS.md            # Detailed setup guide
├── package.json
├── vite.config.js
└── index.html
```

## 🎨 Customization

### Change Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --bg-color: #0a0a0a;
  --text-main: #ffffff;
  --accent-primary: #ffffff;
  /* ... more variables */
}
```

### Modify Form Fields
In `src/components/Registration.jsx`:
1. Update `formData` state
2. Add/remove input elements
3. Update Google Apps Script accordingly

### Adjust Animations
All animations use GSAP. Modify settings in each component's `useLayoutEffect`:
```javascript
gsap.to(element, {
  duration: 1.2,  // Animation duration
  ease: "power4.out",  // Easing function
  // ... more properties
});
```

## 🔧 Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

## 📱 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy!

### Netlify
1. Run `npm run build`
2. Drag `dist/` folder to Netlify

### Manual
1. Run `npm run build`
2. Upload `dist/` folder to your web host

## 🐛 Common Issues

### Registration not working?
- Check if you've set the Google Script URL in `Registration.jsx`
- Verify the Apps Script is deployed with "Anyone" access
- Check browser console for errors

### Animations choppy?
- Reduce ScrollTrigger `end` values
- Lower WebGL resolution in Hero.jsx
- Disable some animations if needed

### Build errors?
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Make sure Node.js version is 16+

## 📋 Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **GSAP** - Animation library
- **WebGL** - Hero section effects
- **Google Apps Script** - Backend for form submissions

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

MIT License - feel free to use this project for your events!

## 📧 Support

For detailed setup help, see `SETUP_INSTRUCTIONS.md`

---

Made with ❤️ for Quick Snatch Event
