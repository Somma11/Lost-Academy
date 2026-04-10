<div align="center">

```
██╗      ██████╗ ███████╗████████╗     █████╗  ██████╗ █████╗ ██████╗ ███████╗███╗   ███╗██╗   ██╗
██║     ██╔═══██╗██╔════╝╚══██╔══╝    ██╔══██╗██╔════╝██╔══██╗██╔══██╗██╔════╝████╗ ████║╚██╗ ██╔╝
██║     ██║   ██║███████╗   ██║       ███████║██║     ███████║██║  ██║█████╗  ██╔████╔██║ ╚████╔╝ 
██║     ██║   ██║╚════██║   ██║       ██╔══██║██║     ██╔══██║██║  ██║██╔══╝  ██║╚██╔╝██║  ╚██╔╝  
███████╗╚██████╔╝███████║   ██║       ██║  ██║╚██████╗██║  ██║██████╔╝███████╗██║ ╚═╝ ██║   ██║   
╚══════╝ ╚═════╝ ╚══════╝   ╚═╝       ╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚═════╝ ╚══════╝╚═╝     ╚═╝   ╚═╝   
```

**A browser-injected cheat tool for Khan Academy**

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![Target](https://img.shields.io/badge/Target-Khan%20Academy-14BF96?style=for-the-badge)](https://www.khanacademy.org/)
[![Delivery](https://img.shields.io/badge/Delivery-jsDelivr%20CDN-E84D2A?style=for-the-badge&logo=jsdelivr&logoColor=white)](https://www.jsdelivr.com/)
[![Type](https://img.shields.io/badge/Type-Bookmarklet-blueviolet?style=for-the-badge)]()

</div>

---

## 🧠 What is Lost Academy?

**Lost Academy** is a **client-side JavaScript injection tool** that runs directly inside your browser tab. It targets [Khan Academy](https://www.khanacademy.org) and extends or overrides its default behavior using a **bookmarklet** — a tiny JS snippet disguised as a browser bookmark.

No extensions. No downloads. No installs. Just one click while you're on the site.

### How it works under the hood

When you click the bookmarklet, this happens:

```
[You click the bookmark]
        │
        ▼
[Bookmarklet fires inline JS]
        │
        ▼  fetches via CDN
[loader.js] ◄─── cdn.jsdelivr.net/gh/Somma11/Lost-Academy@main
        │
        ▼  dynamically imports
[lostacademy.js]  ← the core cheat logic
        │
        ├──► [logo.js]    ← renders the Lost Academy UI
        └──► [oneko/]     ← bonus module (animated cat cursor 🐱)
```

All scripts are fetched **at runtime** from jsDelivr's global CDN, which mirrors this GitHub repo. That means the cheat auto-updates whenever the repo is updated — no reinstall needed.

---

## ⚡ Installation

> Tested on Chrome, Firefox, Edge and Brave.

### Step 1 — Copy the bookmarklet payload

#### 💻 - Computer bookmarklet
```javascript
javascript:(()=>{const s=document.createElement("script");s.src="https://cdn.jsdelivr.net/gh/Somma11/Lost-Academy@refs/heads/main/loader.js";s.onload=()=>console.log("[Lost Academy] loader.js carregado");s.onerror=()=>console.error("[Lost Academy] Falha ao carregar loader.js");document.head.appendChild(s);})();
```
#### 📱 - Mobile bookmarklet
```javascript
javascript:(()=>{const s=document.createElement("script");s.src="https://cdn.jsdelivr.net/gh/Somma11/Lost-Academy@refs/heads/main/loader-mobile.js";s.onload=()=>console.log("[Lost Academy] loader-mobile.js carregado");s.onerror=()=>console.error("[Lost Academy] Falha ao carregar loader-mobile.js");document.head.appendChild(s);})();
```

### Step 2 — Create a new bookmark

Right-click your **bookmarks bar** → **Add page** (or "Add bookmark") → paste the code above as the **URL** field. Name it whatever you want (e.g. `💀 Lost Academy`).

> **Don't see your bookmarks bar?** Press `Ctrl+Shift+B` (Windows/Linux) or `Cmd+Shift+B` (Mac) to show it.

### Step 3 — Run it on Khan Academy

Go to [khanacademy.org](https://www.khanacademy.org), open any exercise, and click your bookmark. Check the browser console (`F12` → Console tab) for the `[Lost Academy]` log confirming it loaded.

---

## 🗂️ Project Structure

```
Lost-Academy/
├── loader.js         # Entry point — fetched by the bookmarklet
│                     # Bootstraps the rest of the tool
│
├── lostacademy.js    # Core cheat logic
│
├── logo.js           # Renders the Lost Academy overlay/logo
│
└── oneko/            # Oneko module — animated dragon that
                      # follows your mouse cursor around the page
```

---

## 🔬 Technical Details

| Feature | Details |
|---|---|
| **Injection method** | Dynamic `<script>` tag appended to `document.head` |
| **Script delivery** | jsDelivr CDN (GitHub-backed, auto-updates with repo) |
| **Execution context** | Runs inside the page's JS environment (same origin window) |
| **Browser support** | Any modern browser that supports ES6+ |
| **Persistence** | None — re-run bookmarklet on each page load |

---

## 🐉 Oneko Module

The `oneko` module renders an animated dragon sprite that chases your cursor around the screen. A custom twist on the classic **Oneko** concept — but instead of a cat, you get a dragon roaming across Khan Academy's UI.

Totally useless. Absolutely necessary.

---

## ⚠️ Disclaimer

This project is **closed source** and provided as-is, with no warranties.
Using cheats may violate [Khan Academy's Terms of Service](https://www.khanacademy.org/about/tos).
The author is not responsible for any account restrictions, bans, or consequences from using this tool.

**Use at your own risk. 💀**

---

<div align="center">

Built with 🍕 by [Somma11](https://github.com/Somma11)

</div>
