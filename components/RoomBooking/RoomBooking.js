/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint comma-dangle: [2, "never"] */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';

import s from './RoomBooking.css';
import DateModifier from '../DateModifier';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';

class RoomBooking extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: 'today'
    };
  }

  setFilteredList(filteredList) {
    this.setState({ filteredList });
  }

  render() {
    const { date } = this.state;

    return (
      <section className={cx('room-booking-section', s.section)}>
        <div className="container text-center fadeIn">
          <div className={cx('row', s.row)}>
            <div className={cx('col col-5')}>
              <DateModifier date={date} />
            </div>
            <div className={cx('col col-7')}>
              <RoomFilter setFilteredList={this.setFilteredList} />
            </div>
          </div>
          <div className={cx('row', s.row)}>
            <RoomList date={date} />
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps({ rooms }) {
  return { date: rooms.date };
}

export default connect(mapStateToProps)(RoomBooking);
