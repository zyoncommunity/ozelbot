const Discord = require('discord.js');
const prefix = ("!");
exports.run = async (bot, message, args) => {
  
    const arg = message.content.slice(prefix.length).trim().split(/ +/g);
            var cevir = require('node-google-translate-skidz');
            let hdil = arg[1];
            if(!hdil) return message.channel.send("Şöyle yazman gerekiyor: `!çeviri [tr/en/..] [yazı]`");
            if(hdil.length > 2) return message.channel.send("Şöyle yazman gerekiyor: `!çeviri [tr/en/..] [yazı]`");
            var cevrt = arg.slice(2).join(" ");
            if(!cevrt){
                message.channel.send("**Çeviri** Çevireceğin dili belirtmemişsin!");
            }
            cevir({
                text: cevrt,
                target: hdil
            }, function(result) {
                var dl = result.translation
                const embed = new Discord.RichEmbed()
                .setColor("RANDOM")
                .addField("Dil:", hdil)
                .addField("Çevrilmesi istenen metin:", cevrt)
                .addField("Çevrilmiş olan metin:", dl)
                .setFooter(message.author.username + ' ● Tarafından İstendi')
                 message.channel.send({embed})
                    .catch(error => message.channel.send("Esrarengiz bir hata ile karşılaştık!"))


      });

    }


  
	
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['çeviri'],
  permLevel: 0
};

exports.help = {
  name: 'çeviri',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'çeviri'
};
