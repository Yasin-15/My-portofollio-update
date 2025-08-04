import { ThemeProvider } from '../src/contexts/ThemeContext';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import '../src/index.css';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
        <Navbar />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}