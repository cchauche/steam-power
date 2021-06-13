const decorateFloorErr = (floor) => {
  let errors = {
    tempErr: [],
    unresponsive: []
  };
  // Parse the common area
  // Parse each unit
  floor.errors = errors;
  return floor;
};

const checkSpaces = (spaces, errors) => {

};

const checkRadiatorTemp = (node) => {

};

const checkIfUnresponsive = (node) => {

};

const checkRoomTemp = (node) => {

};


export default {decorateFloorErr};