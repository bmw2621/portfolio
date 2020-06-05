import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "../styles/styles.css"
import Header from './Header'

const Layout = ({ children }) => {

  const images = useStaticQuery(graphql`
    query SocialMediaImagesQuery {
      allFile(filter: {name: {in: ["facebookIcon","linkedinIcon","githubIcon","twitterIcon"]}}) {
        nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
          name
        }
      }
    }
  `)

  const socialHref = name => {
    switch(name){
      case "facebookIcon":
        return "https://www.facebook.com/benjamin.winchester";
      case "githubIcon":
        return "https://www.github.com/bmw2621";
      case "twitterIcon":
        return "https://www.twitter.com/b_m_winchester"
      case "linkedinIcon":
        return "https://www.linkedin.com/in/benjamin-m-winchester"
      default:
        return "/";
    }
  }

  

  return (
    <>
      
      <Header />
      <main>{children}</main>
      <footer>
        <ul>
        {images.allFile.nodes.map(img => (
          <li>
            <a href={socialHref(img.name)}>
              <Img
                fluid={img.childImageSharp.fluid}
                alt="Social Media Icon"
                className="socialIcon"
              />
            </a>
          </li>))}
          {/* <li><a href="https://www.facebook.com/sophiedaniellewinchester"><img alt="Facebook Icon" className="socialIcon" src={fbIcon}></img></a></li>
          <li><a href="https://www.linkedin.com/in/sophie-winchester-190a8312b"><img alt="LinkedIn Icon" className="socialIcon" src={liIcon}></img></a></li> */}
        </ul>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
