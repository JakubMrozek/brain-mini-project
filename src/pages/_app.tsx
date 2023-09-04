import { type AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { ChakraProvider } from '@chakra-ui/react'
import { IntlProvider } from 'react-intl'
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import { api } from '~/utils/api'
import { DB_CONFIG } from '~/utils/db'
import { DbProvider } from '~/context/db'

function App ({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const locale = router.locale ?? router.defaultLocale ?? 'en'

  const app = initializeApp(DB_CONFIG)
  const db = getDatabase(app)

  return (
    <DbProvider
      db={db}
    >
      <IntlProvider
        locale={locale}
      >
        <ChakraProvider>
          <Component
            {...pageProps}
          />
        </ChakraProvider>
      </IntlProvider>
    </DbProvider>
  )
}

export default api.withTRPC(App)
