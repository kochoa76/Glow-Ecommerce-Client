import React from 'react'
import '../containers/App.css'
const About = () => {
  return (
    <div className="about-page">
      <h1 className="about-title"> About Glow </h1>
        <p className="about-description"> Glow is an Ecommerce app suited for individuals looking for non toxic makeup products on the market. Glow offers products made without a long, ever-evolving list of ingredients linked to harmful health effects from hormone disruption, cancer, and plain-old skin irritation. Glow offers products free from parabens, phthalates, PEGs, ethanolamines, chemical sunscreens, synthetic fragrance, BHT, BHA. </p>
        <h3 className="about-button"> Check out our products <a href="/makeup"> here </a></h3>
    </div>
  )
}
export default About
