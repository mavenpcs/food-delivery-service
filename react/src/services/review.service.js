import axios from "axios";
import authHeader from './auth-header';

const SUBMIT_REVIEW_API_URL = "http://localhost:3000/api/customer/add-review";
const API_URL = "http://localhost:3000";

class ReviewService {
    addReview(orderid, restaurantid, rating , comments) {
        return axios.post(SUBMIT_REVIEW_API_URL, {
            orderid: orderid,
            restaurantid: restaurantid,
            rating: rating ,
            comments: comments
        },
            { headers: authHeader() }
        );
    }

    getReview(restaurantid) {
        console.log(restaurantid);
        return axios.get(API_URL + '/api/customer/get-review/'.concat(restaurantid),
            { headers: authHeader() }
        );
    }
}

export default new ReviewService();
