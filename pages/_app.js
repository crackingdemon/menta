import '../styles/globals.css'
import Head from 'next/head'
import { Header, Footer } from '../components'
import { SessionProvider } from "next-auth/react"
import Script from 'next/script'


export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <div id="g_id_onload"
        data-client_id="YOUR_GOOGLE_CLIENT_ID"
        data-auto_select="true"
        data-login_uri="/login">
      </div>
      <div className='overflow-x-hidden'>
        <Head>
          <title>The Menta</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta property="og:title" content="The Menta" key="ogtitle" />
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </SessionProvider>
  )
}


// function App({ Component, pageProps }) {
//   return (
//     <Provider session={pageProps.session}>
//       <div className='overflow-x-hidden'>
//         <Head>
//           <title>The Menta</title>
//           <link rel="icon" href="/favicon.ico" />
//           <meta name="viewport" content="width=device-width, initial-scale=1" />
//           <meta charSet="utf-8" />
//           <meta property="og:title" content="The Menta" key="ogtitle" />
//         </Head>
//         <Header />
//         <Component {...pageProps} />
//         <Footer />
//       </div>
//     </Provider>
//   )
// }

// export default App
