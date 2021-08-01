const { Model } = require('objection');
//
const Knex = require('knex');

const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '',
      database : 'test'
    }
  });

knex.raw("SELECT VERSION()").then(
     //(version) => console.log((version))
).catch((err) => { console.log(err); throw err })
// .finally(() => {
//     knex.destroy();
// });

// Give the knex object to objection.
Model.knex(knex);
module.exports = Model;
