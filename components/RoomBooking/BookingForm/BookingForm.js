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

import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';

import s from './BookingForm.css';

const BookingForm = () =>
  <div className={cx(s.wrapper)} >
    Book Room on {this.props.rooms.date}
  </div>;


function mapStateToProps({ rooms }) {
  return { rooms };
}

export default connect(mapStateToProps)(BookingForm);
