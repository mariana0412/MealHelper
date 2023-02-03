import {FC, useEffect, useRef} from "react";
import {Header} from "../shared/Header";
import {Footer} from "../shared/Footer";
import {PopularDishesSection} from "./PopularDishesSection";
import {AboutSection} from "./AboutSection";
import './Home.css';

export const HomePage: FC = () => {

  const aboutSectionRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const aboutSection = entries.find(entry => entry.target.classList.contains('about-section'));
      if (aboutSection?.isIntersecting) {
        aboutSection.target.classList.add('visible');
      } else {
        aboutSection?.target.classList.remove('visible');
      }
    });

    if (aboutSectionRef.current)
      observer.observe(aboutSectionRef.current)
  })

  return (
    <div className={"main-page"}>
      <Header />
      <PopularDishesSection  />
      <AboutSection ref={aboutSectionRef} />
      <Footer />
    </div>
  );
}