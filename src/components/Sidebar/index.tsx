import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import React, { useState } from 'react'
import { MdAssuredWorkload, MdClose } from 'react-icons/md'
import {
  AiFillHome,
  AiFillInfoCircle,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
} from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BsTelegram } from 'react-icons/bs'

const Sidebar: React.FC = () => {
  const [showNav, setShowNav] = useState(false)

  const onClickHamburger = () => setShowNav(true)
  const onCloseHamburger = () => setShowNav(false)

  return (
    <div className="nav-bar">
      <Link onClick={onCloseHamburger} className="logo" to="/">
        <h1>Bekpolat</h1>
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink onClick={onCloseHamburger} end to="/">
          <AiFillHome />
        </NavLink>
        <NavLink
          onClick={onCloseHamburger}
          end
          to="/about"
          className="about-link"
        >
          <AiFillInfoCircle />
        </NavLink>
        <NavLink
          onClick={onCloseHamburger}
          end
          to="/portfolio"
          className="portfolio-link"
        >
          <MdAssuredWorkload />
        </NavLink>
        <NavLink
          onClick={onCloseHamburger}
          end
          to="/contact"
          className="contact-link"
        >
          <AiOutlineMail />
        </NavLink>
        <MdClose
          color="#ffd700"
          size="24"
          onClick={onCloseHamburger}
          className="close-icon"
        />
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
      <GiHamburgerMenu
        onClick={onClickHamburger}
        className="hamburger-icon"
        color="#ffd700"
        size="24"
      />
    </div>
  )
}
export { Sidebar }
