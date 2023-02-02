import React, {FC} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {HomePage} from "../home/HomePage";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const App: FC = () => {
  return (
    <div className={"application"}>
      <BrowserRouter>
        <Routes>
          <Route index path={'/'} element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
