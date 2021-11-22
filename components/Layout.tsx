import Header from '../components/Header'
import styles from '../styles/Home.module.css'

import { createTheme } from '@mui/material/styles'
import { green, deepOrange } from '@mui/material/colors'
import { ThemeProvider } from '@mui/material/styles'
import { ReactNode } from 'react'

import Head from 'next/head'
import { Container } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: green[600],
    },
    secondary: deepOrange
  }
})

interface children {
  children: ReactNode,
  title: string
}

const Layout = ({children, title}: children) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <ThemeProvider theme={theme}>
        <div style={{zIndex: 999, position: 'relative', marginBottom: 10}}>
          <Header />
        </div>
        <Container maxWidth="lg">
          {children}
        </Container>
      </ThemeProvider>
    </>
  )
}

export default Layout