#!/usr/bin/env node
var shellify = require('shellify');


shellify({
  root: __dirname.replace(/commands$/, ''),
  commands: {
    run: {
      note: 'Starts the Gold app',
      options: {}
    }
  }
});
