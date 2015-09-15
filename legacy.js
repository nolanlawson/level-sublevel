var nut   = require('./nut')
var shell = require('./shell') //the shell surrounds the nut
var Codec   = require('level-codec')
var codec   = new Codec()
var merge = require('xtend')

var ReadStream = require('level-iterator-stream')

var precodec = require('./codec/legacy')

module.exports = function (db, opts) {

  opts = merge(db.options, opts)

  return shell ( nut ( db, precodec, codec ), [], ReadStream, db.options)

}

