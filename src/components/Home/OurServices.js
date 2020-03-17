import React from "react"
import Title from "../Title"
import styles from "../../css/services.module.css"
import ServiceIcons from "../../constants/ServiceIcons"
// import {Link} from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'


const OurServices = () => {
  return (
    <section className={styles.services}>
      <Title title="our" subtitle="services" />
      <div className={styles.center}>
        {ServiceIcons.map((item, index) => {
          return (
            <article key={index} className={styles.service}>
              <span>{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          )
        })}
      </div>
      <div className={styles.serviceBtn}>
      <AniLink fade type="button" to="/Services" className="btn-primary">View More</AniLink>
      </div>
    </section>
  )
}
export default OurServices
