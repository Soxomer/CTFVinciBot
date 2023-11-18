/// pseudo code

// when user types /modifyctf
// ask for ctf id
// ask for field to modify
// ask for new value
// update database
// return confirmation message

// TODO create interaction with select menu to modify ctf
//  https://discordjs.guide/message-components/interactions.html

// async execute(interaction) {
    // create a select menu
    // const row = new ActionRowBuilder()
    // const categoryInput = new StringSelectMenuBuilder()
    //     .setCustomId('ctfCategoryInput')
    //     .setPlaceholder('Choose a category!')
    //     .addOptions(
    //         new StringSelectMenuOptionBuilder()
    //             .setLabel('Web Exploitation')
    //             .setDescription('The dual-type Grass/Poison Seed Pokémon.')
    //             .setValue('web'),
    //         new StringSelectMenuOptionBuilder()
    //             .setLabel('Reverse Engineering')
    //             .setDescription('The Fire-type Lizard Pokémon.')
    //             .setValue('reverse'),
    //         new StringSelectMenuOptionBuilder()
    //             .setLabel('Crypto')
    //             .setDescription('The Water-type Tiny Turtle Pokémon.')
    //             .setValue('crypto'),
    //     );

    // const difficultyInput = new StringSelectMenuBuilder()
    //     .setCustomId('ctfDifficultyInput')
    //     .setPlaceholder('Choose a difficulty!')
    //     .addOptions(
    //         new StringSelectMenuOptionBuilder()
    //             .setLabel('Easy')
    //             .setDescription('Easy')
    //             .setValue('easy'),
    //         new StringSelectMenuOptionBuilder()
    //             .setLabel('Medium')
    //             .setDescription('Medium')
    //             .setValue('medium'),
    //         new StringSelectMenuOptionBuilder()
    //             .setLabel('Hard')
    //             .setDescription('Hard')
    //             .setValue('hard'),
    //     );
    //
    // const pointsInput = new StringSelectMenuBuilder()
    //     .setCustomId('ctfPointsInput')
    //     .setPlaceholder('Choose a points!')
    //     .addOptions(
    //         new StringSelectMenuOptionBuilder()
    //             .setLabel('100')
    //             .setDescription('100')
    //             .setValue('100'),
    //         new StringSelectMenuOptionBuilder()
    //             .setLabel('200')
    //             .setDescription('200')
    //             .setValue('200'),
    //         new StringSelectMenuOptionBuilder()
    //             .setLabel('300')
    //             .setDescription('300')
    //             .setValue('300'),
    //     );
    // row.addComponents(categoryInput/*, difficultyInput, pointsInput*/);

    // await interaction.reply({content: 'Select a category', components: [row]});
    // const filter = i => i.customId === 'select' && i.user.id === interaction.user.id;
    // const collector = interaction.channel.createMessageComponentCollector({filter, time: 15000});
    // collector.on('collect', async i => {
    //     if (i.values[0] === 'web') {
    //         await i.update({content: 'Web Exploitation', components: []});
    //     } else if (i.values[0] === 'reverse') {
    //         await i.update({content: 'Reverse Engineering', components: []});
    //     } else if (i.values[0] === 'crypto') {
    //         await i.update({content: 'Crypto', components: []});
    //     }
    // });
    // collector.on('end', collected => console.log(`Collected ${collected.size} items`));
    // return interaction.reply({content: 'Thanks for submitting!', ephemeral: true});
// }