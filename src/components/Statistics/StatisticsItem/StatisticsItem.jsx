import React from 'react';
import PropTypes from 'prop-types';
import s from '../StatisticsItem/StatisticsItem.module.css'

export default function StatisticsItem({label, percentage}) {
  return (
    <div>
      <li className={s.item}>
        <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
      </li>
    </div>
  );
}
StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired
}