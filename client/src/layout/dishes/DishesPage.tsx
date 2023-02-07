import {FC} from "react";
import {SiteNavbar} from "../shared/SiteNavbar";
import {DishesSection} from "./DishesSection";
import './Dishes.css';
import {Footer} from "../shared/Footer";

export const DishesPage: FC = () => {
  return (
    <main className={"dishes-page"}>
      <SiteNavbar />
      <DishesSection />
      <Footer />
    </main>
  );
}