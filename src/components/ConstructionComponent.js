import React from "react"

import Banner from "../components/Banner"
import constructionImg from "../images/constructionImg.png"
import styles from "../css/underConstruction.module.css"

const ConstructionComponent = () => {
  return (
    <div className={styles.constructionPageWrapper}>
      <div className={styles.Banner}>
        <Banner
          title="Under Construction"
        > <img src={constructionImg} alt="page under construction" /></Banner>
      </div>
      {/* <div className={styles.imageContainer}>
      <img src={constructionImg} alt="page under construction" />
      </div> */}
      <div className={styles.buttonWrapper}>
        <button type="button" className="btn-primary">
          Go Back
        </button>
      </div>
    </div>
  )
}
export default ConstructionComponent
