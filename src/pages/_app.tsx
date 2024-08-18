import '~/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CartProvider } from '~/context/CartContext'

const queryClient = new QueryClient()

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
	require('../../mocks')
}

export default function App({ Component, pageProps }: AppProps) {
	return (
		<CartProvider>
			<QueryClientProvider client={queryClient}>
				<Component {...pageProps} />
			</QueryClientProvider>
		</CartProvider>
	)
}
