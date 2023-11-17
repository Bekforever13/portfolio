import React, { useEffect, useRef, useState } from 'react'
import { PacmanLoader } from 'react-spinners'
import './index.scss'
import { AnimatedLetters } from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact: React.FC = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef<HTMLFormElement>(null)

  const sendEmail = (e: any) => {
    e.preventDefault()
    console.log(refForm.current)
    if (refForm.current) {
      emailjs
        .sendForm(
          'service_w9yjw4i',
          'template_1i9m222',
          refForm.current,
          'wRCEtYzU9jB8yxwJO'
        )
        .then(
          () => toast.success('Message successfully sent!'),
          () => toast.error('Failed to send the message, please try again.')
        )
        .finally(() => refForm.current?.reset())
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={'Contact me'.split('')}
              letterClass={letterClass}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required />
                </li>
                <li>
                  <input type="submit" className="flat-button" value={'SEND'} />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Nukus
          <br />
          Republic of Karakalpakstan
          <br />
          <span>aydarbaev.bekpolat@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[42.437053, 59.638013]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[42.437053, 59.638013]}>
              <Popup>I'm here :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <PacmanLoader className="loader" color="#ffd700" />
      <ToastContainer />
    </>
  )
}
export { Contact }
