const Discord = require('discord.js');


exports.run = (bot, message, args) => {
    if (!args) return message.reply("You must suggest something to ThatMajesticGuy!")

if (message.channel.type === 'dm') return;
    var args2 = message.content.split(' ').slice(1).join(' ');
    const channel3 = bot.users.get('423141488323592192')
    channel3.send('', {
      embed: {
        color: 654456,
        author: {
          name: "Bir Öneri gönderildi",
          icon_url: message.author.avatarURL,
        },
        title: "Öneri",
        description: `Gönderilen sunucu \n**${message.guild.name}** \n\n\nMesaj \n**${args2}** \n\n\nYollayan \n${message.author.tag}`,

}})};

  exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [''],
    permLevel: 0
  };
  
  exports.help = {
    name: 'öneri',
    description: 'Yazdığınız şeyi bildirir. ',
    usage: 'bildir kullanıcı sebep'
  };