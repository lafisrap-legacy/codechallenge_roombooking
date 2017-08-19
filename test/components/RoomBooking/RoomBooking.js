
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import React from 'react';
import rewire from 'rewire';
// sinon

// Modules to be tested

// Private functions of modules

// Components to be tested
const RoomBookingWrapper = rewire('../../../components/RoomBooking');
const RoomBooking = RoomBookingWrapper.__get__('RoomBooking');

process.env.NODE_ENV = 'test';

const testData = {
  date: "today"
};

describe('RoomBooking, ', () => {

  it('Missing date', () => {
    const wrapper = shallow(<RoomBooking />);

    expect(wrapper.find('[date="today"]')).to.have.length(2);
  });

  it('Date prop', () => {
    const wrapper = shallow(<RoomBooking />);
    wrapper.setProps(testData);

    expect(wrapper.find('[date="today"]')).to.have.length(2);
  });
});
