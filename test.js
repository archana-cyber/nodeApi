const { Model } = require('objection');

class TestModel extends Model {
  static get tableName() {
    return 'registration';
  }
}




module.exports = TestModel;