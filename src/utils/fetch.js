import axios from 'axios';

const HOST = window.location.origin;

/**
 * Fetch building data from the radiator api
 * @param {string} buildingName Name of building
 * @returns {Promise} Promise that will resolve to a building object
 */
const buildingData = (buildingName) => {
  return axios.get(HOST + '/api/' + buildingName);
};

export default { buildingData };
