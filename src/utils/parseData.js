import config from './config';

const decorateFloorErr = (floor) => {
  let errors = {
    tempErr: [],
    unresponsive: [],
  };
  // Parse the common area
  // Parse each unit
  floor.errors = errors;
  return floor;
};

const checkSpaces = (spaces, errors) => {
  // For each space check all the radiators
};

const checkRadiator = (radiator, errors) => {};

const checkRadiatorTemp = (node) => {};

const checkIfUnresponsive = (node) => {};

/**
 * Will decorate the node with a 'room_feel' property
 * @param {Object} node Radiator node object
 * @return {Object} Radiator node object
 */
const decorateRoomFeel = (node) => {
  let temp = node.room_temperature;
  for (const el of config.ROOM_TEMP_SCALE) {
    if (temp < el.high) {
      node.room_feel = el.name;
      return node;
    }
  }
};

export default { decorateFloorErr };
