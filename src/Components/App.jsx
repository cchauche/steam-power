import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DRAWER_WIDTH, HEADER_HEIGHT } from './config/layoutConfig';
import CssBaseline from '@material-ui/core/CssBaseline';
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
