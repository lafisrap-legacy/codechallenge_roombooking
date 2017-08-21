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
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import cx from 'classnames';
import { fetchRooms, setDate } from '../../src/actions';
import DatePicker from './DatePicker';

import s from './DateModifier.css';

class DateModifier extends React.Component {

  static propTypes = {
    date: PropTypes.string,
    fetchRooms: PropTypes.func,
    setDate: PropTypes.func
  };

  static getDate(date) {
    if (date === 'today' || date === 'now') return moment();
    return moment(date, 'x');
  }

  constructor(props) {
    super(props);

    this.state = {
      date: this.constructor.getDate(props.date || 'today')
    };
  }

  changeDate(change) {
    let { date } = this.state;

    date = date.add(change, 'days');
    this.props.setDate(date.unix());
    this.props.fetchRooms(date.unix());
    this.setState({ date });
  }

  render() {
    const { date } = this.state;

    return (
      <div>
        <span className="dropdown">
          <span className={cx('dropdown-toggle', s.date)} id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {date.format('D.M.YYYY')}
          </span>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <DatePicker date={date.toDate()} />
          </div>
        </span>
        <button
          className={cx('btn', 'btn-default', 'float-left', s.button)}
          onClick={() => this.changeDate(-1)}
        >
          &lArr;
        </button>
        <button
          className={cx('btn', 'btn-default', 'float-right', s.button)}
          onClick={() => this.changeDate(+1)}
        >
          &rArr;
        </button>
      </div>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchRooms, setDate }, dispatch);
}

export default connect(null, mapDispatchToProps)(DateModifier);
