const RootClient = require('./structures/RootClient');
const config = require('../config.json');
const client = new RootClient(config);
client.login();
