import React from 'react';
import './pages/home/Home.tsx';
import './components/statics/navbar/NavBar';
import './components/statics/footer/Footer';
import { Grid } from '@material-ui/core';
import Home from './pages/home/Home';
import './App.css';
import NavBar from './components/statics/navbar/NavBar';
import Footer from './components/statics/footer/Footer';



function App() {
  return (
          <>
            <NavBar />
            <Home />
            <Footer />
          </>
          );
}

export default App;
