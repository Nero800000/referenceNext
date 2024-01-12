import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AppProvider } from '@/src/data/context/appContext'
import { AuthProvider } from '@/src/data/context/authContext'
//<Component {...pageProps} />
export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
    </AuthProvider>
  )
}
