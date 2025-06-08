import type { AppProps } from 'next/app';
import { TestProvider } from '../app/contexts/TestContext';
import '../app/App.css';
import '../app/index.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TestProvider>
      <Component {...pageProps} />
    </TestProvider>
  );
}

export default MyApp; 