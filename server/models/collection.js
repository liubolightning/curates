var db = require('../dbconfig');
var User = require('./user');
var Link_Collection = require('./linkscollections')

var Collection = db.Model.extend({
  tableName: 'collections',
  hasTimestamps: true,
  users: function(){
    return this.belongsTo(User, 'u_id');
  },

  collections: function(){
    return this.hasMany(Link_Collection, 'c_id');
  }
});
