import React from 'react'
import { TData } from './Portfolio.types'

const Projects: React.FC<{ data: TData }> = ({ data }) => {
  return (
    <div className="images-container">
      {data?.map((port, idx) => {
        return (
          <div className="image-box" key={idx}>
            <img
              src={port.image}
              loading="lazy"
              alt="portfolio"
              className="portfolio-image"
            />
            <div className="content">
              <p className="title">{port.name}</p>
              <h4 className="description">{port.description}</h4>
              <button className="btn" onClick={() => window.open(port.url)}>
                View
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export { Projects }
