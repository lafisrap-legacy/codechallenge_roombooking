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
import cx from 'classnames';

import s from './BookingSchedule.css';

const TIME_START = 7; // h
const TIME_END = 19; // h
const TIME_STEPS = 4; // x per hour
const FREE = 0;
const BOOKED = 1;
const timespanRe = /([\d]{2}):([\d]{2})[^\d]+([\d]{2}):([\d]{2})/;

class BookingSchedule extends React.Component {
  static propTypes = {
    avail: PropTypes.arrayOf(PropTypes.string)
  };

  constructor(props) {
    super(props);

    this.state = {
      schedule: this.getSchedule(props.avail),
      scale: this.getScale()
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  getSchedule(avail) {
    let schedule = new Array((TIME_END - TIME_START) * TIME_STEPS).fill(FREE);

    // Retrieve time spans from avail data
    const timespans = avail.map(timespan => {
      const ts = timespan.match(timespanRe);

      return [(parseInt(ts[1]) - TIME_START) * TIME_STEPS + parseInt(ts[2]) / 60 * TIME_STEPS,
              (parseInt(ts[3]) - TIME_START) * TIME_STEPS + parseInt(ts[4]) / 60 * TIME_STEPS];
    });

    // Read them into a booking array
    timespans.map(timespan => {
      for( let i=timespan[0] ; i<timespan[1] ; i++ ) schedule[i] = BOOKED;
    });

    return schedule;
  }

  getScale() {
    let scale = [];

    for( let hour=TIME_START; hour<TIME_END ; hour++ ) {
      for( let i=0, minutes=60/TIME_STEPS ; i<TIME_STEPS ; i++ ) {
        scale.push({
          hour,
          minutes: minutes * i
        })
      }
    }

    return scale;
  }

  render() {
    const {schedule, scale} = this.state;

    return (
      <div className={cx(s.wrapper)} >
        <table className={cx(s.table)}>
          <tbody>
            <tr>
              {this.state.schedule.map((booked, i) => 
                <td
                  key={`booked${i}`}
                  className={cx(s.period, booked? s.booked : s.free, i%TIME_STEPS? s.fraction : s.full)}
                >
                  {i%TIME_STEPS? scale[i].minutes : scale[i].hour}
                </td>
              )}
            </tr>
          </tbody>
        </table>

      </div>
    )
  }
}

export default BookingSchedule;
