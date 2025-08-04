import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Professional portfolio showcasing skills, projects, and experience as a full-stack developer"
        />
        <meta name="keywords" content="developer, portfolio, react, javascript, full-stack, web development" />
        <meta name="author" content="Yaasiin Mohamuud" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-portfolio.com/" />
        <meta property="og:title" content="Yaasiin Mohamuud - Full Stack Developer" />
        <meta property="og:description" content="Professional portfolio showcasing skills, projects, and experience as a full-stack developer" />
        <meta property="og:image" content="/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://your-portfolio.com/" />
        <meta property="twitter:title" content="Yaasiin Mohamuud - Full Stack Developer" />
        <meta property="twitter:description" content="Professional portfolio showcasing skills, projects, and experience as a full-stack developer" />
        <meta property="twitter:image" content="/og-image.jpg" />
        
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Fira+Code:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}