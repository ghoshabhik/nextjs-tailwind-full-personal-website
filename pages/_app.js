import {ThemeProvider} from 'next-themes'

import Container from '../components/layout/Container'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return(
  <>
    <ThemeProvider attribute="class" defaultTheme='light'>
      <Container> 
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  </>)
}

export default MyApp
