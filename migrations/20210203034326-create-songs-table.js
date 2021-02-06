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
  return db.createTable('songs', {
    id: { 
      type: 'int', 
      primaryKey: true,
      autoIncrement: true
    },
    title: 'string',
    original_artist: 'string',
    link_to_version: 'string',
    opener: 'boolean',
    closer: 'boolean',
    slow_song: 'boolean',
    mid_tempo: 'boolean',
    fast_song: 'boolean',
    tonic: 'string',
    length_in_seconds: 'int',
    band_id: {
      type: 'int',
      foreignKey: {
        name: 'songs_band_id_fk',
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
  return db.dropTable('songs');
};

exports._meta = {
  "version": 1
};
