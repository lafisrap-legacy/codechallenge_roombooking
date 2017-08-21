
import { expect } from 'chai';

import rooms from '../../../src/reducers/rooms';
import { FETCH_ROOMS } from '../../../src/actions';
// sinon

process.env.NODE_ENV = 'test';

const testData = {
  type: FETCH_ROOMS,
  payload: {
    data: [{
      name: '3.11',
      location: 'Floor 3',
      equipment: [
        'Interactive Whiteboard',
        'Big Lego Set',
        'Laptop',
        '50\' Flatscreen',
        'Projector'
      ],
      size: '100m²',
      capacity: 33,
      avail: [
        '07:00 - 08:30',
        '09:30 - 19:00'
      ],
      images: [
        'assets/images/img05.jpg',
        'assets/images/img01.jpg',
        'assets/images/img02.jpg'
      ]
    }, {
      name: '1.10',
      location: 'Floor 1',
      equipment: [
        'Fridge with Softdrinks',
        '2 Laptops',
        'Projector',
        'Hi-Fi System',
        'Interactive Whiteboard'
      ],
      size: '25m²',
      capacity: 12,
      avail: [
        '07:00 - 14:00',
        '15:30 - 19:00'
      ],
      images: [
        'assets/images/img06.jpg',
        'assets/images/img04.jpg',
        'assets/images/img03.jpg'
      ]
    }]
  }
};

describe('Rooms reducer, ', () => {

  it('Should return sorted room data', () => {
    const res = rooms({}, testData);
    const room = res.rooms[0];

    expect(room.name).to.be.eql('1.10');
    expect(room.equipment).to.have.length(5);
  });
});
