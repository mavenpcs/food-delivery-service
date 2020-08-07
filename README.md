# Run React from /react
npm start (runs on localhost:8080)

# Run Docker Container From the Root (Development Environment)
- Initial run: docker-compose build && docker-compose up
- Onwards: docker-compose up

- React: localhost:8080
- Express: localhost:3000

# Production Deployment
- Run docker-compose down && docker system prune -f to make sure you are building on a clean slate
- docker-compose -f docker-compose.prod.yml build && docker-compose -f docker-compose.prod.yml up
- React: localhost:1337

# Pages To Be Implemented
Please check out the following pages via their link:
- Login: http://localhost:8080/login
- Register: http://localhost:8080/register
- Order History: http://localhost:8080/orderhistory

# Endpoints
##### All
- User registration (POST): http://localhost:3000/api/auth/signup
    - Parameters: username, password, firstname, lastname, email (optional), phone (optional), address
- User login (POST): http://localhost:3000/api/auth/signin
    - Parameters: username, password

##### Vendors
- Restaurant application (POST): http://localhost:3000/api/vendor/apply
    - Parameters: userid, name, address, deliveryfee, rating (optional)
- Add food (POST): http://localhost:3000/api/vendor/add-food
    - Parameters: restaurantid, category (optional), name, price, description
- Edit food (POST): http://localhost:3000/api/vendor/edit-food
    - Parameters: id, restaurantid, category(optional), name (optional), price (optional), description (optional)

##### Customers
- Get all restaurants (GET): http://localhost:3000/api/vendor/restaurants
- Get one restaurant by name (GET): http://localhost:3000/api/vendor/get-restaurant/:name
    - Parameter: name
- Get all foods by restaurant id (GET): http://localhost:3000/api/vendor/foods/:restaurantid
    - Parameter: restaurantid
- Add review & rating (POST): http://localhost:3000/api/customer/add-review
    - Parameters: restaurantid, rating, comments
- Get random review (GET): http://localhost:3000/api/customer/get-review
    - Parameter: restaurantid
- Get rating (GET): http://localhost:3000/api/customer/get-rating
    - Parameter: restaurantid