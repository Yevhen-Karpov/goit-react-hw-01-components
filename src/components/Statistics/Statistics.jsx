import React from 'react';
import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';
import styles from './statistics.module.css';

export default function Statistics( {title, stats} ) {
  return (
      <div className={styles.statistics}>
          
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.stat__list}>
        {stats.map(stat => (
          <StatisticsItem
            key={stat.id}
            label={stat.label}
            percentage={stat.percentage}
          />
        ))}
      </ul>
    </div>
  );
}
Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};