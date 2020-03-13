import React from "react"
import Title from "../Title"
import aboutImg from "../../images/aboutUsImg.jpg"
import styles from "../../css/about.module.css"

const About = () => {
  return (
    <div>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={aboutImg} alt="about placeholder" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>Paragraph Here</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lorem
            nulla, posuere sed massa vitae, cursus tempor lectus. Morbi at
            libero magna. Aenean risus eros, ullamcorper non diam a, tincidunt
            pulvinar enim. Proin a justo non ligula faucibus facilisis eget ac
            felis. 
          </p>
          <a href="tel:5551234567" className="btn-primary">Get A QUote</a>
        </article>
      </div>
    </div>
  )
}
export default About
