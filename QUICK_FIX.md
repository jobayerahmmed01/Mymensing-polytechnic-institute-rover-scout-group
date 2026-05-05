# ⚡ Installation Fix

## 🚨 Problem
Getting `ERESOLVE` error during `npm install`

## ✅ Solutions

### Option 1: Use Installer (Easiest)
```
Double-click: install.bat
```

### Option 2: Manual Command
```bash
npm install --legacy-peer-deps
```

### Option 3: Clean Install
```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

## 🚀 After Installation

```bash
npm run dev
```

Visit: http://localhost:8080

---

**That's it! 🎉**
