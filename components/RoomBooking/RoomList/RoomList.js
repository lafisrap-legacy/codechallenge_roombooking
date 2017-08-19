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
import cx from 'classnames';

import RoomInfo from '../RoomInfo';

import s from './RoomList.css';

class RoomList extends React.Component {

  static propTypes = {
    rooms: PropTypes.arrayOf(PropTypes.shape({
      avail: PropTypes.arrayOf(PropTypes.string),
      capacity: PropTypes.number,
      equipment: PropTypes.arrayOf(PropTypes.string),
      images: PropTypes.arrayOf(PropTypes.string),
      location: PropTypes.string,
      name: PropTypes.string,
      size: PropTypes.string
    })).isRequired
  };

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    const rooms = this.props.rooms;

    if (!rooms.length) return <div className="spinner" />;
    return (
      <div className={cx('room-list', 'clearfix', s.roomlist)}>
        <div id="roombooking__roomlist" role="tablist" aria-multiselectable="true">
          {this.props.rooms.map((room, i) => <RoomInfo key={`${room.name}_${room.size}`} index={i} info={room} />)}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ rooms }) {
  return { rooms: rooms.rooms };
}

export default connect(mapStateToProps)(RoomList);
