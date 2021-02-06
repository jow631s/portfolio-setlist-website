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
  return db.createTable('setlists', {
    id: { 
      type: 'int', 
      primaryKey: true,
      autoIncrement: true
    },
    name: 'string',
    description: 'string',
    date_created: 'datetime',
    band_id: {
      type: 'int',
      foreignKey: {
        name: 'setlists_band_id_fk',
        table: 'bands',
        mapping: 'id',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
      }
    }
  });
};

//migrate down will then delete that table
exports.down = function(db) {
  return db.dropTable('setlists');
};

exports._meta = {
  "version": 1
};
