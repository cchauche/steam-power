import fetch from './fetch';
import BuildingParser from './BuildingParser';
import config from './config';

/**
 *
 * @param {Number} millisUTC Milliseconds of UTC Time
 * @returns {String} String of date in local time formatted 'HH:MM [AM,PM] MMM DD, YYYY'
 */
const toLocalTimeDateString = (millisUTC) => {
  let dateOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  let timeOptions = {
    hour: '2-digit',
    minute: '2-digit',
  };
  let date = new Date(millisUTC);
  let dateString = date.toLocaleDateString(undefined, dateOptions);
  let timeString = date.toLocaleTimeString([], timeOptions);
  return timeString + ' ' + dateString;
};

const toFriendlyFloorName = (floorName) => {
  return isNaN(parseInt(floorName)) ? floorName : 'Floor ' + floorName;
};

export {
  fetch,
  BuildingParser,
  config,
  toLocalTimeDateString,
  toFriendlyFloorName,
};
