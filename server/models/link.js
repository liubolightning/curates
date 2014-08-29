var db = require('../dbconfig');
var Link_Collection = require('./linkscollections')

var Link = db.Model.extend({
  tableName: 'links',
  hasTimestamps: true,

  links: function(){
    return this.hasMany(Link_Collection, 'l_id');
  }
});
