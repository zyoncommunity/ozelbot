const Discord = require('discord.js');

exports.run = (bot, message) => {
  var args = message.content.split(' ').slice(1).join(' ');
  if (!args) return message.reply("Kanalın konusunu ne yapmam gerektiğini söyle!")
  message.channel.setTopic(`${args}`)
  .then(newChannel => message.channel.send(`Bu kanalın yeni konusu ***${args}***`))
  .catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'kanalkonusudeğiş',
  description: '**Bulunduğunuz** kanalın konusunu/açıklamasını değiştirir. ',
  usage: 'kanalkonusudeğiş yeni kanal ismi'
};