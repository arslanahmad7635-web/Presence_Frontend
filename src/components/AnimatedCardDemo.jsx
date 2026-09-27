import { useState } from 'react';
import { motion, easeInOut } from 'framer-motion';
import AnimatedCard from './animatedcard';

const tools = [
  {
    imgSrc: "https://brandlogos.sgp1.digitaloceanspaces.com/svg/logos/react.svg",          // ✅ just the value
    title: 'React.js Frontend',
    aboutProduct:
      'A high-performance component-based library powering the interactive user interface, live webcam feed, and seamless Single-Page Application routing.',
  },
  {
    imgSrc: "https://static.djangoproject.com/img/logos/django-logo-negative.png",
    title: 'Django Backend',
    aboutProduct:
      'A robust Python web framework managing secure user authentication, role management, API endpoints, and attendance logic.',
  },
  {
    imgSrc: "https://icon.icepanel.io/Technology/svg/PyTorch.svg",
    title: 'PyTorch AI Engine',
    aboutProduct:
      'Deep learning framework powering computer vision models for high-speed face detection, anti-spoofing liveness checks, and facial embeddings.',
  },
  {
    imgSrc: "https://icon.icepanel.io/Technology/svg/Azure-SQL-Database.svg",
    title: 'SQL Database Layer',
    aboutProduct:
      'Relational database management system securely structuring student profiles, classroom mappings, and historical attendance logs.',
  },
];

const POSITIONS = [
  { x: -495, y: -40,  rotate: -14, z: 40 },
  { x: -165, y: -105, rotate: -5,  z: 30 },
  { x:  165, y: -105, rotate:  5,  z: 20 },
  { x:  495, y: -40,  rotate:  14, z: 10 },
];

const STACKED = [
  { x: -12, y: -8, rotate: -6 },
  { x: -4,  y: -3, rotate: -2 },
  { x:  4,  y:  3, rotate:  2 },
  { x:  12, y:  8, rotate:  6 },
];

export default function AnimatedCardDemo() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="hidden md:flex relative justify-center items-center w-full h-full cursor-pointer select-none"
      onClick={() => setExpanded((v) => !v)}
    >
      {tools.map((tool, i) => (
        <motion.div
          key={tool.title}
          initial={false}
          animate={
            expanded
              ? { x: POSITIONS[i].x, y: POSITIONS[i].y, rotate: POSITIONS[i].rotate }
              : { x: STACKED[i].x,  y: STACKED[i].y,  rotate: STACKED[i].rotate }
          }
          transition={{ ease: easeInOut, duration: 0.75 }}
          style={{ zIndex: POSITIONS[i].z }}
          className="absolute"
        >
          <AnimatedCard {...tool} index={i} />
        </motion.div>
      ))}
    </div>
  );
}