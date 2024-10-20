import React, { useEffect, useState } from "react";
import Card from "./components/cards/card";
import ATag from "./components/util/atag";
import LinkArrow from "./components/util/linkarrow";

const App = () => {
  const [clickCounter, setClickCounter] = useState(50);
  const [activeCard, setActiveCard] = useState(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleCardClick = () => {
    setClickCounter((prev) => prev + 1);
  };

  useEffect(() => {
    console.log(activeCard);
  });

  const handleMouseOver = (key) => {
    setActiveCard(key);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setActiveCard(null); // Reset the active card when no item is being hovered
  };
  const projects = [
    {
      title: "Another To-Do List",
      link: "/index.html",
      image: "https://picsum.photos/300/200",
      date: "2024",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde perferendis sunt porro alias voluptates aliquam ipsam libero dolore doloremque quas, veritatis maiores molestiae sit et nihil officiis totam a laboriosam?",
    },
    {
      title: "Yet Another Landing Page",
      link: "/index.html",
      image: "https://picsum.photos/300/200",
      date: "2022",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde perferendis sunt porro alias voluptates aliquam ipsam libero dolore doloremque quas, veritatis maiores molestiae sit et nihil officiis totam a laboriosam?",
    },
    {
      title: "Minimal Blog Clone",
      link: "/index.html",
      image: "https://picsum.photos/300/200",
      date: "2020",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde perferendis sunt porro alias voluptates aliquam ipsam libero dolore doloremque quas, veritatis maiores molestiae sit et nihil officiis totam a laboriosam?",
    },
    {
      title: "Super Basic Portfolio",
      link: "/index.html",
      image: "https://picsum.photos/200/100",
      date: "2021",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde perferendis sunt porro alias voluptates aliquam ipsam libero dolore doloremque quas, veritatis maiores molestiae sit et nihil officiis totam a laboriosam?",
    },
    {
      title: "A Boring Dashboard",
      link: "/index.html",
      image: "https://picsum.photos/150/150",
      date: "2019",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde perferendis sunt porro alias voluptates aliquam ipsam libero dolore doloremque quas, veritatis maiores molestiae sit et nihil officiis totam a laboriosam?",
    },
    {
      title: "Form with a Button",
      link: "/index.html",
      image: "https://picsum.photos/100/250",
      date: "2023",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde perferendis sunt porro alias voluptates aliquam ipsam libero dolore doloremque quas, veritatis maiores molestiae sit et nihil officiis totam a laboriosam?",
    },
    {
      title: "Simple E-Commerce Page",
      link: "/index.html",
      image: "https://picsum.photos/100/200",
      date: "2025",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde perferendis sunt porro alias voluptates aliquam ipsam libero dolore doloremque quas, veritatis maiores molestiae sit et nihil officiis totam a laboriosam?",
    },
    {
      title: "Random Image Grid",
      link: "/index.html",
      image: "https://picsum.photos/300/100",
      date: "2024",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde perferendis sunt porro alias voluptates aliquam ipsam libero dolore doloremque quas, veritatis maiores molestiae sit et nihil officiis totam a laboriosam?",
    },
    {
      title: "One-Page Wonder",
      link: "/index.html",
      image: "https://picsum.photos/200/300",
      date: "2021",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde perferendis sunt porro alias voluptates aliquam ipsam libero dolore doloremque quas, veritatis maiores molestiae sit et nihil officiis totam a laboriosam?",
    },
    {
      title: "The Least Interactive Map",
      link: "/index.html",
      image: "https://picsum.photos/100/100",
      date: "2023",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde perferendis sunt porro alias voluptates aliquam ipsam libero dolore doloremque quas, veritatis maiores molestiae sit et nihil officiis totam a laboriosam?",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex m-5 gap-10">
        <a className="w-fit p-2 bg-white rotate-[1deg] boxshdw text-sm h-fit">
          aiden cheng
          <br />
          <span className="text-black/30">黄色河</span>
        </a>
        <p className="w-1/5 p-2 bg-white rotate-[-3deg] boxshdw text-sm h-fit">
          I like to code. Previously worked at <ATag>Apple</ATag>,{" "}
          <ATag>OpenAI</ATag>, and {""}
          <ATag>Meta</ATag> <br />
          <br /> Find me on <ATag>Are.na</ATag>, <ATag>GitHub</ATag>,{" "}
          <ATag>Twitter</ATag>, <ATag>LinkedIn</ATag>, and <ATag>Read.cv.</ATag>
          <br />
          <br />
          <LinkArrow
            link="/coolfonts"
            title="More about me"
            style={{ fontSize: "0.875rem" }}
          />
          <LinkArrow
            link="/test"
            title="More about me"
            style={{ fontSize: "0.875rem" }}
          />
        </p>
        <div className="grid grid-cols-2 w-fit p-2 bg-white rotate-[3deg] boxshdw text-sm h-fit ">
          {projects.map((project, index) => (
            <p
              className="text-xs py-[0.125rem] hover:bg-[#d9d9d9] transition-all duration-100 ease cursor-pointer flex gap-2"
              key={index}
              onMouseEnter={() => handleMouseOver(index)}
              onMouseLeave={handleMouseLeave}
            >
              {project.title} <p className="text-black/40"> {project.date}</p>
            </p>
          ))}
        </div>
      </div>

      {projects.map((project, index) => (
        <Card
          key={index}
          cardKey={index}
          title={project.title}
          image={project.image}
          link={project.link}
          date={project.date}
          onCardClick={handleCardClick}
          currentZIndex={clickCounter}
          activeCard={activeCard}
          isHovering={isHovering}
          index={index}
        />
      ))}
    </div>
  );
};

export default App;
