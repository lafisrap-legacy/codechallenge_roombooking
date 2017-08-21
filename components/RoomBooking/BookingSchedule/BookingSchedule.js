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

  static getScale() {
    const scale = [];

    for (let hour = TIME_START; hour < TIME_END; hour += 1) {
      for (let i = 0, minutes = 60 / TIME_STEPS; i < TIME_STEPS; i += 1) {
        scale.push({
          hour,
          minutes: minutes * i
        });
      }
    }

    return scale;
  }

  static getSchedule(avail) {
    const schedule = new Array((TIME_END - TIME_START) * TIME_STEPS).fill(FREE);

    // Parse time spans from avail data
    const timespans = avail.map((timespan) => {
      const ts = timespan.match(timespanRe);

      return [((parseInt(ts[1], 10) - TIME_START) * TIME_STEPS) +
        ((parseInt(ts[2], 10) / 60) * TIME_STEPS),

        ((parseInt(ts[3], 10) - TIME_START) * TIME_STEPS) +
        ((parseInt(ts[4], 10) / 60) * TIME_STEPS)];
    });

    // Read them into a booking array
    timespans.forEach((timespan) => {
      for (let i = timespan[0]; i < timespan[1]; i += 1) schedule[i] = BOOKED;
    });

    return schedule;
  }

  constructor(props) {
    super(props);

    this.state = {
      schedule: this.constructor.getSchedule(props.avail),
      scale: this.constructor.getScale()
    };
  }

  render() {
    const { scale } = this.state;

    return (
      <div className={cx(s.wrapper)} >
        <table className={cx(s.table)}>
          <tbody>
            <tr>
              {this.state.schedule.map((booked, index) =>
                <td
                  // eslint-disable-next-line react/no-array-index-key
                  key={`booked${index}`}
                  className={cx(
                    s.period, booked ? s.booked : s.free,
                    index % TIME_STEPS ? s.fraction : s.full
                  )}
                >
                  {index % TIME_STEPS ? scale[index].minutes : scale[index].hour}
                </td>
              )}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default BookingSchedule;
