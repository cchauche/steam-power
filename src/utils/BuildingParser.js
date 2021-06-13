import config from './config';

/**
 * @param {Object} building Cozy data object for the whole building
 */
export default class BuildingParser {
  constructor(building) {
    this.floors = building.floors;
    this.retrievalTime = building.retrieved_at;
    this.unresponsiveCount = 0;
    this.tempErrCount = 0;
    this.nodeCount = 0;
  }

  /**
   * Method that should be used to parse all the building data finding
   * and reporting any node errors
   * @returns {Array} Returns array of floor objects after being decorated
   * with errors
   */
  parseBuilding() {
    for (const floor of this.floors) {
      this.decorateFloorErr(floor);
    }
    return this.floors;
  }

  /**
   * This function calls a series of other functions that check the entire
   * floor's nodes for errors.  Any errors that are found are added to the
   * 'errors' object which is is then added to the floor object before
   * returning the floor.
   * @param {Object} floor Floor object
   * @returns {Object} Same floor object after being decorated
   */
  decorateFloorErr(floor) {
    const errors = {
      tempErr: [],
      unresponsive: [],
    };
    this.checkSpaces(floor.spaces);
    // Parse each unit
    floor.units.forEach((unit) => {
      this.checkSpaces(unit.spaces, errors);
    });
    floor.errors = errors;
    return floor;
  }

  /**
   *
   * @param {Object} spaces Spaces object
   * @param {Object} errors Errors object that is passe down from floor
   * to be decorated with any errors.
   */
  checkSpaces(spaces, errors) {
    spaces.forEach((space) => {
      space.radiators.forEach((radiator) => {
        this.checkRadiator(radiator, errors);
      });
    });
  }

  /**
   *
   * @param {Object} radiator Radiator object
   * @param {Object} errors Errors object that is passe down from floor
   * to be decorated with any errors.
   */
  checkRadiator(radiator, errors) {
    for (const node of radiator.nodes) {
      this.nodeCount += 1;
      if (this.checkRadiatorTemp(node)) {
        errors.tempErr.push(node);
      }
      if (this.checkIfUnresponsive(node)) {
        errors.unresponsive.push(node);
      }
      this.decorateRoomFeel(node);
    }
  }

  /**
   *
   * @param {Object} node Radiator node object
   * @returns {Boolean} Returns if radiator temp is abnormal
   */
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

  /**
   *
   * @param {Object} node Radiator node object
   * @returns {Boolean} Returns if node is unresponsive
   */
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
