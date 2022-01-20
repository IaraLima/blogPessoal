import React from 'react';
import './pages/home/Home.tsx';
import { Grid } from '@material-ui/core';
import './App.css';
import Home from './pages/home/Home';


function App() {
  return (
          <>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Home />
            </Grid>
            <Grid item xs={12} sm={6}>
            <Home />
            </Grid>
            <Grid item xs={12} sm={6}>
            <Home />
            </Grid>
            <Grid item xs={12} sm={3}>
            <Home />
            </Grid>
            <Grid item xs={12} sm={3}>
            <Home />
            </Grid>
            <Grid item xs={12} sm={3}>
            <Home />
            </Grid>
            <Grid item xs={12} sm={3}>
            <Home />
            </Grid>
          </Grid>
          </>
          );
}

export default App;