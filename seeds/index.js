const seedUsers = require('./user-seeds');
const seedProducts = require('./product-seeds');
// const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- Users SEEDED -----\n');

  await seedProducts();
  console.log('\n----- Products SEEDED -----\n');

  // await seedComments();
  // console.log('\n----- Comments SEEDED -----\n');

  process.exit(0);
};

seedAll();
