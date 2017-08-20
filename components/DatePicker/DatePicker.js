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
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import cx from 'classnames';
import { fetchRooms } from '../../src/actions';

import s from './DatePicker.css';

class DatePicker extends React.Component {

  static propTypes = {
    date: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {
      date: this.getDate( props.date || "today" )
    };
  }

  getDate( date ) {
    if( date === "today" || date === "now" ) return moment();
    else return moment(date, "x");
  }

  changeDate(change) {
    let { date } = this.state;

    date = date.add(change, 'days');
    this.props.fetchRooms( date.unix() );
    this.setState({ date });
  }

  render() {
    const { date } = this.state;

    return (
      <div>
        <span className={cx(s.date)}>{date.format("D.M.YYYY")}</span>
        <button
          className={cx('btn', 'btn-sm', 'btn-default', 'float-left', s.button)}
          onClick={() => this.changeDate(-1)}
        >
          &lArr;
        </button>
        <button
          className={cx('btn', 'btn-sm', 'btn-default', 'float-right', s.button)}
          onClick={() => this.changeDate(+1)}
        >
          &rArr;
        </button>
      </div>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchRooms }, dispatch);
}

export default connect(null, mapDispatchToProps)(DatePicker);
