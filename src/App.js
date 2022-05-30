import React, { Fragment } from 'react';
import GlobalStyle from './globalStyles.jsx';
import Discover from './components/Discover.jsx';
import HomePage from './components/HomePage.jsx';
import Join from './components/Join.jsx';
import NavBar from './components/NavBar.jsx';


function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <NavBar/>
      <HomePage />
      <Discover />
      <Join />
    </Fragment>
  );
}

export default App;
