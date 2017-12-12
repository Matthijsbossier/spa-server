const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SongSchema = new Schema ({

    name: String,
    number: Number,
    length: String

});

const Song = mongoose.model('song', SongSchema);

module.exports = {
    Song: Song,
    SongSchema: SongSchema
}