# Portfolio Website

A modern, responsive portfolio website showcasing the work and skills of Srisajeenthran Sritharan. Built with React, Vite, Tailwind CSS, and Framer Motion, featuring an AI-powered chatbot assistant.

## 🚀 Features

- **Modern UI/UX**: Beautiful, responsive design with smooth animations
- **AI Chatbot**: Interactive assistant powered by OpenAI API
- **Contact Form**: Email integration for direct communication
- **Project Showcase**: Detailed project cards with live demos and GitHub links
- **Skills & Experience**: Visual timeline and skill displays
- **Performance Optimized**: Fast loading times and smooth interactions

## 📁 Project Structure

```
Portfolio/
├── client/          # React frontend application
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/      # Static assets
│   └── package.json
└── server/          # Express backend API
    ├── server.js    # API endpoints
    └── package.json
```

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### Backend
- **Express.js** - Web framework
- **OpenAI API** - AI chatbot integration
- **Nodemailer** - Email service
- **CORS** - Cross-origin resource sharing

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Portfolio
   ```

2. **Install client dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Install server dependencies**
   ```bash
   cd ../server
   npm install
   ```

4. **Configure environment variables**

   Create a `.env` file in the `server/` directory:
   ```env


   # Server Port (optional)
   PORT=5000
   ```

## 🚀 Running the Application

### Development Mode

1. **Start the backend server**
   ```bash
   cd server
   npm start
   ```
   Server will run on `http://localhost:5000`

2. **Start the frontend dev server** (in a new terminal)
   ```bash
   cd client
   npm run dev
   ```
   Frontend will run on `http://localhost:5173`

### Production Build

1. **Build the frontend**
   ```bash
   cd client
   npm run build
   ```

2. **The built files will be in `client/dist/`**

## 📝 Available Scripts

### Client
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Server
- `npm start` - Start the Express server

## 🎨 Customization

### Adding Your Profile Image
Place your profile photo at `client/public/profile.jpg`

### Adding Project Images
Place project screenshots in `client/public/projects/`:
- `interview-suite.jpg`
- `tryfit.jpg`
- `fit-connect.jpg`
- `food-delivery.jpg`

### Updating Resume
Replace `client/public/resume.pdf` with your resume

### Modifying Content
Edit the component files in `client/src/components/`:
- `Hero.jsx` - Hero section
- `About.jsx` - About section
- `Skills.jsx` - Skills display
- `Experience.jsx` - Work experience
- `Projects.jsx` - Project showcase
- `Contact.jsx` - Contact form

## 🔧 Configuration

### Email Setup (Gmail Example)

1. Enable 2-Step Verification on your Google account
2. Generate an App Password:
   - Go to Google Account → Security → 2-Step Verification → App passwords
   - Create a new app password for "Mail"
3. Use the generated password in `SMTP_PASS`

### OpenAI API Setup

1. Sign up at [OpenAI Platform](https://platform.openai.com/)
2. Create an API key
3. Add credits to your account
4. Add the key to `server/.env`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Srisajeenthran Sritharan**
- Email: srisajeenthran00@gmail.com
- GitHub: [@Srisajeenthran](https://github.com/Srisajeenthran)
- LinkedIn: [srisajeenthran-sritharan](https://www.linkedin.com/in/srisajeenthran-sritharan)

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons by [Lucide](https://lucide.dev/)

