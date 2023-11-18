const { Events } = require('discord.js');
const db = require('../dbInstance');
module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        db.sync().then(() => {
            console.log("Database & tables created!");
        });
        console.log(`Ready! Logged in as ${client.user.tag}`);
    },
};