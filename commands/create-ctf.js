const {
    SlashCommandBuilder,
    ActionRowBuilder,
    Events,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle,
    StringSelectMenuOptionBuilder,
    StringSelectMenuBuilder,
    PermissionFlagsBits
} = require('discord.js');
const {DataTypes} = require('sequelize');
const Ctfs = require('../models/Ctfs');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('create-ctf')
        .setDescription('Create a new Capture The Flag (CTF) challenge.')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .addStringOption(option => option
            .setName('name')
            .setDescription('The name of the CTF')
            .setRequired(true))
        .addStringOption(option => option
            .setName('link')
            .setDescription('The link of the CTF')
            .setRequired(true))
        .addStringOption(option => option.setName('flag')
            .setDescription('The flag of the CTF')
            .setRequired(true))
        .addStringOption(option => option.setName('category')
            .setDescription('The gif category')
            .setRequired(true)
            .addChoices(
                // TODO add all the categories from root-me
                {name: "Web Exploitation", value: "web"},
                {name: 'Reverse Engineering', value: 'reverse'},
                {name: 'Crypto', value: 'crypto'},
                {name: 'Binary Exploitation', value: 'binary'},
                {name: 'Forensics', value: 'forensics'},
                {name: 'Misc', value: 'misc'},
                {name: 'OSINT', value: 'osint'},
                {name: 'Pwn', value: 'pwn'},
                {name: 'Recon', value: 'recon'},
                {name: 'Stegano', value: 'stegano'},
            )
        )
        .addStringOption(option => option.setName('difficulty')
            .setDescription('The difficulty of the CTF')
            .setRequired(true)
            // TODO remplace name with stars or flames or flags or whatever
            .addChoices({name: "Easy", value: "easy"}, {name: 'Easy_Medium', value: 'easy_medium'}, {
                name: 'Medium', value: 'medium'
            }, {name: 'Medium_Hard', value: 'medium_hard'}, {name: 'Hard', value: 'hard'},)),

    async execute(interaction) {
        const name = interaction.options.getString('name');
        const link = interaction.options.getString('link');
        const flag = interaction.options.getString('flag');
        const category = interaction.options.getString('category');
        const difficulty = interaction.options.getString('difficulty');
        let points = 0;
        switch (difficulty) {
            case 'easy':
                points = 100;
                break;
            case 'easy_medium':
                points = 200;
                break;
            case 'medium':
                points = 300;
                break;
            case 'medium_hard':
                points = 400;
                break;
            case 'hard':
                points = 500;
                break;
            default:
                points = 0;
        }

        // add the ctf to the database
        try {
            const ctf = await Ctfs.create({
                name, link, flag, category, difficulty, points,
            });
        } catch (e) {
            console.log(e);
            return interaction.reply({content: 'There was an error while submitting your CTF.', ephemeral: true});
        }

        // TODO add a confirmation message with the embed preview of the ctf
        // https://discordjs.guide/popular-topics/embeds.html#embed-preview
        return interaction.reply({content: 'Thanks for submitting!', ephemeral: true});
    }
};
