import React, { useContext } from "react";
import Context from "./context/context";
import { InView } from "react-intersection-observer";

const About = () => {
  const { ref, setSectionVisible } = useContext(Context);

  return (
    <section
      className="section about_section"
      ref={(r) => (ref.current[1] = r)}
    >
      <InView
        as="div"
        className="container"
        onChange={(inView) => (inView ? setSectionVisible(1) : "")}
      >
        <h1 className="section_title">
          Sapan <span className="stroke">Mozammel</span>
        </h1>
        <div className="about_content">
          <div className="left">
            <button className="play_button"></button>
            <video>
              <source
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                type="video/mp4"
              />
              <source
                src="https://www.w3schools.com/html/mov_bbb.ogg"
                type="video/ogg"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="right">
            <p className="text">
            As a dedicated Frontend Developer, I bring a wealth of experience and a deep passion for creating exceptional user interfaces. Expertise with HTML, CSS, and JavaScript, Scss, PostCss, Bootstrap, Tailwind and Also Modern JavaScript, TypeScript and JS Framework & Libraries like React.JS, Next.JS, Redux, WebPack and WordPress. My attention to detail and commitment to design principles ensure that every project I work on is not only functional but also visually engaging.
            </p>
            <a href="mailto:sapanmozammel@gmail.com" className="button">Send me an e-mail</a>
          </div>
        </div>
      </InView>
    </section>
  );
};

export default About;
