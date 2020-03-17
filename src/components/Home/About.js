import React from "react"
import Title from "../Title"
// import aboutImg from "../../images/aboutUsImg.jpg"
import styles from "../../css/about.module.css"
// import {Link} from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import {useStaticQuery,graphql} from 'gatsby'
import Img from 'gatsby-image'

const getAboutUsImg = graphql`
query aboutUsImg{
  aboutUsImage:file(relativePath:{eq:"aboutUsImg.jpg"}){
    childImageSharp{
      fluid(maxWidth:600){
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`
// this is our grqphql image query for our about section img.

const About = () => {
  const {aboutUsImage} = useStaticQuery(getAboutUsImg);
  // this is the destructuring of our graphql image.
  return (
    <div>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            {/* <img src={aboutImg} alt="about placeholder" /> */}
            <Img fluid={aboutUsImage.childImageSharp.fluid} alt="about us image"/>
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
          <AniLink fade to='Contact' className="btn-primary">Get A Quote</AniLink>
        </article>
      </div>
    </div>
  )
}
export default About
