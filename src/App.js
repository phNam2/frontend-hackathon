import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import React from 'react';
import './App.css';
import './index.css';
import { NavBar } from './components';
import { Header, Footer } from './containers';
import { AdvocateList } from './pages';

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="bg">
          <NavBar/>
          <Header/>
        </div>
        <Routes>
          <Route path="/advocates" element={<AdvocateList /> } />
          {/* <Route path="advocates/:id" element={<RiderPage />}/> */}
        </Routes>
        <div>
          <Footer/>
        </div>
        
      </div>
    </Router>
  )
}

export default App