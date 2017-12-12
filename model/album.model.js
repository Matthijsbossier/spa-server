const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SongSchema = require('./song.model').SongSchema;

const AlbumSchema = new Schema({

    name: String,
    description: String,
    imagePath: String,
    year: Number,
    songs: [SongSchema]

});

const Album = mongoose.model('album', AlbumSchema);

module.exports = {
    Album: Album,
    AlbumSchema: AlbumSchema
}