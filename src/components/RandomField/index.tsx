import { Container, Stage, Text, useTick } from "@pixi/react";
import { TextStyle } from "pixi.js";
import React, { useEffect, useReducer, useRef, useState } from "react";
import { PixelateFilter } from "@pixi/filter-pixelate";

const reducer = (_: any, { data }: { type: string; data: any }) => data;

const MovingText = () => {
  const [motion, update] = useReducer(reducer, {
    data: { x: 0, y: 0, anchor: 0 },
  });

  const iter = useRef(0);

  useTick((delta) => {
    const i = (iter.current += 0.01 * delta);

    update({
      type: "update",
      data: {
        x: Math.sin(i) * 300,
        y: Math.sin(i / 1.5) * 300,
        anchor: Math.sin(i / 2),
      },
    });
  });

  const ref = useRef<Text>(null);

  const y = ref.current?._bounds;

  const str = `${Math.round(y?.minX || 0)}, ${Math.round(y?.minY || 0)}`;

  return (
    <Text
      ref={ref}
      filters={[new PixelateFilter(3)]}
      text={str}
      {...motion}
      style={
        new TextStyle({
          align: "center",
          fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
          fontSize: 48,
          fontWeight: "300",

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
