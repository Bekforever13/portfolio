import React from 'react'
import './index.scss'

type TProps = {
  letterClass: string
  strArray: string[]
  idx: number
}

const AnimatedLetters: React.FC<TProps> = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((char: any, i: number) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  )
}
export { AnimatedLetters }
