const {Client, GatewayIntentBits} = require('discord.js');
const config = require('./config.json');
const commands = require('./handlers/commands');
const embedHelper = require('./helpers/embeds');

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.on('ready', () => {
    commands.loadCommands();
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    // some build in commands
    if (commandName === 'help') {
        var embed = embedHelper.createEmbed('Help', 'List of all commands');
        commands.commands.forEach(command => {
            embed.addFields({name: command.name, value: command.description});
        });
        message.channel.send({embeds: [embed]});
        return;
    }

    const command = commands.getCommand(commandName);

    if (!command) return message.channel.send({embeds: [embedHelper.createErrorEmbed("That command does not exist.")]});

    commands.executeCommand(command, message, args);
});

client.login(config.token);