var db = require('../dbconfig');
var Collection = require('./collection');
var Link = require('./link')

var Link_Collection = db.Model.extend({
  tableName: 'links_collections',
  hasTimestamps: true,
  collections: function(){
    return this.belongsTo(Collection, 'c_id');
  },

  links: function(){
    return this.belongsTo(Link, 'l_id');
  }
});

module.exports = Link_Collection;
