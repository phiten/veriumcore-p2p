'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on veriumcore-p2p Module {0}'
};

module.exports = require('veriumcore-lib').errors.extend(spec);
