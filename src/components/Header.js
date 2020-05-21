import React, { useRef, useEffect } from "react"

import Logo from "../images/me2.svg"

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

const Header = () => {

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

  return (
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
  )
}


export default Header
