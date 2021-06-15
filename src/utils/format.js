/**
 * Convert milliseconds in UTC time to a local time string formatted
 * 'HH:MM [AM,PM] MMM DD
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

/**
 * If the floor is just a number will prepend it with 'Floor' so it is
 * more communicative to users.
 * @param {string} floorName Name of the floor
 * @returns {string}
 */
const toFriendlyFloorName = (floorName) => {
  return isNaN(parseInt(floorName)) ? floorName : 'Floor ' + floorName;
};

export default { toLocalTimeDateString, toFriendlyFloorName };
