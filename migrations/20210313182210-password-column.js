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


//using migrate-up will create the following column in the users table
exports.up = function (db) {
  return db.addColumn('users', 'hashed_password', {
    type: 'string'
  });
};

//migrate down will then delete that column
exports.down = function(db) {
  return db.removeColumn('users', 'hashed_password');
};

exports._meta = {
  "version": 1
};
