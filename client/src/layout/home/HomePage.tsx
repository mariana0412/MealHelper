import {FC, useEffect, useRef} from "react";
import {Header} from "../shared/Header";
import {Footer} from "../shared/Footer";
import {PopularDishesSection} from "./PopularDishesSection";
import {AboutSection} from "./AboutSection";
import './Home.css';

export const HomePage: FC = () => {

  const aboutSectionRef = useRef();
  const popularDishesSectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const aboutSection = entries.find(entry => entry.target.classList.contains('about-section'));
      if (aboutSection?.isIntersecting) {
        aboutSection.target.classList.add('visible');
      } else {
        aboutSection?.target.classList.remove('visible');
      }
    });

    document.querySelector('.look-for-a-recipe')?.addEventListener('click', () => {
      if (popularDishesSectionRef.current) {
        const popularDishesSection = popularDishesSectionRef.current as HTMLElement;
        const headerNavbarHeight = document.querySelector('.header-navbar')?.clientHeight ?? 0;
        const scrollDistance = popularDishesSection.getBoundingClientRect().top + window.scrollY - headerNavbarHeight;
        window.scrollTo({top: scrollDistance, behavior: "smooth"});
      }
    })

    if (aboutSectionRef.current)
      observer.observe(aboutSectionRef.current)
  })

  return (
    <div className={"main-page"}>
      <Header />
      <PopularDishesSection ref={popularDishesSectionRef} />
      <AboutSection ref={aboutSectionRef} />
      <Footer />
    </div>
  );
}