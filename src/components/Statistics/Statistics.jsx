import React from 'react';
import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem/StatisticsItem';
import s from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <div className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.stat__list}>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem key={id} label={label} percentage={percentage} />
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
