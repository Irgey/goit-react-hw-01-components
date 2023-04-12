import PropTypes from 'prop-types';
import css from './Statistics.module.css';
const Statistics = ({ title, stats }) => {
  function generateRandomHexColor() {
    let hex = '#';
    const characters = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) {
      hex += characters[Math.floor(Math.random() * 16)];
    }
    return hex;
  }

  console.log(generateRandomHexColor());
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      {stats.length > 0 && (
        <ul className={css.statList}>
          {stats.map(({ label, percentage, id }) => {
            return (
              <li
                style={{ backgroundColor: generateRandomHexColor() }}
                className={css.item}
                key={id}
              >
                <span className={css.label}>{label}</span>
                <span className={css.percentage}>{percentage}</span>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      percentage: PropTypes.number,
      id: PropTypes.string,
    })
  ),
};
