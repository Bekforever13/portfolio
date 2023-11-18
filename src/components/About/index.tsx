import React, { useState, useEffect } from 'react'
import './index.scss'
import { AnimatedLetters } from '../AnimatedLetters'
import html from '../../assets/images/logo1.png'
import css from '../../assets/images/logo2.png'
import js from '../../assets/images/logo3.png'
import react from '../../assets/images/react.png'
import typescript from '../../assets/images/ts.png'
import redux from '../../assets/images/redux.png'
import { PacmanLoader } from 'react-spinners'

const About: React.FC = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timer)
  }, [])
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'About me'.split('')}
              idx={15}
            />
          </h1>
          <p>
            Hello there! I'm <span className="my-name">Bekpolat</span>, a
            passionate and creative frontend developer with a keen eye for
            design and a love for crafting seamless user experiences. With a
            background in turning ideas into visually appealing and functional
            websites, I thrive on the challenge of bringing concepts to life in
            the digital world.
          </p>
          <p>
            I'm very ambitious fron-end developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p>
            I'm quietly confident, naturally curious and perpetually working on
            improving my chops one design problem at a time
          </p>
          <p>
            Thank you for visiting my website. Whether you're here to explore my
            portfolio, learn more about my skills, or discuss a potential
            collaboration, I'm excited to connect with you. Let's build
            something amazing together!
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <img src={html} alt="html" />
            </div>
            <div className="face2">
              <img src={css} alt="css" />
            </div>
            <div className="face3">
              <img src={js} alt="js" />
            </div>
            <div className="face4">
              <img src={react} width={150} alt="react" />
            </div>
            <div className="face5">
              <img src={redux} width={150} alt="redux" />
            </div>
            <div className="face6">
              <img src={typescript} width={180} alt="typescript" />
            </div>
          </div>
        </div>
      </div>
      <PacmanLoader className="loader" color="#ffd700" />
    </>
  )
}
export { About }
