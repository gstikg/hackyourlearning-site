// Importing Components from node_modules
import React from 'react';

export default class Timer extends React.Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);

    // Set the state directly. Use props if necessary.
    this.state = {
      endDate: new Date('March 27, 2021 09:00:00'),
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  componentDidMount() {
    this.calculateCountdown();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  onEndDateChange = (endDate) => {
    this.setState({ endDate });
  };

  getTwoDigitValue = (value) => {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  };

  calculateCountdown = () => {
    const startDate = new Date();
    const { endDate } = this.state;

    const timeRemaining = endDate.getTime() - startDate.getTime();

    if (timeRemaining > 0) {
      const startDateTemp = new Date(startDate);
      const endDateTemp = new Date(endDate);
      const startMillis = startDateTemp.getTime(); // Get timestamp of start date
      const endMillis = endDateTemp.getTime(); // Get timestamp of end date

      // Convert to seconds, 1 second = 1000 milli seconds
      const oldSec = startMillis / 1000;
      const currentSec = endMillis / 1000;

      // Get remaining seconds
      let seconds = currentSec - oldSec;

      // 1 day is equal to 24 hours, each hour has 60 mins and each minute has 60 seconds
      let days = Math.floor(seconds / (24 * 60 * 60));
      seconds -= days * 24 * 60 * 60; // Get remaining seconds

      // 1 hour has 60 mins and each minute has 60 seconds
      let hours = Math.floor(seconds / (60 * 60));
      seconds -= hours * 60 * 60; // Get remaining seconds

      let minutes = Math.floor(seconds / 60); // 1 minute is equal to 60 seconds
      seconds -= minutes * 60; // Get remaining seconds

      days = Math.abs(days);
      hours = Math.abs(hours);
      minutes = Math.abs(minutes);
      seconds = Math.floor(Math.abs(seconds));

      this.setState(
        () => ({
          days,
          hours,
          minutes,
          seconds,
        }),
        () => {
          this.timer = setTimeout(this.calculateCountdown, 1000);
        },
      );
    } else {
      clearTimeout(this.timer);
    }
  };

  render() {
    const {
      days, hours, minutes, seconds,
    } = this.state;
    const convertedDays = this.getTwoDigitValue(days);
    const convertedHours = this.getTwoDigitValue(hours);
    const convertedMins = this.getTwoDigitValue(minutes);
    const convertedSeconds = this.getTwoDigitValue(seconds);

    return (
      <div className="event-info--countdown">
        <div className="row">
          <div className="counter-item col-12 col-sm-3">
            <p className="counter-item--value">{convertedDays}</p>
            <p className="counter-item--title">Days</p>
          </div>
          <div className="counter-item col-12 col-sm-3">
            <p className="counter-item--value">{convertedHours}</p>
            <p className="counter-item--title">Hours</p>
          </div>
          <div className="counter-item col-12 col-sm-3">
            <p className="counter-item--value">{convertedMins}</p>
            <p className="counter-item--title">Minutes</p>
          </div>
          <div className="counter-item col-12 col-sm-3">
            <p className="counter-item--value">{convertedSeconds}</p>
            <p className="counter-item--title">Seconds</p>
          </div>
        </div>
      </div>
    );
  }
}
