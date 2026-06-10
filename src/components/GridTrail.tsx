"use client";

import React, { useEffect, useRef } from "react";
import p5 from "p5";

const GridTrail: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const sketch = (p: p5) => {
      let grid: { alpha: number }[][] = [];
      const cellSize = 40;
      let cols: number, rows: number;

      p.setup = () => {
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.style("display", "block");
        p.frameRate(60);
        cols = Math.ceil(p.width / cellSize);
        rows = Math.ceil(p.height / cellSize);
        
        for (let i = 0; i < cols; i++) {
          grid[i] = [];
          for (let j = 0; j < rows; j++) {
            grid[i][j] = { alpha: 0 };
          }
        }
      };

      p.draw = () => {
        p.clear();
        p.noStroke();

        const mouseCol = Math.floor(p.mouseX / cellSize);
        const mouseRow = Math.floor(p.mouseY / cellSize);

        if (mouseCol >= 0 && mouseCol < cols && mouseRow >= 0 && mouseRow < rows) {
          grid[mouseCol][mouseRow].alpha = 255;
          
          // Neighbor disturbance
          for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
              if (Math.random() > 0.5) {
                const ni = mouseCol + i;
                const nj = mouseRow + j;
                if (ni >= 0 && ni < cols && nj >= 0 && nj < rows) {
                  grid[ni][nj].alpha = Math.max(grid[ni][nj].alpha, 150);
                }
              }
            }
          }
        }

        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
            if (grid[i][j].alpha > 0) {
              p.fill(185, 122, 63, grid[i][j].alpha);
              p.rect(i * cellSize, j * cellSize, cellSize - 2, cellSize - 2, 4);
              grid[i][j].alpha = Math.max(0, grid[i][j].alpha - 5);
            }
          }
        }
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        cols = Math.ceil(p.width / cellSize);
        rows = Math.ceil(p.height / cellSize);
        grid = [];
        for (let i = 0; i < cols; i++) {
          grid[i] = [];
          for (let j = 0; j < rows; j++) {
            grid[i][j] = { alpha: 0 };
          }
        }
      };
    };

    const p5Instance = new p5(sketch, containerRef.current);

    return () => {
      p5Instance.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[-1] pointer-events-none opacity-40"
    />
  );
};

export default GridTrail;
