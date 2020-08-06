const db = require('./models/index');
const { sequelize } = require('./models/index');
const Role = db.role;
const AppUser = db.appuser;
const Restaurant = db.restaurant;
const Food = db.food;

var bcrypt = require('bcryptjs');
const Op = db.Sequelize.Op;
const sequelize_fixtures = require('sequelize-fixtures');

const fixtures = [
  {
    model: 'role',
    data: {
      id: 1,
      name: 'customer'
    }
  },
  {
    model: 'role',
    data: {
      id: 2,
      name: 'vendor',
    }
  },
  {
    model: 'appuser',
    data: {
      id: 1,
      username: 'vendor1',
      password: bcrypt.hashSync('12345678', 8),
      firstname: 'James',
      lastname: 'Smith',
      email: 'test@abc.com',
      phone: '12345678',
      address: '123 Fancy Dr',
      roles: [2]
    }
  },
  {
    model: 'appuser',
    data: {
      id: 2,
      username: 'vendor2',
      password: bcrypt.hashSync('12345678', 8),
      firstname: 'Daniel',
      lastname: 'Han',
      email: 'test2@abc.com',
      phone: '12345678',
      address: '100 Some St',
      roles: [2]
    }
  },
  {
    model: 'appuser',
    data: {
      id: 3,
      username: 'customer',
      password: bcrypt.hashSync('12345678', 8),
      firstname: 'Karen',
      lastname: 'Call',
      email: 'themanager@abc.com',
      phone: '12345678',
      address: '123 Calmdown Ave',
      roles: [1]
    }
  },
  {
    model: 'restaurant',
    data: {
      user_id: 1,
      name: 'Test Restaurant 1',
      address: '123 Test Ave',
      deliveryfee: 2.50,
      rating: 3
    }
  },
  {
    model: 'restaurant',
    data: {
      user_id: 2,
      name: 'Test Restaurant 2',
      address: '100 Test Dr',
      deliveryfee: 2.00,
      rating: 4
    }
  },
  {
    model: 'food',
    data: {
      restaurant_id: 1,
      category: 'Pizza',
      name: 'Large Peperoni Pizza',
      price: 21.99,
      description: 'This is a large peperoni pizza.'
    }
  },
  {
    model: 'food',
    data: {
      restaurant_id: 1,
      category: 'Hamburger',
      name: 'BigMac',
      price: 5.99,
      description: 'This is a BigMac.'
    }
  },
  {
    model: 'food',
    data: {
      restaurant_id: 1,
      category: 'Japanese',
      name: 'California Rolls',
      price: 3.99,
      description: 'This is california rolls.'
    }
  },
  {
    model: 'food',
    data: {
      restaurant_id: 2,
      category: 'Pizza',
      name: 'Large Peperoni Pizza',
      price: 21.99,
      description: 'This is a large peperoni pizza.'
    }
  },
  {
    model: 'food',
    data: {
      restaurant_id: 2,
      category: 'Hamburger',
      name: 'BigMac',
      price: 5.99,
      description: 'This is a BigMac.'
    }
  },
  {
    model: 'food',
    data: {
      restaurant_id: 2,
      category: 'Japanese',
      name: 'California Rolls',
      price: 3.99,
      description: 'This is california rolls.'
    }
  }
];

initial = () => {
  sequelize_fixtures.loadFixtures(fixtures, db);
}

module.exports = initial;