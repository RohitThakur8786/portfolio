import React from 'react'
import { Header , Footer } from '.';
import Navbar from './Navbar/Navbar';

const layout = ({children}) => {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default layout
