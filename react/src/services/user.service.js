import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:3000/';

class UserService {
    getAllRestaurants() {
        return axios.get(API_URL + 'api/vendor/restaurants', {headers: authHeader()});
    }

    getMenu(restaurantId) {
        return axios.get(API_URL + 'api/vendor/foods/'.concat(restaurantId), {
            headers: authHeader()
        });
    }

}

export default new UserService();
