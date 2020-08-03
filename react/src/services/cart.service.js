import axios from "axios";

const API_URL = "http://localhost:3000/api/cart/";

class Cart {
    addToCart(cart_id, food_id) {
        return axios.post(API_URL + "addtocart", {
            cart_id,
            food_id
        });
    }

    removeFromCart(cart_id, food_id) {
        return axois.delete(API_URL + "removefromcart", {
            cart_id,
            food_id
        });
    }
}
