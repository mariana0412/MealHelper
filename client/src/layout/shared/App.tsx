import React, {FC} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Shared.css';
import {HomePage} from "../home/HomePage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {DishesPage} from "../dishes/DishesPage";

const App: FC = () => {
  return (
    <div className={"application"}>
      <BrowserRouter>
        <Routes>
          <Route index path={'/'} element={<HomePage />} />
          <Route path={'/dishes'} element={<DishesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
