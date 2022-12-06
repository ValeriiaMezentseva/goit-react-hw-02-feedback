import PropTypes from 'prop-types';
import { FeedbackButton, ButtonsList, ButtonReset } from './FeedbackButtons.styled'


const FeedbackOptions = ({ buttons, onLeaveFeedback, onReset}) => {
    return (
        <ButtonsList> 
            {buttons.map(button => (
                <FeedbackButton type="button"
                    key={button}
                    id={button}
                    onClick={() => onLeaveFeedback(button)}
                    category={button}> {button[0].toUpperCase() + button.slice(1)}
                </FeedbackButton>
            )
            )}
            <ButtonReset type='button'
                onClick={onReset}>Reset
            </ButtonReset>
        </ButtonsList>
    )
}
FeedbackOptions.propTypes = {
    buttons: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;