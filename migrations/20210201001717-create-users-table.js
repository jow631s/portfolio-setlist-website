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
  return db.createTable('users', {
    id: { 
      type: 'int', 
      primaryKey: true,
      autoIncrement: true
    },
    username: 'string',
    first_name: 'string',
    last_name: 'string',
    email: 'string',
    address_1: 'string',
    address_2: 'string',
    city: 'string',
    state: 'string',
    zip: 'int',
    phone: 'string'
  });
};

//migrate down will then delete that table
exports.down = function(db) {
  return db.dropTable('users');
};

exports._meta = {
  "version": 1
};
