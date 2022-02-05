import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Body from '../components/Body'
import Work from '../components/Work'
import Moonlaunch from '../components/Moonlaunch'
import Orbiter from '../components/Orbiter'
import Project from '../components/Project'
import Event from '../components/Event'
import Cards from '../components/Cards'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div className=''>
            <Navbar />
            <Header />
            <Body />
            <hr />
            <Work />
            <Moonlaunch />
            <Orbiter />
            <Project />
            <Event />
            <Cards />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
