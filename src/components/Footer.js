import React from "react"
// import theLinks from "../constants/Links"
// import { Link } from "gatsby"
import styles from "../css/footer.module.css"
import SocialIcons from "../constants/FooterIcons"
import { Example} from "./SocialIcons"

const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      {/* <div className={styles.theLinks}>
        {theLinks.map((item, index) => {
          return (
            <Link key={index} to={item.path}>
              {item.text}
            </Link>
          )
        })}
      </div> */}
      <div className={styles.SocialIconsWrapper}>
        {SocialIcons.map((item, index) => {
          return <Example data={item} key={index} />
        })}
      </div>
    </footer>
  )
}
export default Footer
