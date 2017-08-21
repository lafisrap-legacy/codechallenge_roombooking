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

import React, { PropTypes } from 'react';
import DayPicker from 'react-day-picker';

class DatePicker extends React.Component {

  static propTypes = {
    date: PropTypes.instanceOf(Date)
  };

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const date = this.props.date;

    return <DayPicker month={date} />;
  }
}

export default DatePicker;
