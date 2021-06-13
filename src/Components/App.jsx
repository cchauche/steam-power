import React, { useState, useEffect } from 'react';
import { CssBaseline, makeStyles } from '@material-ui/core';
import { DRAWER_WIDTH, HEADER_HEIGHT } from './config/layoutConfig';
import axios from 'axios';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import BuildingOverview from './Overview/BuildingOverview';
import FloorDetail from './FloorDetail/FloorDetail';

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2),
    paddingLeft: DRAWER_WIDTH + theme.spacing(2),
    paddingTop: HEADER_HEIGHT + theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();
  const [buildingData, setBuildingData] = useState({});

  useEffect(() => {
    // Fetch data
    axios.get('/api/1234_test_street').then(({ data }) => {
      setBuildingData(data);
    });
  }, []);

  return (
    <>
      <CssBaseline />
      <Header />
      <Sidebar />
      <main className={classes.content}>
        <BuildingOverview />
        <FloorDetail />
      </main>
    </>
  );
}

export default App;
