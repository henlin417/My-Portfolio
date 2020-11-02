import React from 'react';
// pages
import Skills from "./pages/skills/skills.component";
import Slide from "react-reveal/Slide";
import Container from "react-bootstrap/Container";
import About from "./pages/about/about.components";
import ContactForm from "./pages/contact-form/contact-form.component";
import Fade from "react-reveal/Fade";
//components
import MyNavbar from './components/my-navbar/mynavbar.components';
import MyCarousal from "./components/my-carousal/my-carousal.components";
import TitleMessage from './components/title-message/title-message.components';
import TimeLine from "./components/projects-timeline/projects-timeline.components";
import FooterPanel from "./components/footer/footer.components";

//Particles
import Particles from "react-particles-js";
import { particlesOptions } from "./particlesOptions";

import './App.css';

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <MyCarousal />
      <TitleMessage />

      <Particles
        className="particles particles-box"
        params={particlesOptions}
      />

      <About />

      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>

      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <TimeLine />
        </Slide>
      </Container>

      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <ContactForm />
        </Fade>
      </Container>

      <hr />
      <FooterPanel />
    </div>
  );
}

export default App;
