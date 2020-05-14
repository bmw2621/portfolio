/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useRef, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "../styles/styles.css"
import Logo from "../images/me2.svg"

// import fbIcon from "../images/facebookIcon.png"
// import liIcon from "../images/linkedinIcon.png"

const getPixelRatio = context => {
    var backingStore =
    context.backingStorePixelRatio ||
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio ||
    1;

    return (window.devicePixelRatio || 1) / backingStore;
};

const buildGrid = (COLS, ROWS) => {
  return new Array(COLS).fill(null)
    .map(() => new Array(ROWS).fill(null)
      .map(() => Math.floor(Math.random() * 2)))
}

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

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

  console.log(images)
  const canvasRef = useRef(null)

  const nextGen = (grid, COLS, ROWS) => {
    const nextGen = grid.map(arr => [...arr]);

    for(let col = 0; col < grid.length; col++){
      for (let row = 0; row < grid[col].length; row++) {
        const cell = grid[col][row]
        let numNeighbors = 0

        // Check 3x3 grid of cells surrounding the cell being checked
        // Count number of cells thats are alive/dead
        for (let i = -1; i < 2; i++){
          for (let j = -1; j < 2; j++){

            // Don't count center cell, its the cell we are determining for
            if ( i === 0 && j === 0) {
              continue;
            }

            // Check for edge cases (boundary cells)
            const xCell = col + i;
            const yCell = row + j;

            if (xCell >= 0 && yCell >= 0 && xCell < COLS && yCell < ROWS){
              const currentNeighbor = grid[col + i][row + j];
              numNeighbors += currentNeighbor;
            }
          }
        }

        // Rules of the Game

        // If cell is alive and there are less than 2 living neighbors, cell dies of under-population
        if (cell === 1 && numNeighbors < 2) {
          nextGen[col][row] = 0;

        // If cell is alive and there are more than 3 living neighbors, cell dies of overpopulation
        } else if (cell === 1 && numNeighbors > 3) {
          nextGen[col][row] = 0;

        // If cell is dead and there are three living neighbors, cell comes alive from reproduction
        } else if (cell === 0 && numNeighbors === 3) {
          nextGen[col][row] = 1;
        }
      }
    }

    return nextGen;
  }

  useEffect(() => {
    let requestId;
    let grid;
    let canvas = canvasRef.current;
    let ctx = canvas.getContext('2d');

    let ratio = getPixelRatio(ctx);
    let width = getComputedStyle(canvas)
        .getPropertyValue('width')
        .slice(0, -2);
    let height = getComputedStyle(canvas)
        .getPropertyValue('height')
        .slice(0, -2);

    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `100%`;
    canvas.style.height = `100%`;

    const resolution = 5;
    const cols = Math.floor(canvas.width / resolution)
    const rows = Math.floor(canvas.height / resolution)

    const render = () => {
          grid = grid ? nextGen(grid, cols, rows) : buildGrid(cols, rows);

          for(let col = 0; col < grid.length; col++){
            for (let row = 0; row < grid[col].length; row++) {
              const cell = grid[col][row]


              ctx.beginPath();
              ctx.rect(col * resolution, row * resolution, resolution, resolution);
              ctx.fillStyle = cell ? '#0D3942ff' : '#103037ff'
              ctx.fill()
            }
          }
        setTimeout(() => {
          requestId = requestAnimationFrame(render);
        }, 2000)
      };

    render();

    return () => {
      cancelAnimationFrame(requestId)
    };
  });

  const toggleNav = () => {
    let navBar = document.querySelector('nav');
    navBar.style.display = navBar.style.display === "block" ? "none" : "block";
  }

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
      
      <header>
        <canvas
            id="gameOfLife"
            ref={canvasRef}
          ></canvas> 
        <Logo className="portrait" />
        <div id="navMenu">
          <span id="navToggle" role="Menu" onClick={toggleNav}>></span>
          <nav>
            <ul>
              <li>Contact</li>
              <li>Blog</li>
              <li>Projects</li>
              <li>Art</li>
            </ul>
          </nav>
        </div>
      </header>
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
