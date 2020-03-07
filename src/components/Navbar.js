import React, { useState } from "react"
import { Link } from "gatsby"
import styles from "../css/navbar.module.css"
import { MdMenu } from "react-icons/md"
import socialLinks from "../constants/Links"
import logo from "../images/placeholderLogo.jpg"

const Navbar = () => {
  const [isOpen, setNavbar] = useState(false)
  const toggleNav = () => {
    setNavbar(isOPen => !isOpen)
  }
  return (
    <nav className={styles.navbar}>
      <div classname={styles.nav}>
        <div className={styles.navHeader}>
          <img className={styles.logoImg} src={logo} alt="lawn logo" />
          <button className={styles.logoBtn} type="button" onClick={toggleNav}>
            <MdMenu className={styles.logoIcon} />
          </button>
        </div>
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {socialLinks.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path}>{item.text}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
