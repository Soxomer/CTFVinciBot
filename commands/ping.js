const {SlashCommandBuilder} = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),

    async execute(interaction) {
        if (interaction.guild) {
            interaction.reply("I'm not allowed to talk to you in public.");
            return;
        }
        await interaction.reply('Soukabliat!');
        await wait(2000);
        await interaction.editReply('I mean ... Pong!');
    },
};