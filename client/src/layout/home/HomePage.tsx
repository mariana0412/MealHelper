import {FC} from "react";
import {Header} from "../shared/Header";
import {Footer} from "../shared/Footer";
import {PopularDishesSection} from "./PopularDishesSection";

export const HomePage: FC = () => {
  return (
    <div className={"main-page"}>
      <Header />
      <PopularDishesSection />
      <Footer />
    </div>
  );
}