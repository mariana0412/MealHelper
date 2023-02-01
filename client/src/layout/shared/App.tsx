import React, {FC} from 'react';
import {Header} from "./Header";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const App: FC = () => {
  return (
    <div className={"application"}>
      <Header />
    </div>
  );
}

export default App;
