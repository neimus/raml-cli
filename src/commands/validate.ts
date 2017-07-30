import raml_parser = require('raml-1-parser')
import path = require('path')
import fs = require('fs')

const cconsole = require('colorize').console

exports.command = 'validate <file>'
exports.desc = 'Validates a root RAML file against the specification.'

exports.handler = function(argv) {
  cconsole.log('Validating #blue[%s]...', argv.file)
  const file = path.resolve(process.cwd(), argv.file)
  const api = raml_parser.loadApi(file, { rejectOnErrors: true, attributeDefaults: true })
  api.then(function (result) {
    cconsole.log('#green[Valid!]');
  }).catch(function(error) {
    cconsole.error('#red[%s]', JSON.stringify(error, null, 2));
  })
}