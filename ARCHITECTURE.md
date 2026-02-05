# Quick Snatch - System Architecture

## 📊 How Everything Works

```
┌─────────────────────────────────────────────────────────────┐
│                    USER'S BROWSER                            │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │            Quick Snatch Website                       │  │
│  │                                                        │  │
│  │  ┌──────────┐  ┌──────────┐  ┌────────────────────┐ │  │
│  │  │  Navbar  │  │   Hero   │  │  EventDetails      │ │  │
│  │  │          │  │ (WebGL)  │  │                    │ │  │
│  │  └──────────┘  └──────────┘  └────────────────────┘ │  │
│  │                                                        │  │
│  │  ┌──────────┐  ┌─────────────────────────────────┐  │  │
│  │  │Flashback │  │     Registration Form           │  │  │
│  │  │          │  │  • Name Input                   │  │  │
│  │  └──────────┘  │  • Email Input                  │  │  │
│  │                │  • Phone Input                  │  │  │
│  │                │  • College Input                │  │  │
│  │                │  • Category Select              │  │  │
│  │                │  • [Submit Button]              │  │  │
│  │                └──────────┬──────────────────────┘  │  │
│  └───────────────────────────┼──────────────────────────┘  │
└────────────────────────────┼─────────────────────────────┘
                              │
                              │ HTTP POST (JSON)
                              │ with form data
                              ▼
         ┌──────────────────────────────────────┐
         │   Google Apps Script (Web App)       │
         │                                       │
         │   • Receives form data                │
         │   • Validates data                    │
         │   • Adds timestamp                    │
         │   • Creates/updates sheet headers     │
         │   • Appends row to sheet              │
         └──────────────┬───────────────────────┘
                        │
                        │ Writes data
                        ▼
         ┌──────────────────────────────────────┐
         │      Google Sheets                   │
         │                                       │
         │  Timestamp | Name | Email | Phone... │
         │  ──────────┼──────┼───────┼──────... │
         │  2/5/2026  | John | john@ | 123...   │
         │  2/5/2026  | Jane | jane@ | 456...   │
         │  ...       | ...  | ...   | ...      │
         └──────────────────────────────────────┘
```

## 🔄 Data Flow

1. **User fills form** → React component captures input
2. **User clicks submit** → JavaScript `fetch()` sends POST request
3. **Google Apps Script receives** → Processes and validates data
4. **Data saved to Sheet** → New row added with all information
5. **Success message shown** → User sees confirmation

## 🛠️ Technology Stack

### Frontend (What users see)
- **React** - Component-based UI
- **GSAP** - Smooth scroll animations
- **WebGL** - Hero section effects
- **Vite** - Fast development & building

### Backend (Data handling)
- **Google Apps Script** - Server-side processing
- **Google Sheets** - Database/storage

## 🔐 Security & Privacy

- **No API keys in frontend** - Script URL is public but safe
- **CORS handled** - Apps Script allows cross-origin requests
- **Data validation** - Both client and server-side
- **Secure transmission** - HTTPS by default

## 📈 Scalability

Google Sheets can handle:
- ✅ Up to 10 million cells
- ✅ ~1000 registrations/day safely
- ✅ Multiple concurrent submissions

For larger events (>5000 registrations), consider:
- Firebase
- MongoDB
- PostgreSQL

## 🎯 Key Features

1. **Real-time Updates** - Data appears instantly in sheet
2. **No Server Needed** - Google handles everything
3. **Easy to View** - Data in familiar spreadsheet format
4. **Export Ready** - Download as Excel, CSV, etc.
5. **Collaborative** - Share sheet with team members

## 📱 Mobile Responsive

The website adapts to all screen sizes:
- 📱 Mobile phones
- 📱 Tablets
- 💻 Laptops
- 🖥️ Desktops

All animations scale smoothly!
