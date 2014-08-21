// TODO: Make the gold bar icon, like http://lighter.io/gold
var base = '\u001b[39m';
var grey = '\u001b[90m';
var red = '\u001b[31m';
var yellow = '\u001b[33m';
var white = '\u001b[37m';

module.exports = function () {

  var lighter = require('lighter');
  lighter({
    dir: __dirname.replace(/commands$/, ''),
    enableCluster: false,
    httpPort: 9999,
    asciiArt: ['   ____       _     _',
      '  / ___| ___ | | __| |',
      ' | |  _ / _ \\| |/ _` |',
      ' | |_| | (_) | | (_| |',
      '  \\____|\\___/|_|\\__,_|',
      '',
      '',
      '',
      '']
  });

};
