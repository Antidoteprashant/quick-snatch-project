# Quick Snatch - Setup Instructions

## 🚀 Google Sheets Integration Setup

### Step 1: Create Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it "Quick Snatch Registrations" (or any name you prefer)
4. Keep this sheet open

### Step 2: Add Apps Script
1. In your Google Sheet, click **Extensions** > **Apps Script**
2. Delete any existing code in the editor
3. Copy the entire contents of `google-apps-script.js` from this project
4. Paste it into the Apps Script editor
5. Click the **Save** icon (💾) or press `Ctrl+S` / `Cmd+S`
6. Name your project "Quick Snatch Registration"

### Step 3: Deploy as Web App
1. In the Apps Script editor, click **Deploy** > **New deployment**
2. Click the gear icon (⚙️) next to "Select type"
3. Choose **Web app**
4. Fill in the deployment settings:
   - **Description**: "Quick Snatch Registration Form Handler"
   - **Execute as**: **Me** (your Google account)
   - **Who has access**: **Anyone**
5. Click **Deploy**
6. You may need to authorize the script:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** if you see a warning
   - Click **Go to [Project Name] (unsafe)**
   - Click **Allow**
7. Copy the **Web App URL** that appears (it will look like: `https://script.google.com/macros/s/AKfycby.../exec`)

### Step 4: Update Your React App
1. Open `src/components/Registration.jsx`
2. Find this line (around line 53):
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';
   ```
3. Replace `'YOUR_GOOGLE_SCRIPT_URL_HERE'` with your copied Web App URL:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby.../exec';
   ```
4. Save the file

### Step 5: Test the Integration
1. Start your development server: `npm run dev`
2. Navigate to the registration section
3. Fill out and submit the form
4. Check your Google Sheet - you should see the data appear!

---

## 🎨 Project Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Or with yarn
yarn install
```

### Required Dependencies
Make sure your `package.json` includes:
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "gsap": "^3.12.0"
  }
}
```

### Running the Project
```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🔧 Troubleshooting

### Form not submitting to Google Sheets?
1. **Check the Web App URL**: Make sure you copied the complete URL including `/exec` at the end
2. **Verify deployment settings**: Execute as "Me" and access "Anyone"
3. **Check browser console**: Look for CORS or network errors
4. **Re-deploy**: Sometimes you need to create a new deployment

### CORS Issues?
The script uses `mode: 'no-cors'` which is normal for Google Apps Script. You won't receive a response body, but the data will still be saved.

### Data not appearing in sheet?
1. Check if the Apps Script is authorized properly
2. Make sure the sheet is the active sheet in your spreadsheet
3. Try running the `testDoPost()` function in Apps Script editor to test

### Animation performance issues?
1. Reduce the `end` value in Hero.jsx ScrollTrigger (line 155)
2. Lower the WebGL canvas resolution in Hero.jsx (line 140)
3. Disable some GSAP animations if needed

---

## 📁 File Structure
```
quick-snatch-project/
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── EventDetails.jsx
│   │   ├── Flashback.jsx
│   │   └── Registration.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── google-apps-script.js (copy this to Google Apps Script)
└── SETUP_INSTRUCTIONS.md (this file)
```

---

## 🎯 Features
- ✅ Smooth scrolling navigation
- ✅ WebGL animated hero section
- ✅ GSAP scroll animations
- ✅ Google Sheets integration for registrations
- ✅ Form validation
- ✅ Success/error feedback
- ✅ Responsive design
- ✅ Modern glassmorphism UI

---

## 📝 Customization

### Change Event Categories
In `Registration.jsx`, modify the select options:
```javascript
<option value="Solo Speed">Event Category: Solo Speed</option>
<option value="Dual Strike">Event Category: Dual Strike</option>
// Add more options as needed
```

### Modify Form Fields
To add/remove fields:
1. Update the `formData` state in `Registration.jsx`
2. Add/remove input elements in the form JSX
3. Update the Google Apps Script headers array
4. Update the `sheet.appendRow()` array

### Styling
All styles use CSS variables defined in `index.css`:
- `--bg-color`: Background color
- `--text-main`: Primary text color
- `--accent-primary`: Accent color
- etc.

---

## 🚀 Deployment

### Deploy to Vercel
```bash
npm run build
# Upload the dist/ folder to Vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag and drop the dist/ folder to Netlify
```

---

## 📧 Support
If you encounter issues, check:
1. Browser console for errors
2. Google Apps Script execution logs
3. Network tab for failed requests

Happy coding! 🎉
