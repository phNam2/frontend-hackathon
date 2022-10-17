import React from 'react';
import './App.css';
import './index.css';
import { NavBar} from './components';
import { Header, Footer } from './containers';
import { AdvocateList } from './pages';

const App = () => {
  return (
    <div>
        <div className="bg">
          <NavBar/>
          <Header/>
        </div>
        <div>
          <AdvocateList/>
          <Footer/>
        </div>

    </div>
  )
}

export default App