import React from 'react';
import AppBar from './Header/Header';
import Navigation from './Navigation/Navigation';
import BuildingOverview from './Overview/BuildingOverview';
import FloorDetail from './FloorDetail/FloorDetail';

function App() {
  return (
    <>
      <AppBar />
      <Navigation />
      <BuildingOverview />
      <FloorDetail />
    </>
  );
}

export default App;
