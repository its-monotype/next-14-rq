'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';
import { useState } from 'react';
import { Reshaped } from 'reshaped';
import 'reshaped/themes/reshaped/theme.css';

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration>
        <Reshaped theme="reshaped" defaultColorMode="dark">
          {children}
        </Reshaped>
      </ReactQueryStreamedHydration>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}
