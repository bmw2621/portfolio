import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'

import Img from "gatsby-image"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const ContactPage = () => {
 
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Let's Talk!</h1>
      <div className="contactAll">
        <div className="contactType"><FontAwesomeIcon icon={faEnvelope} /><a href='mailto:benjamin.m.winchester@googlemail.com' className="contact">benjamin.m.winchester@gmail</a></div>
        <div className="contactType"><FontAwesomeIcon icon={faPhone} /><span className="contact">(912) 231-7250‬</span></div>
        <div className="contactType"><FontAwesomeIcon icon={faGlobeAmericas} /><span className="contact">Savannah, GA</span></div>
        <div className="contactType"></div>
      </div>
    </Layout>
  )
}

export default ContactPage
