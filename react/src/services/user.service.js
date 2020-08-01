import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:3000/api/test/';

class UserService {
    getPublicContent() {
        return axios.get(API_URL + 'all');
    }

    getCustomerBoard() {
        return axios.get(API_URL + 'customer', { headers: authHeader() });
    }

    getVendorBoard() {
        return axios.get(API_URL + 'vendor', { headers: authHeader() });
    }

    getAdminBoard() {
        return axios.get(API_URL + 'admin', { headers: authHeader() });
    }

    getTestBoard() {
        return true;
    }
}

export default new UserService();
