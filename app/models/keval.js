var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var KevalSchema   = new Schema({
    name: String
});

module.exports = mongoose.model('Keval', KevalSchema);