# Yaasiin Dev Portfolio - Next.js

A modern, responsive portfolio website built with Next.js, showcasing skills, projects, and experience as a full-stack developer.

## 🚀 Features

- **Next.js 14** - Latest version with App Router support
- **Responsive Design** - Works perfectly on all devices
- **Dark Mode** - Toggle between light and dark themes
- **Framer Motion** - Smooth animations and transitions
- **Tailwind CSS** - Modern utility-first CSS framework
- **SEO Optimized** - Meta tags and structured data
- **Performance Optimized** - Fast loading and smooth interactions

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons (Feather Icons)
- **Language:** JavaScript/JSX

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Yaasiin-15/portfolio-nextjs.git
cd portfolio-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── pages/
│   ├── _app.js          # App wrapper with global providers
│   ├── _document.js     # HTML document structure
│   ├── index.js         # Home page
│   ├── about.js         # About page
│   ├── skills.js        # Skills page
│   ├── projects.js      # Projects page
│   └── contact.js       # Contact page
├── src/
│   ├── components/      # Reusable components
│   ├── contexts/        # React contexts (Theme)
│   └── index.css        # Global styles
├── public/              # Static assets
└── tailwind.config.js   # Tailwind configuration
```

## 🎨 Customization

### Colors
Update the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Content
- Update personal information in each page component
- Replace profile image in `public/profile.jpg`
- Update social links and contact information
- Modify projects data in `pages/projects.js`

### Styling
- Global styles: `src/index.css`
- Component-specific styles: Tailwind classes in components
- Dark mode: Handled by ThemeContext

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify:** Build command: `npm run build`, Publish directory: `out`
- **GitHub Pages:** Use `next export` for static export

## 📱 Pages

- **Home** - Hero section with introduction and key stats
- **About** - Detailed information, experience, and education
- **Skills** - Technical skills with progress bars
- **Projects** - Portfolio projects with filtering
- **Contact** - Contact form and information

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment-specific variables:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### SEO
Update meta tags in each page's `Head` component and in `pages/_document.js`.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

- **Email:** yaasiinmohamed990@gmail.com
- **LinkedIn:** [Yaasiin Mohamuud](https://linkedin.com/in/yaasiin-mohamuud)
- **GitHub:** [Yaasiin-15](https://github.com/Yaasiin-15)

---

Made with ❤️ by Yaasiin Dev