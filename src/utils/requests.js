import axios from 'axios';

const TIMEDB_API_KEY = 'AH6WJ5KZ36JH';
const TIMEDB_URL = 'https://api.timezonedb.com/v2/get-time-zone';
const ETHERSCAN_API_KEY = 'X6S8AYMKNU47DEYGKII5TRXUTZC342W35Y';
const ETHERSCAN_URL = 'https://api.etherscan.io/api';

export const balanceRequest = address => (
    axios.get(ETHERSCAN_URL, {
        params: {
            module: 'stats',
            action: 'tokensupply',
            contractaddress: address,
            apikey: ETHERSCAN_API_KEY
        }
    })
);

export const transactionsRequest = address => (
    axios.get(ETHERSCAN_URL, {
        params: {
            module: 'account',
            action: 'txlist',
            address,
            startblock: 0,
            endblock: 99999999,
            sort: 'asc',
            apikey: ETHERSCAN_API_KEY
        }
    })
);

export const timeRequest = timezone => (
    axios.get(TIMEDB_URL, {
        params: {
            key: TIMEDB_API_KEY,
            format: 'json',
            by: 'zone',
            zone: timezone
        }
    })
);

