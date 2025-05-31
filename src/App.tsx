import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Instagram, Linkedin, Youtube, Facebook, Twitter } from 'lucide-react';
import './styles/App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="portfolio">
      <header className={scrolled ? 'scrolled' : ''}>
        <nav>
          <a href="#home" className="logo">
            <span>Best Zerry.</span>
          </a>
          <div className="mobile-nav-toggle" onClick={toggleMenu}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
          <ul className={`menubar ${menuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#skill" onClick={closeMenu}>Skills</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="banner" id="home">
        <div className="banner-content">
          <div className="picture">
            <img src="https://scontent.futp1-2.fna.fbcdn.net/v/t1.15752-9/494832409_1470309367647738_4517776430652480019_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=bDIb5YahIqcQ7kNvwGAho8t&_nc_oc=AdmGuGgdFO0jB_ZBYfj3xx24My1mSaLfVvydV_qNe_FFuoJ8AO96RQcDlB4ZGCS7JJgOVeZYYs15_o1yjYAQHflx&_nc_zt=23&_nc_ht=scontent.futp1-2.fna&oh=03_Q7cD2QFw7XqkiBNrCQnhybnS3cf9AIeCwLQC7xbZV2xovmtR2Q&oe=6861020C" alt="Profile" width={300} />
          </div>
          <div className="text-descript">
            <h2>Hello I'm Best</h2>
            <p>
              Hello! I'm <span>Thanaphat Sopharat</span> a Computer Science student at Sripatum University, Thailand.
              I'm passionate about technology and eager to become a skilled software developer.
              I enjoy coding, learning, and building real-world applications that make a difference.
            </p>
             <span><a href="https://github.com/2bitdevv">read more at git click !!!</a></span>
            <h2>Example Portfolio</h2>
            <div className="social-media">
              <a href="https://github.com/2bitdevv" aria-label="GitHub"><Github /></a>
              <a href="#" aria-label="Instagram"><Instagram /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin /></a>
              <a href="#" aria-label="YouTube"><Youtube /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-container">
          <div className="about-content">
            <h2 className="heading">About <span>Me</span></h2>
            <h3><span>Tech</span> Enthusiast!</h3>
            <p>
              Hello! I'm Thanaphat, a Computer Science student at Sripatum University, Thailand, 
              with a strong passion for the ever-evolving world of technology.
              I'm driven by a desire to become a skilled software engineer, focusing on software 
              development, coding, and staying up to date with the latest tech trends.
            </p>
            <h3><span>Professional</span> Journey</h3>
            <p>
              I enjoy learning through hands-on projects and collaborating with others to create 
              real-world applications that solve meaningful problems.
              My GitHub portfolio reflects my commitment to continuous improvement and practical learning.
              Here are some highlights 
            </p>
          </div>
          <div className="about-image">
            <img src="https://scontent.futp1-2.fna.fbcdn.net/v/t1.15752-9/494832409_1470309367647738_4517776430652480019_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=bDIb5YahIqcQ7kNvwGAho8t&_nc_oc=AdmGuGgdFO0jB_ZBYfj3xx24My1mSaLfVvydV_qNe_FFuoJ8AO96RQcDlB4ZGCS7JJgOVeZYYs15_o1yjYAQHflx&_nc_zt=23&_nc_ht=scontent.futp1-2.fna&oh=03_Q7cD2QFw7XqkiBNrCQnhybnS3cf9AIeCwLQC7xbZV2xovmtR2Q&oe=6861020C" alt="Profile" width={300} />
          </div>
        </div>
      </section>

      <section className="skills" id="skill">
        <h2 className="heading">My <span>Skills</span></h2>

        <div className="skills-row">
          <div className="skills-column">
            <h3 className="title">Technical <span>Skills</span></h3>
            <div className="skills-box">
              <div className="skills-content">
                <div className="progress">
                  <h3>HTML <span>50%</span></h3>
                  <div className="bar"><span style={{ width: '50%' }}></span></div>
                </div>
                <div className="progress">
                  <h3>CSS <span>50%</span></h3>
                  <div className="bar"><span style={{ width: '50%' }}></span></div>
                </div>
                <div className="progress">
                  <h3>JavaScript <span>50%</span></h3>
                  <div className="bar"><span style={{ width: '50%' }}></span></div>
                </div>
                <div className="progress">
                  <h3>Python <span>50%</span></h3>
                  <div className="bar"><span style={{ width: '50%' }}></span></div>
                </div>
                <div className="progress">
                  <h3>SQL <span>50%</span></h3>
                  <div className="bar"><span style={{ width: '50%' }}></span></div>
                </div>
                <div className="progress">
                  <h3>React <span>50%</span></h3>
                  <div className="bar"><span style={{ width: '50%' }}></span></div>
                </div>
              </div>
            </div>
          </div>

          <div className="skills-column">
            <h3 className="title">Professional <span>Skills</span></h3>
            <div className="skills-box">
              <div className="skills-content">
                <div className="progress">
                  <h3>Web Development <span>50%</span></h3>
                  <div className="bar"><span style={{ width: '50%' }}></span></div>
                </div>
                <div className="progress">
                  <h3>Graphic Design <span>50%</span></h3>
                  <div className="bar"><span style={{ width: '50%' }}></span></div>
                </div>
                <div className="progress">
                  <h3>Data Structures &amp; Algorithms <span>50%</span></h3>
                  <div className="bar"><span style={{ width: '50%' }}></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2>Contact <span>Me</span></h2>
        <div className="contact-links">
          <div className="contact-item">
            <a href="#" aria-label="Facebook"><Facebook /></a>
          </div>
          <div className="contact-item">
            <a href="#" aria-label="Instagram"><Instagram /></a>
          </div>
          <div className="contact-item">
            <a href="https://github.com/2bitdevv" aria-label="GitHub"><Github /></a>
          </div>
          <div className="contact-item">
            <a href="#" aria-label="Twitter"><Twitter /></a>
          </div>
        </div>
      </section>

      <footer className="footer">
        Copyright © &nbsp;<a href="https://github.com/2bitdevv"><span>&nbsp;Thanaphat Sopharat&nbsp;</span></a>&nbsp;| &nbsp;All Rights Reserved
      </footer>
    </div>
  );
}

export default App;