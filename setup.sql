CREATE DATABASE IF NOT EXISTS food_delivery;

USE food_delivery;

CREATE TABLE IF NOT EXISTS `food_delivery`.`app_user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(15) NOT NULL,
  `password` VARCHAR(15) NOT NULL,
  `first_name` VARCHAR(50) NOT NULL,
  `last_name` VARCHAR(50) NOT NULL,
  `email` VARCHAR(50) NULL,
  `phone` VARCHAR(10) NULL,
  `is_customer` TINYINT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE);

CREATE TABLE IF NOT EXISTS `food_delivery`.`restaurant` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `address` VARCHAR(255) NOT NULL,
  `delivery_fee` FLOAT NOT NULL,
  `hours` VARCHAR(255) NOT NULL,
  `rating` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `restaurant_name_idx` (`name` ASC) VISIBLE,
  INDEX `user_id_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `FK_restaurant_user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `food_delivery`.`app_user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE IF NOT EXISTS `food_delivery`.`food` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `category` VARCHAR(20) NULL,
  `restaurant_name` VARCHAR(100) NOT NULL,
  `name` VARCHAR(50) NOT NULL,
  `price` FLOAT NOT NULL,
  `description` LONGTEXT NULL,
  PRIMARY KEY (`id`),
  INDEX `restaurant_name_idx` (`restaurant_name` ASC) VISIBLE,
  INDEX `food_name_idx` (`name` ASC) VISIBLE,
  INDEX `food_price_idx` (`price` ASC) VISIBLE,
  CONSTRAINT `FK_food_restaurant_name`
    FOREIGN KEY (`restaurant_name`)
    REFERENCES `food_delivery`.`restaurant` (`name`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE IF NOT EXISTS `food_delivery`.`order` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `restaurant_name` VARCHAR(100) NOT NULL,
  `date` DATETIME NOT NULL,
  `food_name` VARCHAR(50) NOT NULL,
  `food_price` FLOAT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `user_id` (`user_id` ASC) VISIBLE,
  INDEX `restaurant_name` (`restaurant_name` ASC) VISIBLE,
  INDEX `food_name` (`food_name` ASC) VISIBLE,
  INDEX `food_price` (`food_price` ASC) VISIBLE,
  CONSTRAINT `FK_order_user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `food_delivery`.`app_user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_order_restaurant_name`
    FOREIGN KEY (`restaurant_name`)
    REFERENCES `food_delivery`.`restaurant` (`name`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_order_food_name`
    FOREIGN KEY (`food_name`)
    REFERENCES `food_delivery`.`food` (`name`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_order_food_price`
    FOREIGN KEY (`food_price`)
    REFERENCES `food_delivery`.`food` (`price`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);