import React from 'react'
import Hero from './Hero'
import Features from './Features'
import HowItWorks from './HowItWorks'
import Testimonials from './Testimonials'
import CallToAction from './CallToAction'

function Home() {
  return (
    <div>
      <Hero></Hero>
      <Features></Features>
      <HowItWorks></HowItWorks>
      <Testimonials></Testimonials>
      <CallToAction></CallToAction>
    </div>
  )
}

export default Home
