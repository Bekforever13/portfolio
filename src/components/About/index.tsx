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
            I'm very ambitious fron-end developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p>
            I'm quietly confident, naturally curious and perpetually working on
            improving my chops one design problem at a time
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, father of a beatiful daughter, a sports fanatic, photography
            enthusiast and thech-obsessed
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
