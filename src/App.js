import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';

import { useEffect } from 'react';
import Programmer from './components/Programmer/Programmer';






function App() {

  return (
    <div class="main-container">
      <Header></Header>
      <Programmer></Programmer>


    </div>
  );
}

export default App;
