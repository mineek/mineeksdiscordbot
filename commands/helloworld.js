module.exports = {
    name: 'helloworld',
    description: 'Hello World!',
    execute(message, args) {
        message.channel.send('Hello World with args: ' + args);
    }
}