import * as http from 'axios';
import 'dotenv/config';

const config = {
  baseURL: 'https://authentication-api-express.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
};
const axios = http.create(config);

export default axios;
