const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('Yapıcağın Oylamanın İsmin Yaz');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setAuthor('OYLAMA')
    .setColor("RANDOM")
    .setDescription(`${mesaj} \n\n\ Evet İçin: ✅ Hayır İçin: ❌ `)
    return message.channel.sendEmbed(embed);
  
  message.react('✅').then(() => message.react('❌'));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'oylama',
  description: 'Oylama Yapar.',
  usage: 'oylama'
};
