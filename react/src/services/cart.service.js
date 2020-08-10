import axios from 'axios';
import authHeader from './auth-header';

const API_URL = "http://localhost:3000/api/cart/";
const API_CHECKOUT_URL = "http://localhost:3000/api/customer/checkout"

class CartService {
    checkOut(userid, restaurantid, foods) {
        localStorage.removeItem("shoppingCart");
        localStorage.removeItem("restaurant");
        return axios.post(API_CHECKOUT_URL, {
            userid: userid,
            restaurantid: restaurantid,
            foods: foods
        },
            { headers: authHeader() }
        );
    }
}

export default new CartService();
