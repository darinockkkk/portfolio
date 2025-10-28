# Daryna Darii - Portfolio Website 🚀

A modern, interactive developer portfolio featuring an AI-powered chat assistant, built with Next.js, TailwindCSS, and Framer Motion.

## ✨ Features

- **Modern Design**: Dark theme with glassmorphism effects and smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **AI Chat Assistant**: Interactive "Ask Daryna AI" widget that answers questions about experience and projects
- **Smooth Animations**: Beautiful transitions and hover effects using Framer Motion
- **SEO Optimized**: Complete metadata and Open Graph tags for social sharing
- **Contact Form**: Integrated contact form for easy communication

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: [TailwindCSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **AI**: OpenAI API (gpt-4o-mini)
- **Deployment**: [Vercel](https://vercel.com/)

## 📦 Installation

1. **Clone the repository**:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. **Install dependencies**:
```bash
npm install
```

3. **Set up environment variables** (Optional):
```bash
cp .env.example .env.local
```
Then add your OpenAI API key to `.env.local`:
```
OPENAI_API_KEY=your_api_key_here
```

> **Note**: The AI chat widget will work without an API key using predefined fallback responses.

4. **Run the development server**:
```bash
npm run dev
```

5. **Open your browser**:
Visit [http://localhost:3000](http://localhost:3000) to see your portfolio!

## 🎨 Customization

### Update Your Information

Edit `/src/data/profileData.json` to update:
- Personal information
- Work experience
- Projects
- Skills
- Social links

### Modify Colors

The site uses purple and teal as accent colors. To change them, update the gradient classes in:
- `/src/app/globals.css`
- Component files (search for `from-purple-500 to-teal-500`)

### Add Your Photo

Replace the emoji in `/src/components/About.js` with your profile image:
```jsx
<img 
  src="/your-photo.jpg" 
  alt="Your Name"
  className="w-full h-full object-cover"
/>
```

### Customize AI Responses

Edit `/src/app/api/chat/route.js` to modify:
- System prompt
- Fallback responses
- Response categories

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com/)
3. Add your `OPENAI_API_KEY` as an environment variable (optional)
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/portfolio)

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── chat/
│   │   │       └── route.js       # AI chat API endpoint
│   │   ├── globals.css            # Global styles
│   │   ├── layout.js              # Root layout with metadata
│   │   └── page.js                # Main page component
│   ├── components/
│   │   ├── Navbar.js              # Navigation with smooth scroll
│   │   ├── Hero.js                # Hero section with animations
│   │   ├── About.js               # About section
│   │   ├── Experience.js          # Work experience timeline
│   │   ├── Projects.js            # Projects showcase
│   │   ├── Skills.js              # Skills grid
│   │   ├── Contact.js             # Contact form
│   │   └── ChatWidget.js          # AI chat widget
│   └── data/
│       └── profileData.json       # Your portfolio data
├── public/                         # Static assets
└── package.json
```

## 🎯 Features Breakdown

### 1. Hero Section
- Animated gradient background
- Floating particles
- Waving hand animation
- Call-to-action buttons with smooth scroll

### 2. About Section
- Profile image/avatar
- Feature cards highlighting key strengths
- Fade-in animations on scroll

### 3. Experience Section
- Timeline layout
- Hover effects on cards
- Tech stack tags
- Alternating card positions

### 4. Projects Section
- Project showcase cards
- Tech stack badges
- Hover overlays with action buttons
- Links to live demos and repositories

### 5. Skills Section
- Categorized skill grid
- Animated skill badges
- Icon indicators for each category
- Smooth hover transitions

### 6. Contact Section
- Functional contact form
- Social media links
- Form validation
- Success/loading states

### 7. AI Chat Widget
- Floating chat button
- Expandable chat window
- Real-time responses
- Fallback responses when API is unavailable

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🌟 Tips

1. **Add Your Resume**: Replace the resume link in `Hero.js` with your actual resume URL
2. **Update Social Links**: Modify `profileData.json` with your real social media profiles
3. **Add Project Images**: Place project screenshots in `/public/projects/` and update paths in `profileData.json`
4. **Customize Chat**: Tailor the AI responses to match your personality and information
5. **SEO**: Update metadata in `layout.js` for better search engine visibility

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from [Linear](https://linear.app/), [Vercel](https://vercel.com/), and [Anthropic](https://anthropic.com/)
- Icons by [Lucide](https://lucide.dev/)
- Fonts by [Google Fonts](https://fonts.google.com/)

---

Built with ❤️ by Daryna Darii
