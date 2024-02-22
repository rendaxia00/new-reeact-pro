import moment from 'moment';

export default (arr, course) => (
    arr.map(item => {
        const MAX_CONFIRMATIONS = 3;
        const date = moment.unix(item.timeStamp).format('DD/MM/YYYY HH:mm');
        const eth = (item.value * Math.pow(10, -18)).toFixed(8).replace(/0+$/, "");
        const snm = (eth * course).toFixed(8).replace(/0+$/, "");
        const confirmed = Number(item.confirmations) > MAX_CONFIRMATIONS;
        return ({ date, eth, snm, confirmed });
    })
);