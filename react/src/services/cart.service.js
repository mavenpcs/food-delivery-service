import axios from 'axios';
import authHeader from './auth-header';

const API_URL = "http://localhost:3000/api/cart/";
const API_CHECKOUT_URL = "http://localhost:3000/api/customer/checkout"

class CartService {
    addToCart(cart_id, food_id) {
        return axios.post(API_URL + "addtocart", {
            cart_id,
            food_id
        });
    }

    removeFromCart(cart_id, food_id) {
        return axios.delete(API_URL + "removefromcart", {
            cart_id,
            food_id
        });
    }

    checkOut(userid, restaurantid, foods) {
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
