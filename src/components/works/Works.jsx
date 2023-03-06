import "./works.scss";
import { useState } from "react";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [

    {
      id: "1",
      icon: "./assets/globe.png",
      title: "MIQ Digital",
      sub_title: "Software Development Engineer Intern",
      duration:'July 2022 - Present',
      desc:'Currently employed as a Software Development Engineer Intern at MIQ Digital India.',
      img: "assets/miq.jpg",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Code8",
      sub_title: "Full Stack Intern",
      duration:'Nov 2021 - Jan 2022',
      desc:'Working on ReactJS , Redux ToolKit & SASS. Creating services for API integration & global state management using Redux toolkit. Enhancing user-experience and interactivity by adding dynamic routing using React Router and React Hooks.',
      img: "assets/code8.jpg",
    },
    {
      id: "3",
      icon: "./assets/mobile.png",
      title: "TechDirective",
      sub_title: "TECH DIRECTIVE - FRONT-END DEVELOPER INTERN",
      duration:'Aug 2021 - Nov 2021',
      desc:'Designed and developed the product using ReactJS and NodeJS. Enhanced user experience and did Algorithmic optimization for better animation. Implementing UI components using ANTD & styled them using SASS.',
      img: "assets/techdirective.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="work" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container" key={d.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <h1>{d.title}</h1>
                  <h3 className="title">{d.sub_title}</h3>
                  <h6 className="title">{d.duration}</h6>
                  <p className="description">{d.desc}</p>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        alt=""
        className="arrow left"
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        alt=""
        className="arrow right"
        onClick={() => handleClick()}
      />
    </div>
  );
}
