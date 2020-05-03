import React from "react"
import Nav from './Nav';
import Footer from './Footer';
import { Container } from '@material-ui/core'


const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Container>
          {children}
        </Container>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
