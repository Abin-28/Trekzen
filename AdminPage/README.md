# AdminPage - Admin Interface

## Overview
The Admin interface lets administrators sign in and manage data (businesses, places, etc.). It is served by the same Express server as the main app.

## How to open
- Local: `http://localhost:3000/AdminPage`
- Render: `<your-render-url>/AdminPage`

Entry page served: `AdminPage/adminsignin.html`. After signing in, use `AdminPage/adminpage.html` for the dashboard.

## Structure
```
AdminPage/
├── adminpage.html
├── adminpage.js
├── adminsignin.html
├── adminsignup.html
└── .dist/
```

## How it works
- Static assets are served from the repo root; admin pages load CSS/JS/images via relative paths.
- Route mapped in `server.js`:
  - `GET /AdminPage` → `AdminPage/adminsignin.html`

## Run locally
```bash
npm install
npm start
# then open http://localhost:3000/AdminPage
```

## Deploy (Render)
- Start Command: `node server.js`
- Open: `<your-render-url>/AdminPage`

## Notes
- If you use authentication, configure your Firebase/project settings accordingly.
- Prefer relative URLs in admin HTML/JS so it works on both localhost and Render.
