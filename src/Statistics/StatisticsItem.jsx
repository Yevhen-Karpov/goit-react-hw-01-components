import React from 'react';
import PropTypes from 'prop-types';

export default function StatisticsItem({label, percentage}) {
  return (
    <div>
      <li class="item">
        <span class="label">{label}</span>
      <span class="percentage">{percentage}</span>
      </li>
    </div>
  );
}
StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired
}