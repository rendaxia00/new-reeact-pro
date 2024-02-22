import React, { PropTypes, PureComponent } from 'react';
import Timer from '../../components/Timer';
import moment from 'moment-timezone';
import { connect } from 'react-redux'
import { finishSales } from '../../ducks/sales';
import { getTime } from '../../ducks/time';
import deadline from '../../data/deadline';

const units = ['days', 'hours', 'minutes', 'seconds'];

const TICK = 1000;

const mapStateToProps = state => {
    const { format, timeZone } = deadline;
    const { finished: salesFinished } = state.sales;
    const { time, loading: timeLoading, loaded: timeLoaded, error: timeError } = state.time;
    return {
        salesFinished,
        timeLoading,
        timeLoaded,
        timeError,
        time: time && moment.tz(time, format, timeZone)
    }
};


class Countdown extends PureComponent {
    static propTypes = {
        salesFinished: PropTypes.bool,
        timeLoading: PropTypes.bool,
        timeLoaded: PropTypes.bool,
        finishSales: PropTypes.func,
        getTime: PropTypes.func
    };

    state = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    };

    isDeadlineExpired = (date, now) => {
        const { format, timeZone } = deadline;
        const parsedDate = moment.tz(date, format, timeZone);
        return parsedDate.isBefore(now);
    };

    countDiff = (date, now) => {
        const { finishSales, salesFinished } = this.props;
        const { timer } = this.state;
        const { format, timeZone } = deadline;
        const parsedDate = moment.tz(date, format, timeZone);

        if (this.isDeadlineExpired(date)) {
            clearInterval(timer);
            finishSales();
        } else {
            const diff = parsedDate.diff(now.add(1000, 'milliseconds'));
            const duration = moment.duration(diff, 'milliseconds');
            this.setState({
                days: Math.floor(duration.asDays()),
                hours: duration.hours(),
                minutes: duration.minutes(),
                seconds: duration.seconds()
            });
        }
    };

    componentWillMount() {
        const { getTime } = this.props;
        const { timeZone } = deadline;

        getTime(timeZone);
    }

    componentDidUpdate() {
        const { time, finishSales, getTime } = this.props;
        const { timer } = this.state;
        const { end, timeZone } = deadline;

        if (!timer && time) {
            if (this.isDeadlineExpired(end, time)) {
                finishSales();
            } else {
                this.countDiff(end, time);
                const timer = setInterval(() => this.countDiff(end, time), TICK);
                this.setState({ timer });
            }
        }
    }

    componentWillUnmount() {
        const { timer } = this.state;
        clearInterval(timer);
    }

    render() {
        const { timeLoading, timeLoaded, timeError } = this.props;
        return (
            <Timer
                {...this.state}
                units={units}
                loading={timeLoading && !timeLoaded}
                error={timeError}
            />
        );
    }
}

export default connect(
    mapStateToProps,
    { finishSales, getTime }
)(Countdown);