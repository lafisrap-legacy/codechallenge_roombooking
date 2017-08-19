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

import { urlize } from '../../../src/utils';
import s from './PortfolioFilter.css';

class PortfolioFilter extends React.Component {
  static propTypes = {
    portfolio: PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      all: PropTypes.string,
      filters: PropTypes.array,
      elements: PropTypes.array
    })
  };

  constructor(props) {
    super(props);

    this.state = {
      allTopic: {}
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    const filters = (this.props.portfolio && this.props.portfolio.filters) || null;

    if (!filters) return <div className="spinner" />;

      // Prepare filter tabs
    const tabs = filters.map((filter, i) => (
      <li className="nav-item" key={filter.id}>
        <a
          className={`nav-link${!i ? ' active' : ''}`}
          data-toggle="tab"
          href={`#${filter.id}`}
          role="tab" aria-controls={filter.id}
          aria-expanded={!i ? 'true' : 'false'}
          onClick={() => this.state.allTopic[filter.id].click()}
        >
          {filter.name}
        </a>
      </li>
    ));

    // Prepare filter buttons
    const buttons = filters.map((filter, i) => {
      // Prepare one topic
      const topics = filter.topics.map((topic, j) => (
        <button
          type="button"
          className="control btn btn-secondary btn-sm mx-2 mb-4"
          data-filter={`.${urlize(topic)}`}
          key={urlize(topic)}
          ref={(t) => {
            if (!j) this.state.allTopic[filter.id] = t;
            return null;
          }}
        >
          {!j ? this.props.portfolio.all : topic}
        </button>
      ));

      // Collect topics
      return (
        <div
          role="tabpanel"
          className={cx('tab-pane', `fade${!i ? ' active show' : ''}`, s.tabPane)}
          id={filter.id}
          key={filter.id}
          aria-labelledby={`${filter.id}_tab`}
          aria-expanded={!i ? 'true' : 'false'}
        >
          <div className="controls mt-3">
            {topics}
          </div>
        </div>
      );
    });

    // Collect tabs and buttons
    return (
      <div>
        <ul className="nav nav-tabs" id="portfolio-group" role="tablist">
          { tabs }
        </ul>
        <div className="tab-content" id="myTabContent">
          { buttons }
        </div>
      </div>
    );
  }
}

function mapStateToProps({ portfolio }) {
  return { portfolio };
}

export default connect(mapStateToProps)(PortfolioFilter);
