import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import HeroSecond from './HeroSecond'
import HeroThird from './HeroThird'
import HeroFourth from './HeroFourth'
import HeroFifth from './HeroFifth'
import Timeline from './Timeline'
import HeroSix from './HeroSix'
import HeroSeven from './HeroSeven'
import HeroEight from './HeroEight'
import Footer from './Footer'
import { Confirm } from '../pages'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <HeroSecond />
        <HeroThird />
        <HeroFourth />
        <HeroFifth />
        <Timeline />
        <HeroSix />
        <HeroSeven />
        <HeroEight />
        <Footer />
        {/* <Confirm /> */}
    </div>
  )
}

export default Home