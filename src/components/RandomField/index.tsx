// import { PixelateFilter } from "@pixi/filter-pixelate";
import { Container, Stage, Text, useTick } from "@pixi/react";
import { TextStyle } from "pixi.js";
import React, { useEffect, useReducer, useRef, useState } from "react";
import { PixelateFilter } from "@pixi/filter-pixelate";

const reducer = (_: any, { data }) => data;

const MovingText = () => {
  const [motion, update] = useReducer(reducer);
  const iter = useRef(0);

  useTick((delta) => {
    const i = (iter.current += 0.05 * delta);

    update({
      type: "update",
      data: {
        x: Math.sin(i) * 10,
        y: Math.sin(i / 1.5) * 10,
        anchor: Math.sin(i / 5),
      },
    });
  });

  return (
    <Text
      text="Hello World"
      filters={[new PixelateFilter(5)]}
      {...motion}
      style={
        new TextStyle({
          align: "center",
          fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
          fontSize: 50,
          fontWeight: "400",
          fill: ["#ffffff"], // gradient
        })
      }
    />
  );
};

const Window = ({ numberOfSprites }: { numberOfSprites: number }) => {
  const [size, setSize] = React.useState({ x: 0, y: 0 });

  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const { current } = containerRef;

      if (current) {
        setSize({
          x: current.getBoundingClientRect().width,
          y: current.getBoundingClientRect().height,
        });
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const array = new Array(numberOfSprites).fill(0);

  return (
    <div className="w-full h-full flex" ref={containerRef}>
      <Stage
        width={size.x}
        height={size.y}
        options={{
          backgroundColor: "#222af5",
        }}
      >
        <>
          <Container x={size.x / 2} y={size.y / 2}>
            {array.map((_v, i) => (
              <MovingText key={i} />
            ))}
          </Container>
        </>
      </Stage>
    </div>
  );
};

export const RandomField = () => {
  const [count, setCount] = useState(1);

  return (
    <div className="flex flex-1 min-w-[40px] gap-4 bg-primary relative">
      <div className="flex absolute top-0 left-0 border-b border-r border-white text-white font-mono">
        <button
          className="h-8 w-8"
          onClick={() => setCount((prev) => (prev += 1))}
        >
          +
        </button>
        <div className="w-px bg-white"></div>
        <button
          className="h-8 w-8"
          onClick={() => setCount((prev) => Math.max((prev -= 1), 0))}
        >
          -
        </button>
      </div>
      <Window numberOfSprites={count} />
    </div>
  );
};
