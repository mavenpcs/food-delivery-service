const db = require('./models/index');
const { sequelize } = require('./models/index');

var bcrypt = require('bcryptjs');
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
    keys: ['id'],
    data: {
      id: 1,
      username: 'jchurch',
      password: bcrypt.hashSync('12345678', 8),
      firstname: 'James',
      lastname: 'Church',
      email: 'jchurch@vendor.com',
      phone: '6046885225',
      address: '3308 Ash St, Vancouver',
      roles: [2]
    }
  },
  {
    model: 'appuser',
    keys: ['id'],
    data: {
      id: 2,
      username: 'keldan',
      password: bcrypt.hashSync('12345678', 8),
      firstname: 'Kelvin',
      lastname: 'Dan',
      email: 'keldan@vendor.com',
      phone: '6046892577',
      address: '122 Walter Hardwick Ave, Vancouver',
      roles: [2]
    }
  },
  {
    model: 'appuser',
    keys: ['id'],
    data: {
      id: 3,
      username: 'khudson',
      password: bcrypt.hashSync('12345678', 8),
      firstname: 'Kayleigh',
      lastname: 'Hudson',
      email: 'khudson@vendor.com',
      phone: '6047313240',
      address: '563 Union St, Vancouver',
      roles: [2]
    }
  },
  {
    model: 'appuser',
    keys: ['id'],
    data: {
      id: 4,
      username: 'tak93',
      password: bcrypt.hashSync('12345678', 8),
      firstname: 'Takuya',
      lastname: 'Tanahara',
      email: 'tak93@vendor.com',
      phone: '6046886490',
      address: '1949 Comox St, Vancouver',
      roles: [2]
    }
  },
  {
    model: 'appuser',
    keys: ['id'],
    data: {
      id: 5,
      username: 'kcall',
      password: bcrypt.hashSync('12345678', 8),
      firstname: 'Karen',
      lastname: 'Call',
      email: 'themanager@abc.com',
      phone: '6042662522',
      address: '431 Calmdown Ave, Surrey',
      roles: [1]
    }
  },
  {
    model: 'restaurant',
    keys: ['id'],
    data: {
      id: 1,
      user_id: 1,
      name: "Church's Chicken",
      address: '4375 North Rd, Burnaby',
      deliveryfee: 2.49,
      rating: 3
    }
  },
  {
    model: 'restaurant',
    keys: ['id'],
    data: {
      id: 2,
      user_id: 2,
      name: "Danny's Mexican Restaurant",
      address: '1101 Austin Ave, Coquitlam',
      deliveryfee: 2.99,
      rating: 2
    }
  },
  {
    model: 'restaurant',
    keys: ['id'],
    data: {
      id: 3,
      user_id: 3,
      name: 'Pizza Hot',
      address: '2707 E. Hastings St, Vancouver',
      deliveryfee: 3.49,
      rating: 5
    }
  },
  {
    model: 'restaurant',
    keys: ['id'],
    data: {
      id: 4,
      user_id: 4,
      name: 'Itshoni Sushi',
      address: '5228 Hollyfield Ave, Richmond',
      deliveryfee: 1.99,
      rating: 4
    }
  },
  {
    model: 'food',
    keys: ['id'],
    data: {
      id: 1,
      restaurant_id: 1,
      category: 'Sandwich',
      name: 'Classic Chicken Sandwich Combo',
      price: 11.75,
      description: 'Served with a regular side and a drink.'
    }
  },
  {
    model: 'food',
    keys: ['id'],
    data: {
      id: 2,
      restaurant_id: 1,
      category: 'Sandwich',
      name: 'Tender Wrap Combo',
      price: 9.25,
      description: 'Choice of original or spicy chicken tender wrap served with a side and a drink.'
    }
  },
  {
    model: 'food',
    keys: ['id'],
    data: {
      id: 3,
      restaurant_id: 1,
      category: 'Chicken',
      name: 'Chicken (4 pcs) Combo',
      price: 14.75,
      description: 'Assorted chicken including a biscuit, choice of side, and a drink.'
    }
  },
  {
    model: 'food',
    keys: ['id'],
    data: {
      id: 4,
      restaurant_id: 1,
      category: 'Chicken',
      name: 'Tenders (3 pcs) Combo',
      price: 11.45,
      description: 'Chicken tenders including a biscuit, choice of side, and a drink.'
    }
  },
  {
    model: 'food',
    keys: ['id'],
    data: {
      id: 5,
      restaurant_id: 1,
      category: 'Chicken',
      name: 'Hot Wings (5 pcs)',
      price: 8.25,
      description: 'Each order comes with five hot wings.'
    }
  },
  {
    model: 'food',
    keys: ['id'],
    data: {
      id: 6,
      restaurant_id: 2,
      category: 'Mexican',
      name: 'Guacamole and Chips',
      price: 7.95,
      description: 'Homemade corn tortilla and avocado dip.'
    }
  },
  {
    model: 'food',
    keys: ['id'],
    data: {
      id: 7,
      restaurant_id: 2,
      category: 'Mexican',
      name: 'Nachos and Cheese',
      price: 12.25,
      description: 'Nachos and cheese served with pico de gallo.'
    }
  },
  {
    model: 'food',
    keys: ['id'],
    data: {
      id: 8,
      restaurant_id: 2,
      category: 'Mexian',
      name: 'Camarones a la Diabla (9 pcs)',
      price: 19.50,
      description: 'Nine large peeled shrimp sauteed in a spicy sauce served with Mexican rice and green salad on the side.'
    }
  },
  {
    model: 'food',
    keys: ['id'],
    data: {
      id: 9,
      restaurant_id: 2,
      category: 'Mexian',
      name: 'Tacos Duros (2 pcs)',
      price: 13.95,
      description: 'Two homemade crispy corn tortillas filled with your choice of meat and vegetables.'
    }
  },
  {
    model: 'food',
    keys: ['id'],
    data: {
      id: 10,
      restaurant_id: 2,
      category: 'Mexian',
      name: '8" Quesadilla',
      price: 14.95,
      description: 'An eight-inch flour tortilla stuffed with cheese, shredded chicken, and ranchera salsa.'
    }
  },
  {
    model: 'food',
    keys: ['id'],
    data: {
      id: 11,
      restaurant_id: 3,
      category: 'Pizza',
      name: 'Create your Own',
      price: 14.59,
      description: 'Choose your favourite toppings.'
    }
  },
  {
    model: 'food',
    keys: ['id'],
    data: {
      id: 12,
      restaurant_id: 3,
      category: 'Pizza',
      name: 'Hawaiian Pizza',
      price: 18.79,
      description: 'Ham, pineapple and extra pizza mozzarella.'
    }
  },
  {
    model: 'food',
    keys: ['id'],
    data: {
      id: 13,
      restaurant_id: 3,
      category: 'Pizza',
      name: "Pepperoni Lover's",
      price: 18.79,
      description: 'Double pepperoni and extra pizza mozzarella.'
    }
  },
  {
    model: 'food',
    keys: ['id'],
    data: {
      id: 14,
      restaurant_id: 3,
      category: 'Pizza',
      name: "Meat Lover's",
      price: 18.79,
      description: 'Pepperoni, Italian sausage, mild sausage, beef topping, ham, bacon crumble and pizza mozzarella.'
    }
  },
  {
    model: 'food',
    keys: ['id'],
    data: {
      id: 15,
      restaurant_id: 3,
      category: 'Pizza',
      name: 'Canadian',
      price: 18.69,
      description: 'Pepperoni, bacon crumble, sliced mushrooms and pizza mozzarella.'
    }
  },
  {
    model: 'food',
    keys: ['id'],
    data: {
      id: 16,
      restaurant_id: 4,
      category: 'Japanese',
      name: 'Nigiri Box',
      price: 15.00,
      description: 'Two-piece of yam and prawn tempura, five-piece sashimi, salad, rice, and your choice of chicken or beef teriyaki.'
    }
  },
  {
    model: 'food',
    keys: ['id'],
    data: {
      id: 17,
      restaurant_id: 4,
      category: 'Japanese',
      name: 'Salmon and Tuna Sashimi (8 pcs)',
      price: 15.00,
      description: 'One order comes with eight pieces of salmon and tuna sashimi.'
    }
  },
  {
    model: 'food',
    keys: ['id'],
    data: {
      id: 18,
      restaurant_id: 4,
      category: 'Japanese',
      name: 'Salmon Toro Sashimi (5 pcs)',
      price: 10.00,
      description: 'One order comes with five pieces.'
    }
  },
  {
    model: 'food',
    keys: ['id'],
    data: {
      id: 19,
      restaurant_id: 4,
      category: 'Japanese',
      name: 'Tiger Ebi Oishi',
      price: 12.00,
      description: 'Tiger Ebi, shiso pesto, and oishi sauce.'
    }
  },
  {
    model: 'food',
    keys: ['id'],
    data: {
      id: 20,
      restaurant_id: 4,
      category: 'Japanese',
      name: 'Miso Ramen',
      price: 9.00,
      description: 'Miso ramen with bean sprouts.'
    }
  }
];

initial = () => {
  sequelize_fixtures.loadFixtures(fixtures, db);
}

module.exports = initial;