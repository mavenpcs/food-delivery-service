import axios from "axios";

const REVIEW_API_URL = "http://localhost:3000/api/customer/add-review";

class ReviewService {
    addReview(restaurantid, starRating, comments) {
        return axios.post(REVIEW_API_URL, {
            restaurantid,
            starRating,
            comments
        });
    }
}

export default new ReviewService();
