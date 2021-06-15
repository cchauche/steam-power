import { describe, expect, test } from '@jest/globals';
import BuildingParser from './BuildingParser';

const tempErrNode = {
  last_message: 1617840671000,
  lora_euid: 'D1E720CCCC347E6F',
  radiator_temperature: 80,
  room_temperature: 71,
};

const unresponsiveNode = {
  last_message: 1617657051000,
  lora_euid: '658914C159839C21',
  radiator_temperature: 218,
  room_temperature: 75,
};

const goodNode = {
  last_message: 1617840671000,
  lora_euid: '3C53C5A4B807AD39',
  radiator_temperature: 215,
  room_temperature: 71,
};

const sampleBuilding1 = {
  name: '1234 Test Street',
  retrieved_at: 1617840940000,
  floors: [
    {
      level: 1,
      name: '1',
      spaces: [],
      units: [
        {
          name: '1A',
          spaces: [
            {
              name: 'Kitchen',
              radiators: [],
            },
            {
              name: 'Studio',
              radiators: [
                {
                  nodes: [tempErrNode, goodNode],
                  number: 1,
                },
                {
                  nodes: [unresponsiveNode],
                  number: 2,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const sampleBuilding2 = {
  floors: [
    {
      level: 1,
      name: '1',
      spaces: [],
      units: [
        {
          name: '1A',
          spaces: [
            {
              name: 'Kitchen',
              radiators: [],
            },
            {
              name: 'Studio',
              radiators: [
                {
                  nodes: [
                    {
                      last_message: 1617840671000,
                      lora_euid: 'D1E720CCCC347E6F',
                      radiator_temperature: 215,
                      room_temperature: 71,
                    },
                    {
                      last_message: 1617840671000,
                      lora_euid: '3C53C5A4B807AD39',
                      radiator_temperature: 215,
                      room_temperature: 71,
                    },
                  ],
                  number: 1,
                },
                {
                  nodes: [
                    {
                      last_message: 1617840786000,
                      lora_euid: '658914C159839C21',
                      radiator_temperature: 218,
                      room_temperature: 75,
                    },
                  ],
                  number: 2,
                },
              ],
            },
          ],
        },
        {
          name: '1B',
          spaces: [
            {
              name: 'Bedroom 1',
              radiators: [
                {
                  nodes: [
                    {
                      last_message: 1617840815000,
                      lora_euid: 'F6965BF0B621748E',
                      radiator_temperature: 213,
                      room_temperature: 72,
                    },
                  ],
                  number: 1,
                },
              ],
            },
            {
              name: 'Bedroom 2',
              radiators: [
                {
                  nodes: [
                    {
                      last_message: 1617840803000,
                      lora_euid: 'DD2C8A5966757DA9',
                      radiator_temperature: 219,
                      room_temperature: 68,
                    },
                  ],
                  number: 1,
                },
              ],
            },
            {
              name: 'Living Room',
              radiators: [
                {
                  nodes: [
                    {
                      last_message: 1617840919000,
                      lora_euid: 'C3D3B94292D78BBA',
                      radiator_temperature: 220,
                      room_temperature: 69,
                    },
                  ],
                  number: 1,
                },
                {
                  nodes: [
                    {
                      last_message: 1617840823000,
                      lora_euid: 'E3517F273EBC311E',
                      radiator_temperature: 212,
                      room_temperature: 71,
                    },
                  ],
                  number: 2,
                },
              ],
            },
          ],
        },
        {
          name: '1C',
          spaces: [
            {
              name: 'Bedroom 1',
              radiators: [
                {
                  nodes: [
                    {
                      last_message: 1617840763000,
                      lora_euid: 'FE55275B554461AF',
                      radiator_temperature: 219,
                      room_temperature: 75,
                    },
                  ],
                  number: 1,
                },
              ],
            },
            {
              name: 'Bedroom 2',
              radiators: [
                {
                  nodes: [
                    {
                      last_message: 1617657051000,
                      lora_euid: '4F23C11506976B0F',
                      radiator_temperature: 211,
                      room_temperature: 74,
                    },
                  ],
                  number: 1,
                },
              ],
            },
            {
              name: 'Dining Room',
              radiators: [],
            },
            {
              name: 'Hallway',
              radiators: [
                {
                  nodes: [
                    {
                      last_message: 1617840811000,
                      lora_euid: '1CAFB11E12EC4D6F',
                      radiator_temperature: 219,
                      room_temperature: 76,
                    },
                  ],
                  number: 1,
                },
              ],
            },
            {
              name: 'Living Room',
              radiators: [
                {
                  nodes: [
                    {
                      last_message: 1617840665000,
                      lora_euid: '42FFB09C97242CA6',
                      radiator_temperature: 215,
                      room_temperature: 70,
                    },
                  ],
                  number: 1,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      level: 2,
      name: '2',
      spaces: [],
      units: [
        {
          name: '2A',
          spaces: [
            {
              name: 'Kitchen',
              radiators: [],
            },
            {
              name: 'Studio',
              radiators: [
                {
                  nodes: [
                    {
                      last_message: 1617667725000,
                      lora_euid: 'EB9E51A7C2A6B203',
                      radiator_temperature: 219,
                      room_temperature: 73,
                    },
                  ],
                  number: 1,
                },
                {
                  nodes: [
                    {
                      last_message: 1617840892000,
                      lora_euid: '91A43495CA292646',
                      radiator_temperature: 212,
                      room_temperature: 67,
                    },
                  ],
                  number: 2,
                },
              ],
            },
          ],
        },
        {
          name: '2C',
          spaces: [
            {
              name: 'Bedroom 1',
              radiators: [
                {
                  nodes: [
                    {
                      last_message: 1617840781000,
                      lora_euid: '6D113E0D0930A7BB',
                      radiator_temperature: 220,
                      room_temperature: 69,
                    },
                  ],
                  number: 1,
                },
              ],
            },
            {
              name: 'Bedroom 2',
              radiators: [
                {
                  nodes: [
                    {
                      last_message: 1617840766000,
                      lora_euid: '1ECADBEA19855EAE',
                      radiator_temperature: 220,
                      room_temperature: 75,
                    },
                  ],
                  number: 1,
                },
              ],
            },
            {
              name: 'Dining Room',
              radiators: [],
            },
            {
              name: 'Hallway',
              radiators: [
                {
                  nodes: [
                    {
                      last_message: 1617840770000,
                      lora_euid: '504A50A36AF6A83C',
                      radiator_temperature: 220,
                      room_temperature: 68,
                    },
                  ],
                  number: 1,
                },
              ],
            },
            {
              name: 'Living Room',
              radiators: [
                {
                  nodes: [
                    {
                      last_message: 1617840740000,
                      lora_euid: '8105E8E1429B8648',
                      radiator_temperature: 217,
                      room_temperature: 71,
                    },
                  ],
                  number: 1,
                },
              ],
            },
          ],
        },
        {
          name: '2D',
          spaces: [
            {
              name: 'Bedroom 1',
              radiators: [
                {
                  nodes: [],
                  number: 1,
                },
              ],
            },
            {
              name: 'Bedroom 2',
              radiators: [
                {
                  nodes: [],
                  number: 1,
                },
              ],
            },
            {
              name: 'Hallway',
              radiators: [],
            },
            {
              name: 'Kitchen',
              radiators: [
                {
                  nodes: [],
                  number: 1,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      level: 3,
      name: '3',
      spaces: [
        {
          name: 'Common Area',
          radiators: [
            {
              nodes: [
                {
                  last_message: 1617840827000,
                  lora_euid: 'D03E10C056AC63FE',
                  radiator_temperature: 215,
                  room_temperature: 72,
                },
              ],
              number: 1,
            },
            {
              nodes: [
                {
                  last_message: 1617840793000,
                  lora_euid: '9B58A6ED938194B1',
                  radiator_temperature: 214,
                  room_temperature: 72,
                },
              ],
              number: 2,
            },
          ],
        },
      ],
      units: [
        {
          name: '3E',
          spaces: [
            {
              name: 'Bedroom 1',
              radiators: [
                {
                  nodes: [
                    {
                      last_message: 1617414954000,
                      lora_euid: 'C007501342816B05',
                      radiator_temperature: 213,
                      room_temperature: 72,
                    },
                  ],
                  number: 1,
                },
              ],
            },
            {
              name: 'Kitchen',
              radiators: [],
            },
            {
              name: 'Living Room',
              radiators: [
                {
                  nodes: [
                    {
                      last_message: 1617840790000,
                      lora_euid: 'D4E2F4E52C289DBD',
                      radiator_temperature: 216,
                      room_temperature: 72,
                    },
                  ],
                  number: 1,
                },
                {
                  nodes: [
                    {
                      last_message: 1617840866000,
                      lora_euid: '3FE6722C5F73368C',
                      radiator_temperature: 220,
                      room_temperature: 73,
                    },
                  ],
                  number: 2,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      level: 4,
      name: 'Penthouse',
      spaces: [],
      units: [
        {
          name: 'PH',
          spaces: [
            {
              name: 'Bedroom 1',
              radiators: [
                {
                  nodes: [
                    {
                      last_message: 1617840677000,
                      lora_euid: '7F078DB9934E9780',
                      radiator_temperature: 216,
                      room_temperature: 70,
                    },
                  ],
                  number: 1,
                },
              ],
            },
            {
              name: 'Bedroom 2',
              radiators: [
                {
                  nodes: [
                    {
                      last_message: 1617840801000,
                      lora_euid: '64D780CA29069144',
                      radiator_temperature: 70,
                      room_temperature: 62,
                    },
                  ],
                  number: 1,
                },
              ],
            },
            {
              name: 'Dining Room',
              radiators: [
                {
                  nodes: [
                    {
                      last_message: 1617376227000,
                      lora_euid: '0456D06E0855C3A1',
                      radiator_temperature: 212,
                      room_temperature: 72,
                    },
                  ],
                  number: 1,
                },
                {
                  nodes: [
                    {
                      last_message: 1617840817000,
                      lora_euid: '5FB9B1A9D2EF3C76',
                      radiator_temperature: 215,
                      room_temperature: 75,
                    },
                  ],
                  number: 2,
                },
              ],
            },
            {
              name: 'Hallway',
              radiators: [
                {
                  nodes: [
                    {
                      last_message: 1617840706000,
                      lora_euid: '306B8EB3ABBFBB20',
                      radiator_temperature: 216,
                      room_temperature: 72,
                    },
                  ],
                  number: 1,
                },
              ],
            },
            {
              name: 'Kitchen',
              radiators: [],
            },
          ],
        },
      ],
    },
  ],
  name: '1234 Test Street',
  retrieved_at: 1617840940000,
};

describe('checkRadiatorTemp', () => {
  let testParser;
  beforeAll(() => {
    testParser = new BuildingParser(sampleBuilding1);
  });

  test('should return true for radiator temp <50 deg higher than room temp', () => {
    expect(testParser.checkRadiatorTemp({ ...tempErrNode })).toBe(true);
  });

  test('should decorate a cold radiator with "hasTempErr" set true', () => {
    let node = { ...tempErrNode };
    testParser.checkRadiatorTemp(node);
    expect(node.hasTempErr).toBe(true);
  });

  test('should return false for a normal radiator temp', () => {
    expect(testParser.checkRadiatorTemp({ ...goodNode })).toBe(false);
  });

  test('should decorate should decorate a cold radiator with "hasTempErr" set false', () => {
    let node = { ...goodNode };
    testParser.checkRadiatorTemp(node);
    expect(node.hasTempErr).toBe(false);
  });

  test('should increase tempErrCount for each error found', () => {
    let node = { ...tempErrNode };
    let parser = new BuildingParser(sampleBuilding1);
    expect(parser.tempErrCount).toBe(0);
    for (let i = 1; i < 6; i++) {
      parser.checkRadiatorTemp(node);
      expect(parser.tempErrCount).toBe(i);
    }
  });
});

describe('checkIfUnresponsive', () => {
  let testParser;
  beforeAll(() => {
    testParser = new BuildingParser(sampleBuilding1);
  });

  test('should return true for radiator node that has not reported in >10 minutes', () => {
    expect(testParser.checkIfUnresponsive({ ...unresponsiveNode })).toBe(true);
  });

  test('should decorate an unresponsive radiator with "isUnresponsive" set true', () => {
    let node = { ...unresponsiveNode };
    testParser.checkIfUnresponsive(node);
    expect(node.isUnresponsive).toBe(true);
  });

  test('should return false for a responsive node', () => {
    expect(testParser.checkIfUnresponsive({ ...goodNode })).toBe(false);
  });

  test('should decorate an unresponsive radiator with "isUnresponsive" set false', () => {
    let node = { ...goodNode };
    testParser.checkIfUnresponsive(node);
    expect(node.isUnresponsive).toBe(false);
  });

  test('should increase unresponsiveCount for each error found', () => {
    let node = { ...unresponsiveNode };
    let parser = new BuildingParser(sampleBuilding1);
    expect(parser.unresponsiveCount).toBe(0);
    for (let i = 1; i < 6; i++) {
      parser.checkIfUnresponsive(node);
      expect(parser.unresponsiveCount).toBe(i);
    }
  });
});

describe('decorateRoomFeel', () => {
  let testParser;
  beforeAll(() => {
    testParser = new BuildingParser(sampleBuilding1);
  });

  test('should return the same node it was given', () => {
    let node = { ...goodNode };
    let result = testParser.decorateRoomFeel(node);
    expect(result === node).toBe(true);
  });

  test('should decorate an node with "room_feel"', () => {
    expect(testParser.decorateRoomFeel({ ...goodNode }).room_feel).toBeTruthy();
  });

  test('should set room_feel to "Cold" for room temp <70f', () => {
    let node = { ...goodNode };
    for (let i = 54; i < 70; i += 5) {
      node.room_temperature = i;
      testParser.decorateRoomFeel(node);
      expect(node.room_feel).toBe('Cold');
    }
  });

  test('should set room_feel to "Cozy" for room temp  >70f and <75f', () => {
    let node = { ...goodNode };
    for (let i = 70; i < 75; i += 1) {
      node.room_temperature = i;
      testParser.decorateRoomFeel(node);
      expect(node.room_feel).toBe('Cozy');
    }
  });

  test('should set room_feel to "Rather Warm" for room temp >75f and <80f', () => {
    let node = { ...goodNode };
    for (let i = 75; i < 80; i += 1) {
      node.room_temperature = i;
      testParser.decorateRoomFeel(node);
      expect(node.room_feel).toBe('Rather Warm');
    }
  });

  test('should set room_feel to "Hot" for room temp >80f', () => {
    let node = { ...goodNode };
    for (let i = 80; i < 100; i += 5) {
      node.room_temperature = i;
      testParser.decorateRoomFeel(node);
      expect(node.room_feel).toBe('Hot');
    }
  });
});

describe('parseBuilding', () => {
  test('should start with tempErrCount, unresponsiveCount, and nodeCount initialized at 0', () => {
    let testParser = new BuildingParser(sampleBuilding1);
    let matchObj = {
      unresponsiveCount: 0,
      tempErrCount: 0,
      nodeCount: 0,
    };
    expect(testParser).toMatchObject(matchObj);
  });

  test('should find 1 unresponsive, 1 temp err and 1 good node', () => {
    let testParser = new BuildingParser(sampleBuilding1);
    testParser.parseBuilding();
    expect(testParser.nodeCount).toBe(3);
    expect(testParser.unresponsiveCount).toBe(1);
    expect(testParser.tempErrCount).toBe(1);
  });

  test('should find 1 temp err and 4 unresponsive nodes', () => {
    let testParser = new BuildingParser(sampleBuilding2);
    testParser.parseBuilding();
    expect(testParser.nodeCount).toBe(27);
    expect(testParser.unresponsiveCount).toBe(4);
    expect(testParser.tempErrCount).toBe(1);
  });
});
