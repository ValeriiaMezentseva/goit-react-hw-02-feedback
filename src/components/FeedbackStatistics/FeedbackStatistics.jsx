import PropTypes from 'prop-types';
import { StatisticsContainer, StatisticsInfo, StatisticsList } from './FeedbackStatistics.styled';

const FeedbackStatistics = ({ good, neutral, bad, total, positiveFeedback }) => {
    return (
        <StatisticsContainer>
            <StatisticsList>
                <StatisticsInfo category="good">Good: {good} </StatisticsInfo>
                <StatisticsInfo category="neutral">Neutral: {neutral}</StatisticsInfo>
                <StatisticsInfo category="bad">Bad: {bad} </StatisticsInfo>
                <StatisticsInfo category="total">Total: {total} </StatisticsInfo>
                <StatisticsInfo>Positive Percent: {positiveFeedback}%</StatisticsInfo>
            </StatisticsList>
        </StatisticsContainer>
    )
}

FeedbackStatistics.propTypes = {
    good: PropTypes.number.isRequired, 
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.number.isRequired,
}

export default FeedbackStatistics;