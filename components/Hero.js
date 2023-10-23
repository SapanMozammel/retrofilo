import React, { useContext } from 'react';
import Context from './context/context';
import Marquee from 'react-fast-marquee';
import { InView } from 'react-intersection-observer';

const Hero = () => {
  const date = new Date();
  const { ref, setSectionVisible } = useContext(Context);

  return (
    <section
      className="section hero_section"
      ref={(r) => (ref.current[0] = r)}>
      <InView
        as="div"
        className="container"
        onChange={(inView) => (inView ? setSectionVisible(0) : '')}>
        <h1 className="section_title">
          <span className="stroke">
            Hi! I,m
            <br />
          </span>
          Sapan Mozammel <br/>
          <span className="stroke">
            FrontEnd <br />
          </span>
            Developer
          <span className="primary">.</span>
        </h1>
        <p className="hero_content">
          Welcome To{' '}
          <span className="italic">my {date.getFullYear()} portfolio.</span>
        </p>
      </InView>
      <Marquee
        className="hero_background_marquee"
        gradient={false}
        speed={50}>
        <div>JavaScript</div>
        <div>TypeScript</div>
        <div>React.Js</div>
        <div>Redux</div>
        <div>Next.Js</div>
        <div>Tailwind.css</div>
        <div>Sass</div>
        <div>WordPress</div>
        <div>WebPack</div>
        <div>WebFlow</div>
      </Marquee>
    </section>
  );
};

export default Hero;
