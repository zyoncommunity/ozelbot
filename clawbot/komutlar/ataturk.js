const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
  message.channel.send(':clock1: | Fotoğraf Yükleniyor..')
kingsman15 = "http://biriz.biz/ata/ata10b.jpg";kingsman14 = "http://biriz.biz/ata/ata42.jpg";kingsman13 = "http://biriz.biz/ata/ata43.jpg";kingsman12 = "http://biriz.biz/ata/ata13a.jpg";kingsman11 = "http://biriz.biz/ata/ata6b.jpg";  kingsman10 = "http://biriz.biz/ata/ata7a.jpg";kingsman9 = "http://biriz.biz/ata/ata40.jpg";kingsman8 = "http://biriz.biz/ata/ata41.jpg";kingsman7 = "http://biriz.biz/ata/ata37.jpg"; kingsman1 = "http://biriz.biz/ata/ata3a.jpg"; kingsman2 = "http://biriz.biz/ata/ata3b.jpg"; kingsman3 = "http://biriz.biz/ata/ata35.jpg"; kingsman4 = "https://media.giphy.com/media/KOfyaNVkdb1WU/giphy.gif"; kingsman5 = "http://biriz.biz/ata/ata4b.jpg"; kingsman6 = "https://media.giphy.com/media/3oz8xwOdeimwCtRWMg/giphy.gif";
    number = 1,2,4,3,5,6,8,7,9,10,11,13,15,14,12
    var random = Math.floor(Math.random() * (number - 1 + 14)) + 1; 
    switch(random) {
        case 1: message.channel.send({ files: [kingsman1] }); message.channel.bulkDelete(1); break;
        case 2: message.channel.send({ files: [kingsman2] }); message.channel.bulkDelete(1); break;
        case 3: message.channel.send({ files: [kingsman3] }); message.channel.bulkDelete(1); break;
        case 4: message.channel.send({ files: [kingsman4] }); message.channel.bulkDelete(1); break;
        case 5: message.channel.send({ files: [kingsman5] }); message.channel.bulkDelete(1); break;
        case 6: message.channel.send({ files: [kingsman6] }); message.channel.bulkDelete(1); break;
        case 7: message.channel.send({ files: [kingsman7] }); message.channel.bulkDelete(1); break;
        case 8: message.channel.send({ files: [kingsman8] }); message.channel.bulkDelete(1); break;
        case 9: message.channel.send({ files: [kingsman9] }); message.channel.bulkDelete(1); break;
        case 10: message.channel.send({ files: [kingsman10] }); message.channel.bulkDelete(1); break;
        case 11: message.channel.send({ files: [kingsman11] }); message.channel.bulkDelete(1); break;
        case 12: message.channel.send({ files: [kingsman12] }); message.channel.bulkDelete(1); break;
        case 13: message.channel.send({ files: [kingsman13] }); message.channel.bulkDelete(1); break;
        case 14: message.channel.send({ files: [kingsman14] }); message.channel.bulkDelete(1); break;
        case 15: message.channel.send({ files: [kingsman15] }); message.channel.bulkDelete(1); break;
};
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['atatürk', 'ata'],
  permLevel: 0
};

exports.help = {
  name: 'atatürk',
  description: 'Rastgele Atatürk Fotoğrafların Gösterir.!',
  usage: 'atatürk'
};
