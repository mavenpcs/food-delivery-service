import axios from "axios";
import authHeader from './auth-header';

const SUBMIT_REVIEW_API_URL = "http://localhost:3000/api/customer/add-review";
const GET_REVIEW_API_URL = "http://localhost:3000/api/customer/get-review";

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
        return axios.get(GET_REVIEW_API_URL, {
            restaurantid: restaurantid
        },
            { headers: authHeader() }
        );
    }
}

export default new ReviewService();
