const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor("RANDOM")
  .addField("**» Eğlence Komutları**", `!atatürk = Rastgele Atatürkün Fotoğraflarını Gösterir. \n!starwars = StarWars (Pixel Formatında) Filmini Gösterir. \n!banned = Dene ve Gör! \n!kahkaha = Kahkaha Atarsınız \n!kebap = Kebapmı İstiyorsun? \n!lenny = Lennyi Tanıyormusunuz? \n!ramazanpidesi = Canınız Ramazan Pidesimi Çekti? \n!koş = Koşarsınız.\n!çayiç = Çay İçersiniz. \n!çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \n!öp = İstediğiniz Birisini Öpersiniz. \n!tokat = İstediğiniz Kişiye Tokat Atarsınız \n!çayaşekerat = Çaya Şeker Atarsınız. \n!yumruk-at = Yumruk Atarsınız.`)
  .addField("**» Minecraft Komutları**", `!mcskin = İstediğiniz Minecraft Oyuncusunun Karakterini Gösterir. \n!mcbaşarım = Özelleştirile Bilir Minecraft Başarımı.`)
  .addField("**» Öneri**", `!öneri = Botun Yapımcısına Bota eklenmesi istediğiniz Şeyi Göndere bilirsiniz.`)
  .addField("**» Kullanıcı Komutları**", `!google = Googlede Arama Yaparsınız. \n!çeviri = İstediğiniz Yazıyı İstediğiniz Dilde Çevirir. \n!havadurumu = İstediğiniz Şehrin Hava Durumuna Bakarsınız. \n!hastebin = İstediğiniz Yazıyı Hastebine Yükler. \n!report = İstediğiniz Kullanıcıyı Reportlarsınız. \n!kısalt = İstediğiniz Linki Kısaltarak Özelleştire Bilirsiniz. \n!yazı-tura = Yazı Tura Atarsınız. \n!yaz = Bota İsediğinizi Yazdırırsınız. \n!sunucubilgi = Bulunduğunuz Sunucu Hakkında Bilgi Verir. \n!sunucuresmi = Bulunduğunuz Sunucunun Resmin Gösterir. \n!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. \n!avatarım = Avatarınınızı Gösterir. \n!şanslısayım = Bot Sizin Şanslı Sayınızı Söyler.`)
  .addField("**» Sunucu Yetkilisi Komutları**", `!ban = İstediğiniz Kişiyi Sunucudan Banlar. \n!kick  = İstediğiniz Kişiyi Sunucudan Atar. \n!unban = İstediğiniz Kişinin Yasağını Açar. \n!sustur = İstediğiniz Kişiyi Susturur. \n!sil = Belirtilen Miktarda Mesajı Silir. (MAX 100) \n!oylama = Oylama Açar. \n!duyuru = Güzel Bir Duyuru Görünümü Sağlar.`)
  .addField("**» Botun Ana Komutları**", `!yardım = BOT Komutlarını Atar. \n!bilgi = BOT Kendisi Hakkında Bilgi Verir. \n!ping = BOT Gecikme Süresini Söyler. \n!davet = BOT Davet Linkini Atar. \n!istatistik = BOT İstatistiklerini Gösterir.`)
  .setFooter('')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
