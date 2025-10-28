## 📝 Quick Start

npm run dev

## ✅ What's Been Built

Your portfolio includes:
- ✨ **Hero Section** - Animated intro with gradient background and floating particles
- 👤 **About Section** - Personal introduction with feature cards
- 💼 **Experience Section** - Timeline of your work history
- 🎨 **Projects Section** - Showcase of your best work
- 🛠️ **Skills Section** - Categorized tech stack display
- 📧 **Contact Section** - Working contact form with social links
- 🤖 **AI Chat Widget** - Interactive assistant that answers questions about you
- 🎯 **Smooth Navigation** - Fixed navbar with scroll progress indicator

## 🎨 Customization Checklist

### 1. Update Personal Information

Edit `/src/data/profileData.json` and update:
- [ ] Name, title, and tagline
- [ ] Email address and location
- [ ] About section text
- [ ] Social media links (LinkedIn, GitHub)
- [ ] Work experience details
- [ ] Project descriptions and links
- [ ] Skills lists

### 2. Add Your Images

**Profile Photo:**
- Add your photo to `/public/profile.jpg`
- Update `/src/components/About.js` line ~25 to use your image

**Project Screenshots:**
- Add images to `/public/projects/`
- Update image paths in `profileData.json`

### 3. Update Links

**Resume:**
- Add your resume PDF to `/public/resume.pdf`
- Update line 117 in `/src/components/Hero.js` to link to it

**Social Links:**
- Update all links in `profileData.json`
- They're used in Contact and Hero sections

### 4. Configure AI Chat (Optional)

The chat works without configuration using fallback responses. To enable AI:

1. Get an OpenAI API key from https://platform.openai.com/api-keys
2. Create `.env.local` file:
```bash
cp .env.local.example .env.local
```
3. Add your key:
```
OPENAI_API_KEY=sk-your-key-here
```
4. Restart the dev server

### 5. Customize Colors (Optional)

Current theme uses **purple** and **teal**. To change:

**In `/src/app/globals.css`:**
- Update gradient colors (search for `purple` and `teal`)

**In components:**
- Search for `from-purple-500 to-teal-500`
- Replace with your preferred colors

### 6. Add Your Favicon

Replace `/src/app/favicon.ico` with your own icon

## 🚢 Deployment to Vercel

1. **Push to GitHub:**
```bash
git add .
git commit -m "Initial portfolio"
git push origin main
```

2. **Deploy on Vercel:**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Add environment variables (if using OpenAI):
     - Key: `OPENAI_API_KEY`
     - Value: Your OpenAI API key
   - Click "Deploy"

3. **Done!** Your site will be live at `your-project.vercel.app`

## 🔧 Development Commands

```bash
npm run dev    # Start development server (http://localhost:3000)
npm run build  # Build for production
npm run start  # Run production build locally
npm run lint   # Check for code issues
```

## 📱 Testing

Check your site on:
- [ ] Desktop browser (Chrome, Firefox, Safari)
- [ ] Mobile device (responsive design)
- [ ] Tablet (iPad, etc.)
- [ ] Different screen sizes using browser dev tools

## 🎯 Next Steps

1. **Customize your information** in `profileData.json`
2. **Add your photos** (profile + projects)
3. **Update all links** (resume, social media)
4. **Test the contact form** (currently a demo)
5. **Deploy to Vercel** for the world to see!

## 🐛 Common Issues

**Issue: AI chat not working**
- Solution: It works without API key using fallback responses. This is normal!

**Issue: Images not showing**
- Solution: Make sure images are in `/public/` folder and paths match

**Issue: Build fails**
- Solution: Run `npm install` to ensure all dependencies are installed

**Issue: Styles look wrong**
- Solution: Clear browser cache or do hard refresh (Cmd+Shift+R / Ctrl+Shift+R)

## 💡 Pro Tips

1. **Keep it updated**: Regularly update your projects and experience
2. **Track analytics**: Add Google Analytics or Vercel Analytics
3. **Custom domain**: Connect your own domain in Vercel settings
4. **Performance**: Images should be optimized (use WebP format)
5. **Accessibility**: Test with screen readers and keyboard navigation

## 📞 Need Help?

- Next.js Docs: https://nextjs.org/docs
- TailwindCSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/
- Vercel Support: https://vercel.com/support

---

**Built with ❤️ using:**
- Next.js 16
- TailwindCSS 4
- Framer Motion
- Lucide Icons
- OpenAI API

Ready to impress recruiters? Start customizing now! 🚀

