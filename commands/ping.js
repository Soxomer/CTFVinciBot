const {SlashCommandBuilder} = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
let i = 0;


module.exports = {
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),

    async execute(interaction) {
        if (interaction.guild) {
            interaction.reply({
                content: `I'm not allowed to talk to you in public. DM me darling ;).`,
                ephemeral: true
            });
            return;
        }

        await interaction.reply(`Soukabliat`);
        await wait(2000);
        await interaction.editReply('I mean ... Pong!');
    },
};