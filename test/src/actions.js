
import { expect } from 'chai';
import rewire from 'rewire';
// sinon

// Modules to be tested
const actions = rewire('../../src/actions');

// Private functions of modules
const fetchRooms = actions.__get__('fetchRooms');

process.env.NODE_ENV = 'test';

const testData = {
  fetchRooms: "today"
};

describe('Actions, ', () => {

  it('Should return room data', () => {
    const {type, payload} = fetchRooms(testData.fetchRooms);

    return payload.then(data => {
      data.data.map(
        d => {
          expect(d.name).to.be.a('string');
          expect(d.location).to.be.a('string');
          expect(d.size).to.be.a('string');
          expect(d.capacity).to.be.a('number');
          expect(d.equipment).to.be.an('array');
          expect(d.avail).to.be.an('array');
          expect(d.images).to.be.an('array');
      });
    })
  });
});
