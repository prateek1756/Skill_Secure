# 🚀 Skill Secure - Internship Platform

**Skill Secure** is a modern, full-stack internship platform connecting students with verified companies for authentic internship opportunities. Built with React, TypeScript, and Vite, it features a beautiful UI with dark mode, advanced filtering, and AI-powered recommendations.

---

## ✨ Features

### 🎓 For Students
- **Smart Search & Filters** - Find internships by location, type, duration, and remote/onsite options
- **AI-Powered Recommendations** - Get personalized internship suggestions with match scores
- **Quick Apply** - One-click application with resume upload and cover letter
- **Application Tracker** - Monitor application status (Pending, Shortlisted, Rejected, Accepted)
- **Bookmarks** - Save interesting internships for later
- **Profile Progress** - Track profile completion with actionable suggestions
- **Career Roadmap** - Visualize your career path and skill development
- **Dark Mode** - Eye-friendly dark theme with smooth transitions

### 🏢 For Companies
- **Company Dashboard** - Manage posted jobs and view applicant statistics
- **KYC Verification** - Complete company verification with document upload
- **Post Internships** - Create detailed internship listings with requirements
- **Applicant Management** - Review applications with match scores and skill analysis
- **Trust Badge** - Verified companies get priority in search results

### 👨‍💼 For Admins
- **Admin Panel** - Comprehensive dashboard for platform management
- **Company Verification** - Review and approve company KYC submissions
- **Scam Reports** - Monitor and investigate fraud reports
- **Analytics** - Track platform statistics and user activity

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI library with hooks
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Beautiful, accessible components
- **Lucide React** - Modern icon library
- **Framer Motion** - Smooth animations
- **Sonner** - Toast notifications
- **next-themes** - Dark mode support

### Backend
- **Express.js** - Node.js web framework
- **Serverless HTTP** - Serverless deployment support

### Development Tools
- **SWC** - Fast TypeScript/JavaScript compiler
- **Prettier** - Code formatting
- **Vitest** - Unit testing
- **pnpm** - Fast, disk-efficient package manager

---

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Setup

1. **Clone the repository**
```bash
git clone <repository-url>
cd skill-bridge-main
```

2. **Install dependencies**
```bash
pnpm install
# or
npm install
```

3. **Set up environment variables**
Create a `.env` file in the root directory:
```env
# Add your environment variables here
VITE_API_URL=http://localhost:3000
```

4. **Start development server**
```bash
pnpm dev
# or
npm run dev
```

The application will be available at `http://localhost:8080`

---

## 🚀 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production (client + server) |
| `pnpm build:client` | Build client only |
| `pnpm build:server` | Build server only |
| `pnpm start` | Start production server |
| `pnpm test` | Run tests |
| `pnpm format.fix` | Format code with Prettier |
| `pnpm typecheck` | Check TypeScript types |

---

## 📁 Project Structure

```
skill-bridge-main/
├── client/                 # Frontend source code
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── Layout.tsx    # Main layout wrapper
│   │   ├── Header.tsx    # Navigation header
│   │   └── ...
│   ├── pages/            # Page components
│   │   ├── Index.tsx     # Landing page
│   │   ├── Internships.tsx
│   │   ├── StudentDashboard.tsx
│   │   ├── CompanyDashboard.tsx
│   │   └── ...
│   ├── lib/              # Utilities and helpers
│   └── main.tsx          # App entry point
├── server/               # Backend source code
├── public/               # Static assets
├── shared/               # Shared types/utilities
├── .env                  # Environment variables
├── package.json          # Dependencies
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

---

## 🎨 Key Components

### Student Features
- **StudentDashboard** - Personal dashboard with stats and recommendations
- **Internships** - Browse and search internship listings
- **SavedInternships** - View bookmarked opportunities
- **ApplicationTracker** - Track application status
- **ProfileProgress** - Profile completion tracker
- **CareerRoadmap** - Interactive career path visualization

### Company Features
- **CompanyDashboard** - Manage jobs and view analytics
- **PostInternship** - Create new internship listings
- **CompanyKYC** - Complete verification process
- **CompanyProfileSettings** - Manage company profile

### Shared Components
- **QuickApplyModal** - Fast application submission
- **SearchBar** - Advanced search with filters
- **DashboardStats** - Animated statistics cards
- **AIRecommendations** - Personalized suggestions
- **NotificationBell** - Real-time notifications

---

## 🌙 Dark Mode

Skill Secure features a beautiful dark mode with:
- Smooth theme transitions
- Persistent theme preference (localStorage)
- System preference detection
- Optimized color palette for readability

Toggle dark mode using the theme button in the header.

---

## 🔐 Authentication Flow

1. **Signup** - Create account (Student/Company/Admin)
2. **Login** - Authenticate with credentials
3. **Dashboard** - Role-based dashboard redirect
4. **Logout** - Clear session and return to login

---

## 📱 Responsive Design

Skill Secure is fully responsive with:
- Mobile-first approach
- Breakpoints: `sm`, `md`, `lg`, `xl`, `2xl`
- Collapsible sidebars on mobile
- Touch-friendly UI elements
- Optimized layouts for all screen sizes

---

## 🚧 Deployment

### Build for Production
```bash
pnpm build
```

### Deploy to Netlify
The project includes `netlify.toml` configuration:
```bash
# Deploy using Netlify CLI
netlify deploy --prod
```

### Deploy to Other Platforms
The built files will be in:
- Client: `dist/spa/`
- Server: `dist/server/`

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) - Beautiful component library
- [Lucide](https://lucide.dev/) - Icon library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vite](https://vitejs.dev/) - Next-generation frontend tooling

---

## 📞 Support

For support, email support@skillbridge.com or open an issue on GitHub.

---

**Built with ❤️ by the Skill Secure Team**
