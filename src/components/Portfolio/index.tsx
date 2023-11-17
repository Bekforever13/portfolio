import React, { useState, useEffect } from 'react'
import './index.scss'
import { AnimatedLetters } from '../AnimatedLetters'
import { PacmanLoader } from 'react-spinners'
import portfolioData from '../Data/portfolio.json'

const Portfolio: React.FC = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const renderPortfolio = (portfolio: any) => {
    return (
      <div className="images-container">
        {portfolio.map((port: any, idx: number) => {
          return (
            <div className="image-box" key={idx}>
              <img
                src={port.cover}
                alt="portfolio"
                className="portfolio-image"
              />
              <div className="content">
                <p className="title">{port.title}</p>
                <h4 className="description">{port.description}</h4>
                <div className="btns">
                  <button className="btn">View</button>
                  <button className="btn" onClick={() => window.open(port.url)}>
                    Demo
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Portfolio'.split('')}
            idx={15}
          />
        </h1>
        <div>{renderPortfolio(portfolioData.portfolio)}</div>
      </div>
      <PacmanLoader className="loader" color="#ffd700" />
    </>
  )
}
export { Portfolio }
