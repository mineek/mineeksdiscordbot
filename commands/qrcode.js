const embedHelper = require('../helpers/embeds');

module.exports = {
    name: 'qrcode',
    description: 'Generates a QR code from a given string.',
    usage: '<string>',
    execute(message, args) {
        const qr = require('qr-image');
        const qrCode = qr.imageSync(args.join(' '), { type: 'png' });
        // send the qr code without saving it to a file
        message.channel.send({files: [{attachment: qrCode, name: 'qrcode.png'}]});
    }
}