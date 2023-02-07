import React, {FC} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Shared.css';
import {HomePage} from "../home/HomePage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {DishesPage} from "../dishes/DishesPage";
import {Navigate} from "react-router";
import {DishDetailsPage} from "../dishes/DishDetailsPage";

const App: FC = () => {

  return (
    <div className={"application"}>
      <BrowserRouter>
        <Routes>
          <Route index path={'/'} element={<HomePage />} />
          <Route path={'/dishes'} element={<DishesPage />} />
          <Route path={'/about'} element={<Navigate to={'/'} replace state={{aboutSection: true}} />} />
          <Route path={'/dishes/:id'} element={<DishDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
