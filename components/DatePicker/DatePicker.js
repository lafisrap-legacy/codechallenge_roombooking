/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import history from '../../src/history';

class DatePicker extends React.Component {

  static propTypes = {
    date: PropTypes.string,
  };

  render() {
    const { date } = this.props; // eslint-disable-line no-use-before-define
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    return (
      <div> 
      DatePicker
      </div>
    );
  }

}

export default DatePicker;
