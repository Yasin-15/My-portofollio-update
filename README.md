# Modern Portfolio Website

A modern, responsive personal portfolio website built with React.js, featuring smooth animations, dark/light mode toggle, and SEO optimization.

## 🚀 Features

- **Modern Design**: Clean, minimalist design with professional typography
- **Responsive**: Fully responsive across all devices and screen sizes
- **Dark/Light Mode**: Toggle between dark and light themes with localStorage persistence
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **Performance Optimized**: Lazy loading for components and images
- **Accessibility**: ARIA labels and keyboard navigation support

## 📋 Sections

- **Home**: Hero section with introduction and call-to-action
- **About**: Personal information, experience timeline, and background
- **Skills**: Technical skills with progress bars and technology grid
- **Projects**: Project showcase with filtering and detailed information
- **Contact**: Contact form and contact information

## 🛠️ Tech Stack

- **React.js**: Frontend framework
- **React Router**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Icons**: Icon library
- **React Helmet Async**: SEO management

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.js       # Navigation component
│   ├── Footer.js       # Footer component
│   └── LoadingSpinner.js # Loading animation
├── contexts/           # React contexts
│   └── ThemeContext.js # Theme management
├── pages/              # Page components
│   ├── Home.js         # Home page
│   ├── About.js        # About page
│   ├── Skills.js       # Skills page
│   ├── Projects.js     # Projects page
│   └── Contact.js      # Contact page
├── App.js              # Main app component
├── index.js            # Entry point
└── index.css           # Global styles
```

## 🎨 Customization

### Personal Information

Update the following files with your information:

1. **Personal Details**: Update name, email, phone, location in:
   - `src/pages/Home.js`
   - `src/pages/About.js`
   - `src/pages/Contact.js`
   - `src/components/Footer.js`

2. **Social Links**: Update social media URLs in:
   - `src/pages/Home.js`
   - `src/pages/Contact.js`
   - `src/components/Footer.js`

3. **Projects**: Update project information in `src/pages/Projects.js`

4. **Skills**: Update skills and experience in:
   - `src/pages/Skills.js`
   - `src/pages/About.js`

### Styling

- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Fonts**: Update font families in `tailwind.config.js`
- **Animations**: Customize animations in `src/index.css`

### SEO

Update meta tags in:
- `public/index.html`
- Each page component using `react-helmet-async`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌙 Dark Mode

The dark mode toggle:
- Persists user preference in localStorage
- Respects system preference on first visit
- Smoothly transitions between themes

## ⚡ Performance Features

- **Lazy Loading**: Components are loaded on demand
- **Image Optimization**: Lazy loading for project images
- **Code Splitting**: Automatic code splitting with React Router
- **Minimal Bundle**: Optimized dependencies

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing the portfolio, please open an issue on GitHub.

---

Made with ❤️ using React and Tailwind CSS 