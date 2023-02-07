import {FC, useEffect, useRef, useState} from "react";
import {Header} from "../shared/Header";
import {Footer} from "../shared/Footer";
import {PopularDishesSection} from "./PopularDishesSection";
import {AboutSection} from "./AboutSection";
import './Home.css';
import {useLocation, useNavigate} from "react-router";
import {HomePageStateType} from "../../types/shared.types";

const initialState: HomePageStateType = {
  isLoaded: false
}

export const HomePage: FC = () => {

  const aboutSectionRef = useRef();
  const popularDishesSectionRef = useRef();
  const location = useLocation();
  const [state, setState] = useState(initialState);

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

    if (aboutSectionRef.current) {
      observer.observe(aboutSectionRef.current)
    }

    if (location.pathname === '/') {
      document.querySelector('.nav-link.active')?.classList.remove('active');
    }
  }, [])

  useEffect(() => {
    if (state.isLoaded) {
      if (aboutSectionRef.current && location.state?.aboutSection && state.isLoaded) {
        const aboutSection = aboutSectionRef.current as HTMLElement;
        const headerNavbarHeight = document.querySelector('.header-navbar')?.clientHeight ?? 0;
        const scrollDistance = aboutSection.getBoundingClientRect().top + window.scrollY - headerNavbarHeight;
        window.scrollTo({top: scrollDistance, behavior: "smooth"});
      }
    }
  }, [state.isLoaded])

  return (
    <main className={"main-page"}>
      <Header />
      <PopularDishesSection
        ref={popularDishesSectionRef}
        setHomePageLoaded={() => setState({...state, isLoaded: true})}
      />
      <AboutSection ref={aboutSectionRef} />
      <Footer />
    </main>
  );
}