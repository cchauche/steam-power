import config from './config';

class BuildingParser {
  constructor(building) {
    this.floors = building.floors;
    this.retrievalTime = building.retrieved_at;
    this.unresponsiveCount = 0;
    this.tempErrCount = 0;
  }

  parseBuilding() {
    for (const floor of this.floors) {
      this.decorateFloorErr(floor);
    }
  }

  decorateFloorErr(floor) {
    const errors = {
      tempErr: [],
      unresponsive: [],
    };
    // Parse the common area
    // Parse each unit
    floor.errors = errors;
    return floor;
  }

  checkSpaces(spaces, errors) {
    // For each space check all the radiators
  }

  checkRadiator(radiator) {}

  checkRadiatorTemp(node) {
    let radiatorTemp = node.radiator_temperature;
    let roomTemp = node.room_temperature;
    if (Math.abs(radiatorTemp - roomTemp) <= config.RADIATOR_TEMP_RANGE) {
      node.hasTempErr = true;
      this.tempErrCount += 1;
      return true;
    }
    node.hasTempErr = false;
    return false;
  }

  checkIfUnresponsive(node) {
    let messageTime = node.last_message;
    if (this.retrievalTime - messageTime >= config.RESPONSE_INTERVAL) {
      node.isUnresponsive = true;
      this.unresponsiveCount += 1;
      return true;
    }
    node.isUnresponsive = false;
    return false;
  }

  /**
   * Will decorate the node with a 'room_feel' property
   * @param {Object} node Radiator node object
   * @return {Object} Radiator node object
   */
  decorateRoomFeel(node) {
    let temp = node.room_temperature;
    for (const el of config.ROOM_TEMP_SCALE) {
      if (temp < el.high) {
        node.room_feel = el.name;
        return node;
      }
    }
  }
}

export default { BuildingParser };
