'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

//using migrate-up will create the following table
exports.up = function (db) {
  return db.createTable('gigs_setlists', {
    gig_id: {
      type: 'int',
      foreignKey: {
        name: 'gigs_setlists_gig_id_fk',
        table: 'gigs',
        mapping: 'id',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        }
      }
    },
    setlist_id: {
      type: 'int',
      foreignKey: {
        name: 'gigs_setlists_setlist_id_fk',
        table: 'setlists',
        mapping: 'id',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        }
      }
    }
  });
};

//migrate down will then delete that table
exports.down = function (db) {
  return db.dropTable('gigs_setlists');
};

exports._meta = {
  "version": 1
};
