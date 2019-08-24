import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from '../src/Component/Componentjs';
import {BrowserRouter,Route} from 'react-router-dom'
import Router from './Component/Componentjs/Routing'
import StudentRegistration from '../src/Component/Componentjs/NewRegistration'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router/>
      {/* <StudentRegistration/> */}


      </header>
    </div>
  );
}

export default App;
