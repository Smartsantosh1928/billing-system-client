import React from 'react'
import NavBar from './NavBar'
import Body from './Body'
import Features from './Features';
import Payment from './Payment';
import Footer from './Footer'

const Home = () => {
  return (
    <>
    <section id='nav' className='scroll-smooth transform duration-300'>
      <NavBar/>
    </section>
    <section id='body' className='scroll-smooth'>
      <Body/>
    </section>
    <section id='features' className='scroll-smooth'>
      <Features/>
    </section>
    <section id='payment' className='scroll-smooth'>
      <Payment/>
    </section>
    <Footer/> 
    </>
  )
}

export default Home