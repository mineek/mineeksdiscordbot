const discord = require('discord.js');
const config = require('../config.json');
const fs = require('fs');
const embedHelper = require('../helpers/embeds');

var commands = [];

function loadCommands() {
    fs.readdirSync('./commands').forEach(file => {
        const command = require(`../commands/${file}`);
        commands.push(command);
    });
}

function getCommand(name) {
    return commands.find(command => command.name === name);
}

function executeCommand(command, message, args) {
    const commandPermissions = command.permissions;
    if (commandPermissions == "owner") {
        if (message.author.id != config.ownerId) {
            message.channel.createMessage({embed: embedHelper.createErrorEmbed("You do not have permission to use this command.")});
            return;
        }
    }
    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.channel.send({embeds: [embedHelper.createErrorEmbed("An error occured while executing that command, please inform <@973840094488305698> if this error persists.")]});
    }
}

module.exports = {
    commands,
    loadCommands,
    getCommand,
    executeCommand
}