const Discord = require('discord.js');

exports.run = (client, message, args) => {
let mention = message.mentions.users.first();
let sender = "";

if (message.channel.guild.member(message.author).nickname == null) {
  sender = message.author.username;
} else {
  sender = message.channel.guild.member(message.author).nickname;
}

if (mention != null || mention != undefined) {
  var name = mention.username + "'s ";
  if (mention.username.endsWith("s")) {
    name = mention.username + "' ";
  }
  const avatarEmbedOther = new Discord.RichEmbed()
  .setAuthor(mention.username, mention.avatarURL)
  .setColor("RANDOM")
  .setImage(mention.avatarURL)
  .addField(' ', `[]()`, false);
  message.channel.sendEmbed(avatarEmbedOther);
  return;
} else {
  const avatarEmbedYou = new Discord.RichEmbed()
  .setAuthor(sender, message.author.avatarURL)
  .setColor("RANDOM")
  .setImage(message.author.avatarURL)
  .addField(' ', `[]()`, false);
  message.channel.sendEmbed(avatarEmbedYou);
  return;
}
message.channel.sendMessage("Hata!");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["avatarbul"]
};

exports.help = {
  name: 'avatarbul',
  description: 'Minecraft başarımı gönderir.',
  usage: 'mcbaşarım Title|Text (/achievement Achievement Get|Used a Command!)'
};