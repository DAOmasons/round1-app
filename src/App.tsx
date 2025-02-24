import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/dates/styles.css';

import { Layout } from './layout/Layout';
import { WagmiProvider } from 'wagmi';
import { config } from './utils/config';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { TxProvider } from './contexts/TxContext';
import { ClientRoutes } from './routes';
import { GlobalStateProvider } from './contexts/GlobalState';
import { VoteProvider } from './contexts/VoteContext';
import { ADDR } from './constants/addresses';

const queryClient = new QueryClient();
export default function App() {
  return (
    <BrowserRouter>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <GlobalStateProvider>
            <Layout>
              <TxProvider>
                <ClientRoutes />
              </TxProvider>
            </Layout>
          </GlobalStateProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </BrowserRouter>
  );
}
