# 🚀 QUICK START GUIDE

Get your Quick Snatch website up and running in 5 minutes!

## Step 1: Install Dependencies (1 minute)
```bash
cd quick-snatch-project
npm install
```

## Step 2: Start the Development Server (30 seconds)
```bash
npm run dev
```
The site will open at `http://localhost:5173`

## Step 3: Set Up Google Sheets Integration (3 minutes)

### A. Create Your Google Sheet
1. Go to [sheets.google.com](https://sheets.google.com)
2. Create a new blank sheet
3. Name it "Quick Snatch Registrations"

### B. Add the Script
1. In your sheet: **Extensions** → **Apps Script**
2. Delete existing code
3. Copy everything from `google-apps-script.js`
4. Paste it in the editor
5. Click Save 💾

### C. Deploy the Script
1. Click **Deploy** → **New deployment**
2. Click ⚙️ → Select **Web app**
3. Settings:
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click **Deploy**
5. Click **Authorize access** (follow prompts)
6. **Copy the Web App URL**

### D. Connect to Your Website
1. Open `src/components/Registration.jsx`
2. Line 53: Replace `'YOUR_GOOGLE_SCRIPT_URL_HERE'`
3. Paste your Web App URL
4. Save the file

## Step 4: Test It! (30 seconds)
1. Navigate to the registration section on your website
2. Fill out the form
3. Submit
4. Check your Google Sheet - data should appear!

## ✅ You're Done!

Your website is now:
- ✅ Running locally
- ✅ Connected to Google Sheets
- ✅ Ready to collect registrations

## 📱 Next Steps

### To deploy online:
```bash
npm run build
```
Then upload the `dist/` folder to:
- Vercel (easiest)
- Netlify
- Your web hosting

### Need help?
See `SETUP_INSTRUCTIONS.md` for detailed troubleshooting.

---

**Enjoy your Quick Snatch event! 🎉**
