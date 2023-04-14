import Axios from 'axios';

class Analytics {
    constructor(key, config) {
        const baseURL = (config === null || config === void 0 ? void 0 : config.environment) === 'production'
            ? 'https://api.moralis.io'
            : 'http://127.0.0.1:3000';
        this.axios = Axios.create({
            baseURL,
            headers: {
                'Content-Type': 'application/json',
                'moralis-live-key': key,
            },
        });
    }
    address(address, metadata) {
        return this.axios.post('/addresses', {
            address,
            metadata,
        });
    }
}

export { Analytics };
