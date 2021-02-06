'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

//using migrate-up will create the following table
exports.up = function(db) {
  return db.createTable('bands', {
    id: { 
      type: 'int', 
      primaryKey: true,
      autoIncrement: true
    },
    name: 'string'
  });
};

//migrate down will then delete that table
exports.down = function(db) {
  return db.dropTable('bands');
};

exports._meta = {
  "version": 1
};
