import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import { AnimatedLetters } from '../AnimatedLetters'
import image from '../../assets/images/me.jpg'
import { PacmanLoader } from 'react-spinners'

const Home: React.FC = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = 'ekpolat'.split('')
  const jobArray = 'Frontend developer'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'</span>
            <span className={`${letterClass} _14`}>m</span>
            <span className="logo_b"> B</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>React, TypeScript, JavaScript</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <div className="logo-container">
          <img src={image} alt="photo" className="solid-logo" />
        </div>
      </div>
      <PacmanLoader className="loader" color="#ffd700" />
    </>
  )
}
export { Home }
