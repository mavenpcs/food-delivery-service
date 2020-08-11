# Production Deployment
- Run docker-compose down && docker system prune -all to make sure you are building on a clean slate
- docker-compose -f docker-compose.prod.yml build && docker-compose -f docker-compose.prod.yml up
- React: http://localhost:1337
- Express: http://localhost:3000

# Development Deployment
- Initial run: docker-compose build && docker-compose up
- Onwards: docker-compose up

- React: localhost:8080
- Express: localhost:3000

# Pages
Please check out the following pages
- Home Page
- Login
- Register
- Restaurants
- Cart
- Order History (Past Orders)

# User Credentials (For Testing)
- Vendor 1: Church’s Chicken
    - Username: jchurch
    - Password: 12345678

- Vendor 2: Danny’s Mexican Restaurant
    - Username: keldan
    - Password: 12345678

- Vendor 3: Pizza Hot
    - Username: khudson 
    - Password: 12345678

- Vendor 4: Itshoni Sushi
    - Username: tak93
    - Password: 12345678

- Customer 1
    - Username: kcall
    - Password: 12345678

# Notes
- Unfortunately, we had to scrap the following features as a result of losing a group member:
    -  The Vendor can add a restaurant and food.
    -  The Customer can order ingredients for the selected menu.
- Consequently, you must use the API under Vendors if you wish to add a restaurant and add foods to it.
- We did not have the time to design and implement the database schema for Cart and hence, the items in the cart will only persist until the user logs out.

# Endpoints
##### All
- User registration (POST): http://localhost:3000/api/auth/signup
    - Parameters: username, password, firstname, lastname, email (optional), phone (optional), address
- User login (POST): http://localhost:3000/api/auth/signin
    - Parameters: username, password

###### The endpoints for vendors are customers require x-access-token in their heading when sending data. The token is returned from the server when you make an API call to the 'signin' endpoint (the second one in the above list).
##### Vendors
- Add a restaurant (POST): http://localhost:3000/api/vendor/apply
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
    - Parameters: orderid, restaurantid, rating, comments
- Get random review (GET): http://localhost:3000/api/customer/get-review
    - Parameter: restaurantid
- Get rating (GET): http://localhost:3000/api/customer/get-rating
    - Parameter: restaurantid
- Check out (POST): http://localhost:3000/api/customer/checkout
    - Parameters: userid, restaurantid, array of food objects (id, price)
    - Example: 
    {
        "userid": 1,
        "restaurantid": 1,
        "foods": [
            {
                "id": 1,
                "price": 21.99
            },
            {
                "id": 2,
                "price": 5.99
            },
            {
                "id": 3,
                "price": 3.99
            }
        ]
    }

- Get order history (GET): http://localhost:3000/api/customer/get-orders/:userid