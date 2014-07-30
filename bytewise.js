var nut   = require('./nut')
var shell = require('./shell') //the shell surrounds the nut
var codec = require('levelup/lib/codec')
// Currently this uses pull streams,
// and not levelup's readstream, but in theory
// I should be able pretty much just drop that in.
var ReadStream = require('levelup/lib/read-stream')

var precodec = require('./codec/bytewise')

module.exports = function (db) {

  return shell ( nut ( db, precodec, codec ), [], ReadStream, db.options)

}


