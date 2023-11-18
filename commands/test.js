// useless file, just for testing purposes
// code for creating a modal

// const {
//     SlashCommandBuilder,
//     ActionRowBuilder,
//     Events,
//     ModalBuilder,
//     TextInputBuilder,
//     TextInputStyle, StringSelectMenuOptionBuilder, StringSelectMenuBuilder
// } = require('discord.js');
// const {DataTypes} = require('sequelize');
// const Ctfs = require('../models/Ctfs');
//
// module.exports = {
//     data: new SlashCommandBuilder()
//         .setName('create-ctf')
//         .setDescription('Create a new Capture The Flag (CTF) challenge.'),
//
//     async execute(interaction) {
//         const modal = new ModalBuilder()
//             .setCustomId('myModal')
//             .setTitle('My Modal');
//
//         const ctfNameInput = new TextInputBuilder()
//             .setCustomId('ctfNameInput')
//             .setLabel("What's the name of your CTF?")
//             // Paragraph means multiple lines of text.
//             .setStyle(TextInputStyle.Short);
//
//         const ctfLinkInput = new TextInputBuilder()
//             .setCustomId('ctfLinkInput')
//             .setLabel("What's the link for your CTF?")
//             // Paragraph means multiple lines of text.
//             .setStyle(TextInputStyle.Short);
//
//         // const ctfCategoryInput = new TextInputBuilder()
//         //     .setCustomId('ctfCategoryInput')
//         //     .setLabel("What's the category of your CTF?")
//         //     // Paragraph means multiple lines of text.
//         //     .setStyle(TextInputStyle.Short);
//
//         const select = new StringSelectMenuBuilder()
//             .setCustomId('starter')
//             .setPlaceholder('Make a selection!')
//             .addOptions(
//                 new StringSelectMenuOptionBuilder()
//                     .setLabel('Bulbasaur')
//                     .setDescription('The dual-type Grass/Poison Seed Pokémon.')
//                     .setValue('bulbasaur'),
//                 new StringSelectMenuOptionBuilder()
//                     .setLabel('Charmander')
//                     .setDescription('The Fire-type Lizard Pokémon.')
//                     .setValue('charmander'),
//                 new StringSelectMenuOptionBuilder()
//                     .setLabel('Squirtle')
//                     .setDescription('The Water-type Tiny Turtle Pokémon.')
//                     .setValue('squirtle'),
//             );
//
//         // An action row only holds one text input,
//         // so you need one action row per text input.
//         const firstActionRow = new ActionRowBuilder().addComponents(ctfNameInput);
//         const secondActionRow = new ActionRowBuilder().addComponents(ctfLinkInput);
//         // const thirdActionRow = new ActionRowBuilder().addComponents(ctfCategoryInput);
//         const fourthActionRow = new ActionRowBuilder().addComponents(select);
//         // Add inputs to the modal
//         modal.addComponents(firstActionRow, secondActionRow, fourthActionRow);
//
//         // Show the modal to the user
//         await interaction.showModal(modal);
//
//         // listen for the modal's submit event
//         interaction.client.on(Events.InteractionCreate, interaction => {
//             if (!interaction.isModalSubmit()) return;
//
//             // Get the data entered by the user
//             const favoriteColor = interaction.fields.getTextInputValue('favoriteColorInput');
//             const hobbies = interaction.fields.getTextInputValue('hobbiesInput');
//             console.log({favoriteColor, hobbies});
//             return interaction.reply({content: 'Thanks for submitting!', ephemeral: true});
//         });
//     }
// };