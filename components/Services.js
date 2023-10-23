import React, { useContext } from 'react';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import Context from './context/context';
import { InView } from 'react-intersection-observer';

const Services = () => {
  const { ref, setSectionVisible } = useContext(Context);

  return (
    <section
      className="section service_section"
      ref={(r) => (ref.current[3] = r)}>
      <InView
        as="div"
        className="container"
        onChange={(inView) => (inView ? setSectionVisible(3) : '')}>
        <h1 className="section_title">
          <span className="stroke">Main</span> Services
        </h1>
      </InView>
      <div className="service_slider_wrap">
        <Marquee
          className="service_slider slider_1"
          direction="right"
          pauseOnHover={true}
          gradient={false}
          speed={100}>
          <div className="service_slider_inner">
            <div className="service">
              <span className="text">FrontEnd Development</span>
            </div>
            <div className="service">
              <span className="text">Responsive Design</span>
            </div>
            <div className="service">
              <span className="text">React.Js</span>
            </div>
            <div className="service">
              <span className="text">Web Development</span>
            </div>
            <div className="service">
              <span className="text">Next.Js</span>
            </div>
            <div className="service">
              <span className="text">Web Application</span>
            </div>
            <div className="service">
              <span className="text">TailWind Css</span>
            </div>
            <div className="service">
              <span className="text">WebPack</span>
            </div>
            <div className="service">
              <span className="text">JavaScript</span>
            </div>
            <div className="service">
              <span className="text">SASS</span>
            </div>
            <div className="service">
              <span className="text">TypeScript</span>
            </div>
          </div>
        </Marquee>
        <Marquee
          className="service_slider slider_2"
          pauseOnHover={true}
          gradient={false}
          speed={100}>
          <div className="service_slider_inner">
            <div className="service">
              <span className="text">FrontEnd Development</span>
            </div>
            <div className="service">
              <span className="text">Responsive Design</span>
            </div>
            <div className="service">
              <span className="text">React.Js</span>
            </div>
            <div className="service">
              <span className="text">Web Development</span>
            </div>
            <div className="service">
              <span className="text">Next.Js</span>
            </div>
            <div className="service">
              <span className="text">Web Application</span>
            </div>
            <div className="service">
              <span className="text">TailWind Css</span>
            </div>
            <div className="service">
              <span className="text">WebPack</span>
            </div>
            <div className="service">
              <span className="text">JavaScript</span>
            </div>
            <div className="service">
              <span className="text">SASS</span>
            </div>
            <div className="service">
              <span className="text">TypeScript</span>
            </div>
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Services;
