import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer_section">
      <div className="container">
        <nav className="footer_content">
          <Link href="https://www.linkedin.com/in/sapanmozammel/">
            <a
              className="footer_content_link"
              target="_blank">
              Linkedin
            </a>
          </Link>
          <Link href="https://github.com/SapanMozammel">
            <a
              className="footer_content_link"
              target="_blank">
              GitHub
            </a>
          </Link>
          <Link href="https://profiles.wordpress.org/sapanmozammel/">
            <a
              className="footer_content_link"
              target="_blank">
              WordPress
            </a>
          </Link>
          <div className="footer_sponsor">
            Powered by
            <span className="sponsor_name">Sapan Mozammel</span>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
