import React from 'react';
import PropTypes from 'prop-types';
import styles from './statistics.module.css'

export default function StatisticsItem({label, percentage}) {
  return (
    <div>
      <li className={styles.item}>
        <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
      </li>
    </div>
  );
}
StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired
}