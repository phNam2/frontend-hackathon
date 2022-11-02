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
import { AdvocateList, AdvocateDetails, FollowList } from './pages';

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="bg">
          <NavBar/>
          <Header/>
        </div>
        <Routes>
          <Route path="/follow" element={<FollowList /> } />
          <Route path="/advocates" element={<AdvocateList /> } />
          <Route path="/advocates/:username" element={<AdvocateDetails />}/>
        </Routes>
        <div>
          <Footer/>
        </div>
        
      </div>
    </Router>
  )
}

export default App