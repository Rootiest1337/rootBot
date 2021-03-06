const { Client } = require('discord.js')

module.exports = class RootClient extends Client {
    constructor(options = {}) {
        super({
            disableMentions: 'everyone'

        });
        this.validate(options);

        this.once('ready', () => {
            console.log(`Logged in as ${this.user.username}`);  
            this.user.setActivity('github.com/Rootiest1337/rootBot', {type: 4});
            });

        this.on('message', async (message) => {
            const mentionRegex = RegExp(`^<@!${this.user.id}>$`)
            const mentionRegexPrefix = RegExp(`^<@!${this.user.id}> `)

            if( !message.guild || message.author.bot) return;

            if (message.content.match(mentionRegex)) message.channel.send(`My prefix for "${message.guild.name} is " \`${this.prefix}\`.`)

            const prefix = message.content.match(mentionRegexPrefix) ?
                message.content.match(mentionRegex)[0] : this.prefix;

            // elint-disable-next-line no-unused-vars
            const [cmd, ...args] = message.content.slice(prefix.length).trim().split(/ +/g);

            if (cmd.toLowerCase() === 'hello'){
                message.channel.send('Hey!');
            }
        })
    }

    validate(options) {
        if (typeof options !== 'object') throw new TypeError('Options should be a type of object.');

        if (!options.token) throw new Error('You must pass the token for the client.');
        this.token = options.token;

        if (!options.prefix) throw new Error('You must pass the prefiox for the client.');
        if (typeof options.prefix !== 'string') throw new Error('Prefix should be a type of String.');
        this.prefix = options.prefix
    }

    async login(token = this.token){
        super.login(token);
    }
};