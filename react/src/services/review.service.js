import axios from "axios";
import authHeader from './auth-header';

const REVIEW_API_URL = "http://localhost:3000/api/customer/add-review";

class ReviewService {
    addReview(orderid, restaurantid, rating , comments) {
        return axios.post(REVIEW_API_URL, {
            orderid: orderid,
            restaurantid: restaurantid,
            rating: rating ,
            comments: comments
        },
        { headers: authHeader() }
        );
    }
}

export default new ReviewService();
