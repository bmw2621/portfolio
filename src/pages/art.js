import React from "react";
import ProjectCard from '../components/ProjectCard';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const art = [
  {
    title: "3rd Combat Aviation Brigade",
    description: "3D Render of unit logo for 3rd Combat Aviation Brigade",
    img: '3cab.png',
    codeURL: null,
    liveURL: null
  },
  {
    title: "USASOAC",
    description: "3D Render of unit logo for United States Army Special Operations Aviation Command",
    img: "usasoac.png",
    codeURL: null,
    liveURL: null
  },
  {
    title: "Glass Render",
    description: "3D Render of glass soda bottle using HDRI environmental lighting",
    img: "soda.png",
    codeURL: null,
    liveURL: null
  },
  {
    title: "#VetsWhoCode",
    description: "3D Render of Vets Who Code logo, modeled and textured in Blender, live rendering uses Three.js with orbital controls. ",
    img: "vwc.png",
    codeURL: null,
    liveURL: "http://cruel-potato.surge.sh/"
  },
  {
    title: "Mushrooms",
    description: "Cut mushrooms on a cutting board highlighting complex UV unwrapping and texturing",
    img: "mushrooms.png",
    codeURL: null,
    liveURL: null
  },
  {
    title: "Grip Trainer",
    description: "3D Render of grip strength training highlighting node based mesh displacement and metalic materials",
    img: "gripTrainer.png",
    codeURL: null,
    liveURL: null
  },
  {
    title: "Bench",
    description: "35mm Film at Thomas Cooper Library, University of South Carolina",
    img: "bench.jpg",
    codeURL: null,
    liveURL: null
  },
  {
    title: "Lights",
    description: "35mm Film extended exposure involving light painting",
    img: "lights.jpg",
    codeURL: null,
    liveURL: null
  },
  {
    title: "Temperature",
    description: "Exercise in using light temperature for color manipulation",
    img: "temperature.jpg",
    codeURL: null,
    liveURL: null
  },
  {
    title: "Faded Glory",
    description: "35mm Film Exposure",
    img: "fadedGlory.jpg",
    codeURL: null,
    liveURL: null
  },
  {
    title: "Metro 1",
    description: "Digital Exposure in Washington DC Metro",
    img: "metro1.jpg",
    codeURL: null,
    liveURL: null
  },
  {
    title: "Metro 2",
    description: "Digital Exposure in Washington DC Metro",
    img: "metro2.jpg",
    codeURL: null,
    liveURL: null
  },
  {
    title: "SPIES",
    description: "Digital Exposure of military training exercise at Fort Benning, GA (Special Patrol Insertion/Extraction System)",
    img: "spies.jpg",
    codeURL: null,
    liveURL: null
  },

]

const ArtPage = () => {
      
    const images = useStaticQuery(graphql`
        query ArtQuery {
            allImageSharp {
                nodes {
                    fluid {
                        originalName
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
 
  return (
    <Layout>
      <SEO title="Art" />
      <h1>Art</h1>
      <div className="projectCards">
        {art.map(project => <ProjectCard data={project} images={images} modal={true}/>)}      
      </div>
    </Layout>
  )
}

export default ArtPage
