<div align="center">

![Portfolio UI Banner](./client/src/assets/profile.jpg) 

# 🌌 Srisajeenthran Sritharan — Premium Portfolio

### **Full-Stack Engineering & AI/ML Research**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Vite](https://img.shields.io/badge/Vite-Bundler-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-Library-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

---

A modern, responsive portfolio ecosystem engineered with a premium **Professional Glassmorphic / Dark Aurora** design system. Seamlessly combining comprehensive full-stack project showcases, an integrated AI chatbot, and fluid cinematic rendering experiences to deliver a world-class presentation.

[**Features**](#-features) • [**Tech Stack**](#-tech-stack) • [**Quick Start**](#-quick-start) • [**File Structure**](#-file-structure) • [**Architecture**](#-system-architecture)

</div>

---

## ✨ Features

### 🎯 Core Experiences
| Module | Description |
|:---|:---|
| **🛸 Cinematic Interfaces** | Extreme glassmosphism UI built intricately using Tailwind CSS v4 and Framer Motion micro-interactions |
| **🤖 Integrated AI Assistant** | Custom-built chatbot assistant bridging the gap between portfolio analytics and GPT-driven conversations |
| **💼 Professional Showcase** | Detailed renderings for comprehensive Enterprise applications ranging from GymFlow to the Smart HR Analytics Engine |
| **📱 Fully Responsive**| Optimized layout grids automatically restructuring for Mobile, Tablet, and Desktop environments |
| **🔬 Research Showcase** | Dedicated analytical breakdown of AI/ML research contributions and algorithmic sub-system tracking |

---

## 🛠 Tech Stack

### Frontend & Core Design
| Technology | Purpose |
|:---|:---|
| React.js 19 | Complex UI Interfaces, DOM Routing, and Section Renderings |
| Tailwind CSS | Premium Glassmorphic Styling Elements & Fast Layout Prototypes |
| Framer Motion | Specialized Scroll Reveal Triggers & Fluid Physics mechanics |
| Vite | Instant HMR Bundling and Static Delivery compilation |

### Backend Logic
| Technology | Purpose |
|:---|:---|
| Node.js & Express | Core local server operations & API logic routing layer |
| OpenAI API | NLP capabilities for the local portfolio Chatbot interaction |
| Nodemailer | Secure communication email pipeline directly connecting client forms |

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** v18+ — [Download](https://nodejs.org/)

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Srisajeenthran/Sris-Portfolio.git
cd Portfolio
```

### 2️⃣ Start the Core Backend
```bash
cd server
npm install
npm start
```

### 3️⃣ Start the Frontend
In a new terminal:
```bash
cd client
npm install
npm run dev
```

> [!IMPORTANT]
> The backend server runs by default on port `5000` while Vite binds to port `5173`. Ensure `.env` is properly configured inside the `server/` directory with `SMTP_PASS` and valid OpenAI configuration keys.

---

## 📁 File Structure

```text
Portfolio/
├── README.md
├── client/                      # 🎨 React.js SPA & UI Dashboards
│   ├── package.json
│   ├── public/
│   │   ├── resume.pdf
│   │   └── projects/
│   └── src/
│       ├── components/          # Reusable JSX (Glassmorphism & Gradients)
│       ├── App.jsx              
│       └── main.jsx
│
└── server/                      # ⚙️ Express / Node Interactor Server
    ├── package.json
    └── server.js                # Core API Gateway & SMTP Integrations
```

---

## 🏗 System Architecture

```mermaid
graph TD
    User((Visitor / Recruiter)) -->|Browser Access| FE[Frontend: React 19 SPA]
    FE -->|Data Fetch & Form HTTP| BE[Backend: Core Node.js Server]

    subgraph 🔮 Portfolio UI Layer
        Hero(Hero Introduction) -.->|Scroll Context| About(Mission & Research)
        About -.->|Scroll Context| Skills(Competency Map)
        Skills -.->|Scroll Context| Projects(Showcase Grid)
    end
    
    FE <-->|User Engagement| Chatbot[🤖 AI Assistant Modal]
    Chatbot <-->|Conversational Streams| OpenAI[OpenAI GPT API]
    
    FE -->|Data Sync| BE
    BE <-->|Mail Service| Nodemailer[SMTP Gmail / Client Link]
```

---

## 🎨 Design System — "Cinematic Dark Aurora"

| Element | Implementation |
|:---|:---|
| **Background** | Clean pitch backgrounds integrating subtle noise textures and UI blur orbs |
| **Containers** | Translucent overlays with `backdrop-filter` for elevated glass styling (`GlowContainer.jsx`) |
| **Typography** | Minimalist readable fonts suited for modern contrast grids and variable tracking |
| **Animations** | Custom `RevealContainer.jsx` driving scroll-linked physics mapped heavily via Framer Motion |

---

<div align="center">

### Treating Intelligence as a Craft 🚀

**Srisajeenthran Sritharan — 2026**

Constructed with React, Node.js, and an eye for premium aesthetics.

</div>
