import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:3000/';

class UserService {
    getPublicContent() {
        return axios.get(API_URL + 'all');
    }

    getVendorBoard() {
        return axios.get(API_URL + 'vendor', {headers: authHeader()});
    }

    getAdminBoard() {
        return axios.get(API_URL + 'admin', {headers: authHeader()});
    }

    getTestBoard() {
        return true;
    }

    getCustomer() {
        return axios.get(API_URL + 'orderHistory', {headers: authHeader()});
    }

    getAllRestaurants() {
        return axios.get(API_URL + 'api/vendor/restaurants', {headers: authHeader()});
    }

    getMenu(name) {
        return axios.get(API_URL + 'api/vendor/foods', {
            headers: authHeader(), params: name
        });
    }

}

export default new UserService();
