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

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import { isEmpty } from 'lodash';

import s from './RoomBooking.css';
import DatePicker from '../DatePicker';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';

class RoomBooking extends Component {

  static propTypes = {
    date: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.state = {
      filteredList: null
    };
  }

  componentDidUpdate() {
  }

  componentWillUnmount() {
  }

  setFilteredList(filteredList) {
    this.setState({filteredList});
  }

  render() {
    let {date} = this.props;

    if( !date ) date = "today";

    return (
      <section className={cx('room-booking-section', s.section)}>
        <div className="container text-center fadeIn">
          <div className={cx('row', s.row)}>
            <DatePicker date={date} />
            <RoomFilter setFilteredList={this.setFilteredList} />
          </div>
          <div className={cx('row', s.row)}>
            <RoomList date={date} />
          </div>
        </div>
      </section>
    );
  }
}

export default RoomBooking;
