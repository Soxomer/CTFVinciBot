const {SlashCommandBuilder} = require('discord.js');

// function getCommandList() {
//     const commands = [];
//     const fs = require('node:fs');
//     const path = require('node:path');
//     const commandFiles = fs.readdirSync(__dirname).filter(file => file.endsWith('.js'));
//
//     console.log("commands File", commandFiles);
//     for (const file of commandFiles) {
//         const filePath = path.join(__dirname, file);
//         const command = require(filePath);
//         // Set a new item in the Collection with the key as the command name and the value as the exported module
//         if ('data' in command && 'execute' in command) {
//             commands.push({ name: command.data.name, value: command.data.name.toLowerCase() });
//         } else {
//             console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
//         }
//     }
//     console.log(commands);
//     return commands;
// }
// getCommandList();

module.exports = {
    data: new SlashCommandBuilder()
        .setName('reload')
        .setDescription('Reloads a command.')
        .addStringOption(option =>
            option.setName('command')
                .setDescription('The command to reload.')
                // FIXME find a way to update dynamically
                .addChoices(
                    {name: "reload", value: "reload"},
                    {name: 'ping', value: 'ping'},
                    {name: 'server', value: 'server'},
                    {name: 'user', value: 'user'},
                    {name: 'validate-ctf', value: 'validate-ctf'},
                    {name: 'create-ctf', value: 'create-ctf'},
                    // {name: 'modify-ctf', value: 'modify-ctf'},
                    // {name: 'get-random-ctf', value: 'get-random-ctf'},
                    // {name: 'delete-ctf', value: 'delete-ctf'},
                    // {name: 'leaderboard', value: 'leaderboard'},
                    // {name: 'help', value: 'help'},
                )
                .setRequired(true)),

    async execute(interaction) {

        const commandName = interaction.options.getString('command', true).toLowerCase();
        const command = interaction.client.commands.get(commandName);

        if (!command) {
            return interaction.reply(`There is no command with name \`${commandName}\`!`);
        }

        delete require.cache[require.resolve(`./${command.data.name}.js`)];

        try {
            await interaction.client.commands.delete(command.data.name);
            const newCommand = require(`./${command.data.name}.js`);
            await interaction.client.commands.set(newCommand.data.name, newCommand);
            await interaction.reply(`Command \`${newCommand.data.name}\` was reloaded!`);
        } catch (error) {
            console.error(error);
            await interaction.reply(`There was an error while reloading a command \`${command.data.name}\`:\n\`${error.message}\``);
        }
    },
};
