# 🚀 Deploy Imihigo Gauge to GitHub Pages

## One-time setup (5 minutes)

### 1. Open Terminal / Command Prompt on your computer
- Windows: Press Win+R, type `cmd`, press Enter
- Mac: Press Cmd+Space, type `terminal`, press Enter

### 2. Navigate to this folder
```
cd path/to/imihigo-gauge
```
(Replace `path/to` with wherever you saved this folder)

### 3. Install dependencies
```
npm install
```

### 4. Create GitHub account
- Go to https://github.com → Sign Up (free)

### 5. Create a new repository
- Click the green "New" button
- Repository name: `imihigo-gauge`
- Set to Public
- Click "Create repository"

### 6. Initialize Git and push
```
git init
git add .
git commit -m "Initial deployment"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/imihigo-gauge.git
git push -u origin main
```
(Replace YOUR-USERNAME with your GitHub username)

### 7. Deploy to GitHub Pages
```
npm run deploy
```

### 8. Enable GitHub Pages
- Go to your repo on GitHub
- Click Settings → Pages
- Under "Branch" select `gh-pages` → Save
- Wait 2-3 minutes

## ✅ Your app will be live at:
```
https://YOUR-USERNAME.github.io/imihigo-gauge/
```

## 📱 Install on phone

**Android (Chrome):**
1. Open the URL in Chrome
2. Tap ⋮ menu → "Add to Home screen"
3. Tap "Add" → App icon appears!

**iPhone (Safari):**
1. Open the URL in Safari
2. Tap Share button (□↑)
3. Tap "Add to Home Screen"
4. Tap "Add" → App icon appears!

## 🔄 Update the app later
```
npm run deploy
```
That's it — one command to update!
