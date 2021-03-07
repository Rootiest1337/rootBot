const MenuDocsClient = require('./Structures/RootClient');
const config = require('../config.json');

const client = new MenuDocsClient(config);
client.start();
