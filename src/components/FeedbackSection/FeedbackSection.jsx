import PropTypes from 'prop-types';
import {FeedbackSection, FeedbackTitle  } from './FeedbackSection.styled'

const Section = ({ title, children }) => {
    return (
            <FeedbackSection>
            <FeedbackTitle>{title}</FeedbackTitle>
            {children}
            </FeedbackSection>
        )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
}

export default Section;