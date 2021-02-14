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
  return db.createTable('songs_setlists', {
    song_id: {
      type: 'int',
      foreignKey: {
        name: 'songs_setlists_song_id_fk',
        table: 'songs',
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
        name: 'songs_setlists_setlist_id_fk',
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
  return db.dropTable('songs_setlists');
};

exports._meta = {
  "version": 1
};
