const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Botunuz olan ${client.user.tag} sunucuya giriş yaptı!`);
});

client.on('message', msg => {
                 ///.komut kısmı///
  if (msg.content.toLowerCase() === '.komutlar') {
    msg.reply('Komutlarımız.');
    msg.channel.sendMessage('```.sigaraic .dmvar .dmyok .ping .kolsuz   .dmci sicil .satinal .31 .06```');
    msg.reply('Komutlarımız bunlardır. eklemek istediğin komut varsa kurucuya bildir.');
  }
                 ///Komut Ksıım Bitiş///
                ///MSJ  KISIMLARI///
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm Selam.');
  }
  if (msg.content.toLowerCase() === 'dm') {
    msg.reply('Darly Yumezing.');
  }
  if (msg.content.toLowerCase() === 'dmci') {
    msg.reply('Darly Yumezing 1 numaradır o işte ben iyi bilirim.');
  }
  if (msg.content.toLowerCase() === 'en iyi dm ci') {
    msg.reply('Darly Yumezing dir.');
  }
  if (msg.content.toLowerCase() === 'selamun aleyküm') {
    msg.reply('Aleyküm Selam MoRuQ.');
  }
  if (msg.content.toLowerCase() === 'nabıyonuz') {
    msg.reply('İyi senden?');
  }
  if (msg.content.toLowerCase() === 'iyi') {
    msg.reply('İyi bakalım o halde varmı bu gün DM?');
  }
  if (msg.content.toLowerCase() === 'dm yok') {
    msg.reply('Tüh AMK şimdi canım DM çekti atsana bana DM');
  }
  if (msg.content.toLowerCase() === 'dm var') {
    msg.reply('iyi DM ler ve iyi JAİLLER reiz');
  }
  if (msg.content.toLowerCase() === '.06') {
    msg.content.toLowerCase('http://www.pavyoncu.com/wp-content/uploads/2017/12/istanbul-ankara-ve-adanada-gidebileceginiz-pavyonlar.jpg');
  }
  if (msg.content.toLowerCase() === '.sigaraic') {
    msg.reply('Sigara İçiyorum!');
    msg.channel.sendMessage(' :smoking: :cloud: :cloud: :cloud: ');
    msg.channel.sendMessage(' :smoking: :cloud: :cloud: ');
    msg.channel.sendMessage(' :smoking: :cloud:  ');
    msg.channel.sendMessage(' :smoking:  ');
    msg.reply(' Sigaram Bitti! Bot İçsin Ama Siz İçmeyin!');
  }
  if (msg.content.toLowerCase() === '.sil') {
    msg.channel.bulkDelete(100);
    msg.channel.sendMessage("100 adet mesaj silindi!");
  }
  if (msg.content.toLowerCase() === '.ozelsil') {
    msg.channel.bulkDelete(5);
    msg.channel.sendMessage("5 adet mesaj silindi!");
  }
  if (msg.content.toLowerCase() === '.ping') {
    msg.reply('Senin PİNGİN **' + client.ping + '** ms');
  }
  if (msg.content.toLowerCase() === '.kolsuz') {
    msg.channel.sendMessage('**William Gardner**');
  }
         ///Küfür Engelleme kısmı///
  if (msg.content === 'https://discord.gg/') {
   msg.delete(30)
    msg.reply('Bak senin AMK reklam yapıp durma!');
  }
  if (msg.content === 'https://www.youtube.com') {
   msg.delete(30)
    msg.reply('Bak senin AMK reklam yapıp durma!');
  }
  if (msg.content === 'amk') {
   msg.delete(30)
    msg.reply('AMK niye küfür ediyon?!');
  }
  if (msg.content === 'orospu') {
   msg.delete(30)
    msg.reply('Küfür etmeee!');
  }
  if (msg.content === 'orospu çocu') {
   msg.delete(30)
    msg.reply('Ailevi karıştırma lan!');
  }
  if (msg.content === 'orospu cocu') {
   msg.delete(30)
    msg.reply('Bak ailevi karıştırıyosun SİNİRLENİYOM!');
  }
  if (msg.content === 'aq') {
   msg.delete(30)
    msg.reply('Ozaman SENİNN AmK niye küfür ediyon lan!');
  }
  if (msg.content.toLowerCase() === '.dmci sicil') {
    msg.channel.sendMessage('https://www.rina-roleplay.net/forum/karakter/Darly_Yumezing#sicil');
  }
  if (msg.content === 'ananı') {
 msg.delete(30)
  msg.reply('AMK niye küfür ediyon?!');
}
if (msg.content === 'ananı sikeyim') {
 msg.delete(30)
  msg.reply('AMK niye küfür ediyon?!');
}
if (msg.content === 'ananı') {
 msg.delete(30)
  msg.reply('AMK niye küfür ediyon?!');
}
if (msg.content === 'anneni') {
 msg.delete(30)
  msg.reply('AMK niye küfür ediyon?!');
}
if (msg.content === 'sikeyim') {
 msg.delete(30)
  msg.reply('AMK niye küfür ediyon?!');
}
if (msg.content === 'anneni sikeyim') {
 msg.delete(30)
  msg.reply('AMK niye küfür ediyon?!');
}
if (msg.content === 'oç') {
 msg.delete(30)
  msg.reply('Sensin O!');
}
if (msg.content === 'orosbu evladı') {
 msg.delete(30)
  msg.reply('Sensin O!');
}
if (msg.content === 'orospu evladı') {
 msg.delete(30)
  msg.reply('Sensin O!');
}
if (msg.content === 'oc') {
 msg.delete(30)
  msg.reply('Sensin o!');
}
if (msg.content === 'ananı') {
 msg.delete(30)
  msg.reply('Ben sikeyim.');
}
if (msg.content === 'ananı sikim') {
 msg.delete(30)
  msg.reply('Bende senin.');
}
if (msg.content === 'sikim') {
 msg.delete(30)
  msg.reply('ŞŞŞT ananı döverim.');
}
if (msg.content === 'selam') {
  msg.channel.sendMessage('**Kızlar siqiim sızlarr.**');
}
if (msg.content === 'mk') {
 msg.delete(30)
  msg.reply('Olur tamam.');
}
if (msg.content === '.satinal') {
 msg.delete(30)
  msg.reply('Vay çakal vaay. bilek.exe için Darlye MSJ at dc den');
}
if (msg.content === '.31') {
 msg.channel.sendMessage('https://cdn.discordapp.com/attachments/532320671288524820/568747440103096330/no.gif')
 msg.reply('Günah olm Günaahğğğğğ vur banaağğ')
}
       ///Youtube Kanal Tanıtım + Video paylaşım//
if (msg.content.toLowerCase() === '.kanalpaylas') {
  msg.delete(30)
 msg.channel.sendMessage('https://media.discordapp.net/attachments/568568621924745242/568763537342726144/VIP1.png?width=770&height=54')
 msg.channel.sendMessage('Kanalımıza abone olamayı unutmayınız.')
 msg.channel.sendMessage('https://www.youtube.com/channel/UCfKI--0nkcGWnAhxUksPapQ?sub_confirmation=1')
 msg.channel.sendMessage('https://www.youtube.com/channel/UCez4T-Mk2y0LGRVBB1zbb0A?sub_confirmation=1')
 msg.channel.sendMessage('https://media.discordapp.net/attachments/568568621924745242/568763537342726144/VIP1.png?width=770&height=54')
}
//YETKİLİ ÖZEL KOMUTLAR//
if (msg.content.toLowerCase() === '.ozelkomutlar') {
  msg.channel.sendMessage('```.kanalpaylas .ozelkomutlar .ozelsil .sil .komutlar```')
}
});

client.login('NTY4NTQ0MDQ4NjgwNTM0MDI3.XLjvAw.dw8KtZGvjoWDZffSmWSj4kNUtkw');
