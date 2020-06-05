import React from "react";
import ProjectCard from '../components/ProjectCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import Img from "gatsby-image"


import Layout from "../components/Layout"
import SEO from "../components/SEO"

const projects = [
  {
    title: "Healthy Living Business Site",
    description: "GatsbyJS site using Drupal CMS (on AWS EC2 server), Youtube API, and Auth0 to manage and deliver subscribed content. Deployed on Netlify and uses Build Hooks.",
    img: 'sophie.jpg',
    codeURL: "https://www.github.com/bmw2621/sophieSite",
    liveURL: "https://www.sophiewinchester.com"
  },
  {
    title: "Dungeons & Gragons GraphQL API",
    description: "Converted DND5e API (RESTful) to a GraphQL. Pythons scipts create SQLite database from MongoDB instance, to support GraphQL schema.",
    img: "dnd5eGQL.jpg",
    codeURL: "https://www.github.com/bmw2621/dnd5eGQL",
    liveURL: null
  },
  {
    title: "Brew Numbers API",
    description: "Brew Numbers API provides users with data conversions associated with their brewing projects",
    img: "brewNumbers.png",
    codeURL: "https://www.github.com/bmw2621/dnd5eGQL",
    liveURL: "http://18.216.248.93/"
  },
  {
    title: "Green Spork",
    description: "Prototype for local business to build and send email orders using Gatsby, React, Netlify Functions, and MailGun.JS",
    img: "gatsbyIcon.png",
    codeURL: "https://www.github.com/bmw2621/greenSpork",
    liveURL: "https://greenspork.netlify.app"
  },
  {
    title: "North Georgia Security Consultants",
    description: "Pamphlet page for local business using Gatsby",
    img: "ngsc.png",
    codeURL: "https://www.github.com/bmw2621/ngsc",
    liveURL: "http://ngsc-test.surge.sh"
  },
  {
    title: "Jerome Says API",
    description: "ExpressJS API to poke fun at a friend",
    img: "jeromeSays.jpg",
    codeURL: "https://www.github.com/bmw2621/jeromeSays",
    liveURL: "http://jeromesays.gq"
  },
  {
    title: "pngToMP3",
    description: "Designed to convert a directory of images to MP3 files by way of Tesseract OCR and the Google Text to Speech API.",
    imgURL: null,
    codeURL: "https://www.github.com/bmw2621/pngToMP3",
    liveURL: null
  },
  {
    title: "Sun Moon Data",
    description: "CLI tool to download Sun/Moon data from the United States Naval Observatory webages for a given date range and city, and exports as a csv.",
    imgURL: null,
    codeURL: "https://www.github.com/bmw2621/pngToMP3",
    liveURL: null
  },
]

const ProjectsPage = () => {
 
  return (
    <Layout>
      <SEO title="Projects" />
      <h1>Projects</h1>
      <div className="projectCards">
        {projects.map(project => <ProjectCard data={project} />)}      
      </div>
    </Layout>
  )
}

export default ProjectsPage
