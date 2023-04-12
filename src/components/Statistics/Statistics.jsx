import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
    return (<section class="statistics">
       {title && <h2 class="title">{title}</h2>}

        {stats.length > 0 && <ul class="stat-list">
            {stats.map(({ label, percentage, id }) => {
                return (<li class="item" key={id}>
                    <span class="label">{label}</span>
                    <span class="percentage">{percentage}</span>
                </li>)
            })}
    
        </ul>}
    </section>);

}

export default Statistics;

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape(
        {
            label: PropTypes.string,
        percentage: PropTypes.number,}
        
    ))
}