import axios from 'axios';

const HOST = window.location.origin;

/**
 *
 * @param {string} buildingName Name of building
 * @returns {Promise} Promise that will resolve to result of http request
 */
const buildingData = (buildingName) => {
  return axios.get(HOST + '/api/' + buildingName);
};

export default { buildingData };
