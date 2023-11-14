const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('validateCTF')
        .setDescription('Reloads a command.')
        .addStringOption(option => option.setName('ctf')
            .setDescription('The CTF to validate.')
            .addChoices(/*todo: add choices from list of CTFs in DB that are not solved by user*/
                {
                    ctfName: 'CTF1', value: 'CTF1'
                }, {
                    ctfName: 'CTF2', value: 'CTF2'
                })
            .setRequired(true))
        .addStringOption(option => option.setName('flag')
            .setDescription('The flag to validate.')
            .setRequired(true)),

    async execute(interaction) {
        // implement validation logic
        const ctfName = interaction.options.getString('ctf', true).toLowerCase();
        const flag = interaction.options.getString('flag', true).toLowerCase();
        // todo: get ctf from db
        // todo: validate flag
        // todo: update user solved challenges
        // todo: notify users
        const ctf = null;

        if (!ctf) {
            return interaction.reply(`There is no CTF with name \`${ctfName}\`!`);
        }
    },
};