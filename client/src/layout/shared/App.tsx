import React, {FC} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {MainPage} from "../mainPage/MainPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const App: FC = () => {
  return (
    <div className={"application"}>
      <BrowserRouter>
        <Routes>
          <Route index path={'/'} element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
