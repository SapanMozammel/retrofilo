import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { InView } from 'react-intersection-observer';
import Context from './context/context';

const Projects = () => {
  const { ref, setSectionVisible } = useContext(Context);
  const [activeProject, setActiveProject] = useState(0);
  const [prevButtonDisable, setPrevButtonDisable] = useState(false);
  const [nextButtonDisable, setNextButtonDisable] = useState(false);

  const projects = [
    {
      link: 'https://betterdocs.co/',
      image: '/betterdocs.png',
      title: 'BetterDocs',
      description:
        'Create & manage knowledge base documentation effectively to reduce support ticket, increase productivity & user experience using BetterDocs.',
    },
    {
      link: 'https://store.wpdeveloper.com/',
      image: '/wpdeveloper.png',
      title: 'WpDeveloper Store',
      description:
        'WPDeveloper is WordPress-based product company. With 3 million+ happy users from 180+ countries, the company offers software to enhance web building experience.',
    },
    {
      link: 'https://easy.jobs/',
      image: '/easy-jobs.png',
      title: 'Easy.jobs',
      description:
        'Remote hiring made easy. Recruitment for Startup to Enterprise was never this fun. easy.jobs is your own HR SaaS tool, get your own career page, Create your job board!',
    },
    {
      link: 'https://templately.com/',
      image: '/templately.jpg',
      title: 'Templately',
      description:
        'Get 4,000+ Elementor templates & ready Blocks for Gutenberg to build WordPress website in few clicks. Join Templately for FREE & save ready templates in MyCloud to collaborate with team members on WorkSpace for WordPress.',
    },
    {
      link: 'https://notificationx.com/',
      image: '/notificationx.png',
      title: 'NotificationX',
      description:
        'Using social proof & FOMO marketing tactics, NotificationX helps you to gain trust and create urgency to skyrocket your WordPress conversion rates.',
    },
    {
      link: 'https://wpdeveloper.com/plugins/wp-scheduled-posts/',
      image: '/schedulepress.png',
      title: 'SchedulePress',
      description:
        '🔔 Rebranding Announcement: WP Scheduled Posts is now SchedulePress. Learn more here',
    },
    {
      link: 'https://betterlinks.io/',
      image: '/betterlinks.png',
      title: 'BetterLinks',
      description:
        'BetterLinks is an advanced WordPress Plugin For Link Shortening, Tracking & Analyzing.',
    },
    {
      link: 'https://xcloud.host/',
      image: '/xcloud.png',
      title: 'xCloud',
      description:
        'From setting up a staging environment to migrating your WordPress website, and even installing a free SSL, you can do it all with xCloud with a few clicks.',
    },
  ];

  const handleActiveState = (type) => {
    if (type == 'next' && activeProject < projects.length - 1) {
      setActiveProject(++activeProject);
    }
    if (type == 'prev' && activeProject > 0) {
      setActiveProject(--activeProject);
    }
  };

  useEffect(() => {
    console.log(activeProject);
    activeProject == 0
      ? setPrevButtonDisable(true)
      : setPrevButtonDisable(false);
    activeProject == projects.length - 1
      ? setNextButtonDisable(true)
      : setNextButtonDisable(false);
  }, [activeProject]);

  return (
    <section
      className="section projects_section"
      ref={(r) => (ref.current[2] = r)}>
      {console.log(prevButtonDisable, nextButtonDisable)}
      <InView
        as="div"
        className="container"
        onChange={(inView) => (inView ? setSectionVisible(2) : '')}>
        <h1 className="section_title">
          <span className="stroke">Recent</span> Projects
        </h1>
        <div className="project_carousel_wrapper">
          <button
            className="prev_button"
            onClick={() => handleActiveState('prev')}
            disabled={prevButtonDisable}></button>
          <div
            className="project_wrapper"
            style={{
              transform: `translate(-${activeProject * 450}px, -${
                activeProject * 250
              }px)`,
            }}>
            {projects?.map((project) => (
              <div
                className="project"
                key={Math.random()}>
                <div className="left">
                  {project?.link && (
                    <img
                      src={project?.image}
                      alt={project?.title}
                    />
                  )}
                </div>
                <div className="right">
                  <h3 className="title">{project?.title}</h3>
                  <p className="text">
                    {project?.description.substring(0, 70)}...
                  </p>

                  <Link href={project?.link}>
                    <a
                      className="button"
                      target="_blank">
                      Visit Site
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <button
            className="next_button"
            onClick={() => handleActiveState('next')}
            disabled={nextButtonDisable}></button>
        </div>
      </InView>
    </section>
  );
};

export default Projects;
