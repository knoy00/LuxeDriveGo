import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

function Home() {
  return (
    <div>
      <Navbar login={"Log in"} signup={"Sign up"} help={"Help"}/>
      <Hero />
    </div>
  )
}

export default Home
