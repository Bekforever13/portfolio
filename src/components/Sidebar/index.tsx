import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import React from 'react'
import {
  AiFillEye,
  AiFillHome,
  AiFillInfoCircle,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
} from 'react-icons/ai'
import { BsTelegram } from 'react-icons/bs'

const Sidebar: React.FC = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <h1>Bekpolat</h1>
      </Link>
      <nav>
        <NavLink end to="/">
          <AiFillHome />
        </NavLink>
        <NavLink end to="/about" className="about-link">
          <AiFillInfoCircle />
        </NavLink>
        <NavLink end to="/portfolio" className="portfolio-link">
          <AiFillEye />
        </NavLink>
        <NavLink end to="/contact" className="contact-link">
          <AiOutlineMail />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a href="https://www.instagram.com/bekforever13/" target="_blank">
            <AiOutlineInstagram />
          </a>
        </li>
        <li>
          <a href="https://t.me/Bekforever" target="_blank">
            <BsTelegram />
          </a>
        </li>
        <li>
          <a href="https://github.com/Bekforever13" target="_blank">
            <AiOutlineGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/bekpolat-aydarbaev-037325274/"
            target="_blank"
          >
            <AiOutlineLinkedin />
          </a>
        </li>
      </ul>
    </div>
  )
}
export { Sidebar }
