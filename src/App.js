import React from 'react';
import './App.css';
import './reset.css';
import './icon-style.css';
import Header from './components/Header';
import Main from './components/Main';

const App = () => {
  return (
    <div className='page-wrapper'>
    <Header/>
    <Main/>
  </div>
  );
}

export default App;
