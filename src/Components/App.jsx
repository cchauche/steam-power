import React, { useState, useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { DRAWER_WIDTH, HEADER_HEIGHT } from './config/layoutConfig';
import { fetch, BuildingParser, config } from '../utils';
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
  const [buildingData, setBuildingData] = useState(
    config.BUILDING_DATA_INIT_STATE
  );
  const [selectedFloor, setSelectedFloor] = useState(null);

  useEffect(() => {
    fetch.buildingData('1234_Test_Street').then(({ data }) => {
      const buildingParser = new BuildingParser(data);
      buildingParser.parseBuilding();
      data.unresponsiveCount = buildingParser.unresponsiveCount;
      data.tempErrCount = buildingParser.tempErrCount;
      data.nodeCount = buildingParser.nodeCount;
      setBuildingData(data);
    });
  }, []);

  return (
    <>
      <CssBaseline />
      <Header />
      <Sidebar
        floors={buildingData.floors}
        setSelectedFloor={setSelectedFloor}
        selectedFloor={selectedFloor}
        buildingName={buildingData.name}
      />
      <main className={classes.content}>
        <BuildingOverview
          lastReading={buildingData.retrieved_at}
          nodeCount={buildingData.nodeCount}
          unresponsiveCount={buildingData.unresponsiveCount}
          tempErrCount={buildingData.tempErrCount}
        />
        <FloorDetail
          floor={
            selectedFloor === null ? null : buildingData.floors[selectedFloor]
          }
        />
      </main>
    </>
  );
}

export default App;
