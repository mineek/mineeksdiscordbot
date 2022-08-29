const {EmbedBuilder} = require('discord.js');

module.exports = {
    createEmbed: function(title, description) {
        const embed = new EmbedBuilder()
            .setTitle(title)
            .setDescription(description)
            .setColor("Random")
            .setFooter({text: "Mineek's Bot", iconURL: "https://avatars.githubusercontent.com/u/84083936?v=4"})
            .setTimestamp(new Date());
        return embed;
    },
    createErrorEmbed: function(error) {
        const embed = new EmbedBuilder()
            .setTitle("Error")
            .setDescription(error)
            .setColor("Red")
            .setFooter({text: "Mineek's Bot", iconURL: "https://avatars.githubusercontent.com/u/84083936?v=4"})
            .setTimestamp(new Date());
        return embed;
    },
    createSuccessEmbed: function(success) {
        const embed = new EmbedBuilder()
            .setTitle("Success")
            .setDescription(success)
            .setColor("Green")
            .setFooter({text: "Mineek's Bot", iconURL: "https://avatars.githubusercontent.com/u/84083936?v=4"})
            .setTimestamp(new Date());
        return embed;
    }
}

