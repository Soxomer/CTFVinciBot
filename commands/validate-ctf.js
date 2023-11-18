const {
    SlashCommandBuilder, User, StringSelectMenuOptionBuilder, StringSelectMenuBuilder, ActionRowBuilder
} = require('discord.js');
const {DataTypes} = require('sequelize');
const Users = require('../models/Users');
const Solved_Ctfs = require('../models/Solved_Ctfs');
const Ctfs = require('../models/Ctfs');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('validate-ctf')
        .setDescription('Reloads a command.')
        .addStringOption(option => option.setName('ctf')
            .setDescription('The id of CTF to validate.')
            .setRequired(true))
        .addStringOption(option => option.setName('flag')
            .setDescription('The flag to validate.')
            .setRequired(true)),

    async execute(interaction) {
        // validate flag
        const ctfId = interaction.options.getString('ctf');
        const flag = interaction.options.getString('flag');

        const ctf = await Ctfs.findOne({where: {ctf_id: ctfId}});
        if (!ctf) {
            interaction.reply({content: `CTF with id ${ctfId} not found.`, ephemeral: true});
            return;
        }

        if (ctf.flag.toLowerCase() !== flag.toLowerCase()) {
            interaction.reply({content: `Invalid flag, keep searching buddy!!!`, ephemeral: true});
            return;
        }

        try {
            const solved = await Solved_Ctfs.create({user_id: interaction.user.id, ctf_id: ctfId});
            if (solved) {
                interaction.reply({content: `Congrats, you solved the challenge ${ctf.name}.`, ephemeral: true})
            } else {
                // error will be thrown if user already solved this challenge
            }
        } catch (e) {
            interaction.reply({content: `You alresssssady solved this challenge.`, ephemeral: true});
        }
    }
}

// TODO add context menu validation from ctf message
// https://discordjs.guide/interactions/context-menus.html#registering-context-menu-commands
