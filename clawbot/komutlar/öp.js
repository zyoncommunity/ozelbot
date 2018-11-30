const Discord = require('discord.js');
exports.run = (client, message, args) => {
  message.delete();
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply(' :x: Öpüceğin birisini etiketlemelisin:x: ');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor("RANDOM")
    .setDescription(message.author.username + ` ${mesaj}'ı ` + ' Öpdü! 💋')
    .setImage("https://media.giphy.com/media/PFjXmKuwQsS9q/giphy.gif");
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['öp'],
  permLevel: 0
};

exports.help = {
  name: 'öp',
  description: 'İstediğiniz Kişiye Çekiç Atarsınız.',
  usage: 'öp'
};
