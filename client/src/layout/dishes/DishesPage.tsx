import {FC} from "react";
import {SiteNavbar} from "../shared/SiteNavbar";
import {DishesSection} from "./DishesSection";
import './Dishes.css';

export const DishesPage: FC = () => {
  return (
    <main className={"dishes-page"}>
      <SiteNavbar />
      <DishesSection />
    </main>
  );
}