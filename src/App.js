import React from 'react';
import './App.css';
import './index.css';
import { NavBar, List } from './components';
import { Header, Footer } from './containers';

const App = () => {
  return (
    <div>
        <div className="bg">
          <NavBar/>
          <Header/>
        </div>
        <div>
          <List/>
          <Footer/>
        </div>

    </div>
  )
}

export default App