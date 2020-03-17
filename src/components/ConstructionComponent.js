import React from "react"
// import {Link} from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Banner from "../components/Banner"
import constructionImg from "../images/constructionImg.png"
import styles from "../css/underConstruction.module.css"

const ConstructionComponent = () => {
  return (
    <div className={styles.constructionPageWrapper}>
      <div className={styles.Banner}>
        <Banner
          title="Under Construction" info="Please be patient with us while our
          business grows.We Hope that you will vist this page again soon!"
        > <img src={constructionImg} alt="page under construction" /></Banner>
      </div>
      {/* <div className={styles.imageContainer}>
      <img src={constructionImg} alt="page under construction" />
      </div> */}
      <div className={styles.buttonWrapper}>
        <AniLink fade type="button" to='/' className="btn-white">
          Go Back
        </AniLink>
      </div>
    </div>
  )
}
export default ConstructionComponent
