export default {
  RESPONSE_INTERVAL: 600000, // 10 Minutes in milliseconds
  RADIATOR_TEMP_RANGE: 50, // Radiator is bad if withing 50 deg of room
  ROOM_TEMP_SCALE: [
    { name: 'Cold', high: 70 },
    { name: 'Cozy', high: 75 },
    { name: 'Rather Warm', high: 80 },
    { name: 'Hot', high: null },
  ],
  BUILDING_DATA_INIT_STATE: {
    floors: [],
    name: '',
    retrieved_at: null,
    unresponsiveCount : 0,
    tempErrCount : 0,
    nodeCount : 0,
  },
};
