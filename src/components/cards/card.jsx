import React, { useState, useEffect } from "react";
import { motion, useDragControls } from "framer-motion";
import ArrowLink from "../util/arrowlink";

const Card = ({
  title,
  link,
  date,
  image,
  cardKey,
  onCardClick,
  currentZIndex,
  activeCard,
  index,
  isHovering,
}) => {
  const controls = useDragControls();
  const [zIndex, setZIndex] = useState(cardKey);

  const getRandomPosition = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const getRandomRotation = () => getRandomPosition(-30, 30);

  // Shift the cards more right and down
  const getRandomX = () =>
    getRandomPosition(window.innerWidth * 0.05, window.innerWidth * 0.6);
  const getRandomY = () =>
    getRandomPosition(window.innerHeight * 0.05, window.innerHeight * 0.7);

  const [randomX, setRandomX] = useState(0);
  const [randomY, setRandomY] = useState(0);
  const [randomRotation, setRandomRotation] = useState(0);

  useEffect(() => {
    setRandomX(getRandomX()); // Random X towards the right side of the screen
    setRandomY(getRandomY()); // Random Y towards the bottom of the screen
    setRandomRotation(getRandomRotation()); // Random rotation between -30 and 30 degrees
  }, []);

  const bringToFront = () => {
    onCardClick();
    setZIndex(currentZIndex);
  };

  return (
    <motion.div
      className="p-[2px_4px_4px] flex flex-col bg-[rgba(1,1,1,0.02)] gap-3 min-w-[20vw] rounded-lg w-fit cursor-grab active:cursor-grabbing card absolute"
      transition={{
        x: { ease: [0.22, 0.61, 0.36, 1], duration: 0.8 },
        y: { ease: [0.22, 0.61, 0.36, 1], duration: 0.8 },
        opacity: { duration: 0.3, ease: "easeInOut" },
        filter: { duration: 0.3, ease: "easeInOut" },
      }}
      style={{ zIndex }} // Apply zIndex from state
      initial={{
        x: getRandomPosition(-window.innerWidth, window.innerWidth), // Start outside the viewport
        y: getRandomPosition(-window.innerHeight, window.innerHeight),
        rotate: 0,
        scale: 1,
        backdropFilter: "blur(0px)",
      }}
      whileTap={{
        scale: 1.01,
        backdropFilter: "blur(6px)",
      }}
      animate={{
        x: randomX,
        y: randomY,
        rotate: randomRotation,
        opacity: !isHovering || activeCard === index ? 1 : 0,
        filter: !isHovering || activeCard === index ? "blur(0px)" : "blur(2px)",
      }}
      drag
      dragControls={controls}
      dragMomentum={false}
      onMouseDown={bringToFront}
    >
      <div className="flex w-full justify-between items-center">
        <ArrowLink link={link} title={title} />
        <span className="text-black/30 text-[0.7rem]">{date}</span>
      </div>
      <img
        src={image}
        alt="placeholder"
        className="pointer-events-none max-w-[100%] m-2 rounded-md"
      />
    </motion.div>
  );
};

export default Card;
