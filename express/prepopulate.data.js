const db = require('./models/index');
const { sequelize } = require('./models/index');
const Role = db.role;
const AppUser = db.appuser;
const Restaurant = db.restaurant;
const Food = db.food;
// for pre-populating users, not needed for production
var bcrypt = require('bcryptjs');
const Op = db.Sequelize.Op;
const vendorRole = ['vendor'];
const customerRole = ['customer'];

initial = () => {
  Role.create({
    id: 1,
    name: 'customer'
  });

  Role.create({
    id: 2,
    name: 'vendor'
  });

  AppUser.create({
    username: 'vendor1',
    password: bcrypt.hashSync('12345678', 8),
    firstname: 'James',
    lastname: 'Smith',
    email: 'test@abc.com',
    phone: '12345678',
    roles: vendorRole
  }).then(user => {
    if (vendorRole) {
        Role.findAll({
            where: {
                name: {
                    [Op.or]: vendorRole
                }
            }
        }).then(roles => {
            user.setRoles(roles).then(() => {
                console.log('User was registered successfully!');
            });
        });
    } else {
        // if no roles are received, then user is just a customer
        user.setRoles([1]).then(() => {
            console.log('User was registered successfully!');
        });
    }
  }).catch(err => {
    console.log(err.message);
});

  AppUser.create({
    username: 'vendor2',
    password: bcrypt.hashSync('12345678', 8),
    firstname: 'Daniel',
    lastname: 'Han',
    email: 'test2@abc.com',
    phone: '12345678',
    roles: vendorRole
  }).then(user => {
    if (vendorRole) {
        Role.findAll({
            where: {
                name: {
                    [Op.or]: vendorRole
                }
            }
        }).then(roles => {
            user.setRoles(roles).then(() => {
                console.log('User was registered successfully!');
            });
        });
    } else {
        // if no roles are received, then user is just a customer
        user.setRoles([1]).then(() => {
            console.log('User was registered successfully!');
        });
    }
  }).catch(err => {
    console.log(err.message);
});

AppUser.create({
  username: 'customer',
  password: bcrypt.hashSync('12345678', 8),
  firstname: 'Karen',
  lastname: 'Call',
  email: 'themanager@abc.com',
  phone: '12345678',
  roles: customerRole
}).then(user => {
  if (customerRole) {
      Role.findAll({
          where: {
              name: {
                  [Op.or]: customerRole
              }
          }
      }).then(roles => {
          user.setRoles(roles).then(() => {
              console.log('User was registered successfully!');
          });
      });
  } else {
      // if no roles are received, then user is just a customer
      user.setRoles([1]).then(() => {
          console.log('User was registered successfully!');
      });
  }
}).catch(err => {
  console.log(err.message);
});

  Restaurant.create({
    user_id: 1,
    name: 'Test Restaurant 1',
    address: '123 Test Ave',
    deliveryfee: 2.50,
    rating: 3
  });

  Restaurant.create({
    user_id: 2,
    name: 'Test Restaurant 2',
    address: '100 Test Dr',
    deliveryfee: 2.00,
    rating: 4
  });
  
  // Foods
  Food.create({
    restaurant_id: 1,
    category: 'Pizza',
    name: 'Large Peperoni Pizza',
    price: 21.99,
    description: 'This is a large peperoni pizza.'
    }).then(() => {
      console.log('Food was registered successfully!')
    }).catch(err => {
      console.log(err.message);
  });

  Food.create({
    restaurant_id: 1,
    category: 'Hamburger',
    name: 'BigMac',
    price: 5.99,
    description: 'This is a BigMac.'
    }).then(() => {
      console.log('Food was registered successfully!')
    }).catch(err => {
      console.log(err.message);
  });

  Food.create({
    restaurant_id: 1,
    category: 'Japanese',
    name: 'California Rolls',
    price: 3.99,
    description: 'This is california rolls.'
    }).then(() => {
      console.log('Food was registered successfully!')
    }).catch(err => {
      console.log(err.message);
  });

  Food.create({
    restaurant_id: 2,
    category: 'Pizza',
    name: 'Large Peperoni Pizza',
    price: 21.99,
    description: 'This is a large peperoni pizza.'
    }).then(() => {
      console.log('Food was registered successfully!')
    }).catch(err => {
      console.log(err.message);
  });

  Food.create({
    restaurant_id: 2,
    category: 'Hamburger',
    name: 'BigMac',
    price: 5.99,
    description: 'This is a BigMac.'
    }).then(() => {
      console.log('Food was registered successfully!')
    }).catch(err => {
      console.log(err.message);
  });

  Food.create({
    restaurant_id: 2,
    category: 'Japanese',
    name: 'California Rolls',
    price: 3.99,
    description: 'This is california rolls.'
    }).then(() => {
      console.log('Food was registered successfully!')
    }).catch(err => {
      console.log(err.message);
  });
  
};

module.exports = initial;