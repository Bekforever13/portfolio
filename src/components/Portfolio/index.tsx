import React, { useState, useEffect } from 'react'
import './index.scss'
import { AnimatedLetters } from '../AnimatedLetters'
import { PacmanLoader } from 'react-spinners'
import 'react-photo-view/dist/react-photo-view.css'
import { Projects } from './Projects'
import { TData } from './Portfolio.types'
import { collection, getDocs } from 'firebase/firestore/lite'
import { db } from '../../firebase'

const Portfolio: React.FC = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [portfolio, setPortfolio] = useState<TData>()

  const getPortfolio = async () => {
    const querySnapshot = await getDocs(collection(db, 'portfolio'))
    setPortfolio(querySnapshot.docs.map((doc) => doc.data()) as TData)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  console.log(portfolio)

  useEffect(() => {
    getPortfolio()
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
        {portfolio && <Projects data={portfolio} />}
      </div>
      <PacmanLoader className="loader" color="#ffd700" />
    </>
  )
}
export { Portfolio }
