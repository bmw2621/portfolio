import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const skills = {
  "frontend": [
    ["HTML","htmlIcon"],
    ["Javascript","javascriptIcon"],
    ["CSS","cssIcon"],
    ["SASS","sassIcon"]
  ],
  "backend": [
    ["NodeJS","nodeJSIcon"],
    ["ExpressJS","expressJSIcon"],
    ["Python","pythonIcon"],
    ["Flask","flaskIcon"],
    ["GraphQL","graphqlIcon"]
  ],
  "design": [
    ["Figma","FigmaIcon"],
    ["Adobe Photoshop","PhotoshopIcon"],
    ["Inkscape","InkscapeIcon"],
    ["Blender","BlenderIcon"]
  ],
  "database": [
    ["MySQL","MySQLIcon"],
    ["PostgreSQL","PostgreSQLIcon"]
  ],
  "general": [
    ["Java","JavaIcon"],
    ["Git","GitIcon"],
    ["Linux","LinuxIcon"],
    ["Apache","ApacheIcon"],
    ["Nginx","NginxIcon"],
    ["AWS EC2","EC2Icon"]
  ],
  "dataAnalysis": [
    ["Pandas","PandasIcon"],
    ["Jupyter","JupyterIcon"],
    ["matplotlib","matplotlibIcon"],
    ["Plotly","PlotlyIcon"],
  ],
}

const skillDivs = (skillsArr, skillsImages) => (
  skillsArr.map(skill => {
    const image = skillsImages.find(element => element.name === skill[1])
    return (
      <div className="skill">
        <Img className="skillImage" fluid={image.childImageSharp.fluid}/>
        <span>{skill[0]}</span>
      </div>
    )
  })
)

const IndexPage = () => {
  const images = useStaticQuery(graphql`
    query SkillsImagesQuery {
      allFile(filter: {relativeDirectory: {eq: "skills"}}) {
        nodes {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }    
  `)



  return (
    <Layout>
      <SEO title="Home" />
      <h1>Web Developer</h1>
      <h2>About Me</h2>
      <p>This is a paragraph about me that I will soon write</p>
      <h2>Skills</h2>
      <h3>Frontend Development</h3>
      <div className="skills">{skillDivs(skills.frontend, images.allFile.nodes)}</div>
      <h3>Design</h3>
      <div className="skills">{skillDivs(skills.design, images.allFile.nodes)}</div>
      <h3>Backend Development</h3>
      <div className="skills">{skillDivs(skills.backend, images.allFile.nodes)}</div>
      <h3>Database</h3>
      <div className="skills">{skillDivs(skills.database, images.allFile.nodes)}</div>
      <h3>General</h3>
      <div className="skills">{skillDivs(skills.general, images.allFile.nodes)}</div>
      <h3>Data Analysis</h3>
      <div className="skills">{skillDivs(skills.dataAnalysis, images.allFile.nodes)}</div>
    </Layout>
  )
}

export default IndexPage
