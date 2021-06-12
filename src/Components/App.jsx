import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import BuildingOverview from './Overview/BuildingOverview';
import FloorDetail from './FloorDetail/FloorDetail';

function App() {
  return (
    <>
      <CssBaseline />
      <Sidebar />
      <div>
        <Header />
      </div>
      <BuildingOverview />
      <FloorDetail />
    </>
  );
}

export default App;
