const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AlbumSchema = require('./album.model').AlbumSchema;

const ArtistSchema = new Schema({

    name: String,
    description: String,
    imagePath: String,
    albums: [AlbumSchema]

});

const Artist = mongoose.model('artist', ArtistSchema);

//Test: add an detailed artist every time the server starts.
const artist = new Artist({
    name: 'Bon Iver',
    description: '',
    imagePath: 'https://i.scdn.co/image/e759e8e517c8936035d6fb8a7535286937cf4e23',
    albums: [
        { name: 'For Emma, Forever Ago',
         description: 'First album',
         imagePath: 'https://img.discogs.com/IC3kOdrS1w-zSkOJTxWJghz_AGs=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1357686-1259230699.jpeg.jpg',
         year: 2009,
         songs: [ {
             name: 'Skinny Love',
             number: 3,
             length: '3:30'
         }] 
        }] 
}).save();

module.exports = Artist;