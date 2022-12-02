import Section from "./FeedbackSection";
import FeedbackOptions from "./FeedbackButtons";
import FeedbackStatistics from "./FeedbackStatistics";
import Notification from "./FeedbackNotification";
import { Component } from "react";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0, 
    bad: 0, 
  }
  
  reset = () => {
    this.setState(
      { good: 0, neutral: 0, bad: 0 }
    );
  }

  feedbackHandler = (value) => {
    this.setState(prevState => {
      return { [value] : prevState[value] +1}
    })
  }
  
  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad; 
  }

  positiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Number.parseInt(
      this.totalFeedback() > 0
        ? (good / this.totalFeedback()) * 100
        : 0
    );
  };


  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const totalFeedbackCount = this.totalFeedback();
    const positiveFeedbackCount = this.positiveFeedbackPercentage();
    return (
         <>
      <Section title='Please leave feedback'>
          <FeedbackOptions
            buttons={options}
            onLeaveFeedback={this.feedbackHandler}
            onReset={this.reset} />
        </Section>
        <Section title="Statistics">
        {this.totalFeedback() === 0
          ? (<Notification message='No feedback given'/>)
          : ( <FeedbackStatistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedbackCount}
            positiveFeedback={positiveFeedbackCount}
            />)}
          </Section>
    </>
    )
  };
};
