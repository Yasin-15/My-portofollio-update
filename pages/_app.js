import '../src/index.css';
import { ThemeProvider } from '../src/contexts/ThemeContext';
import Layout from '../src/components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;