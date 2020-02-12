import React from 'react';

import Routes from './routes'

import './styles.css';

import Header from './components/Header'
// import Main from './pages/Main'

const App = () => {
  return (
    <>
      <Header />
      <Routes />
    </>
  )
}

export default App;
