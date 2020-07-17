# Run React from /react
npm start (runs on localhost:3000)

# Run Docker Container From the Root
- Initial run: docker-compose build && docker-compose up
- Onwards: docker-compose up

- React: localhost:3001
- Express: localhost:8080
- MySql: localhost:3308

# Access the MySql Database in the Docker Container

1. In your terminal, run "docker exec -it cmpt-470-project_mysql_1 bash"
2. In your docker bash, run "mysql -uroot -pRoot12345 -h localhost"
3. Run the following in sequence to check the sanity of our database.
    - show databases;
    - use food_delivery;
    - show tables;
    - describe app_user; (or any other field)