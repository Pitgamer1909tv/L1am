const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');

//Legt den Namen Client Fest
const client = new Client();

//generiert ein QRCODE
client.on('qr', (qr) => {
    //Den Code Via Handy Abscannen
    console.log('QR RECEIVED', qrcode.generate(qr, { small: true }));
});
//wenn der Client fertig ist Gibt es Eine Nachricht im Log 
client.on('ready', () => {
    console.log('Client is ready!');
});
//Zeigt in der Console die NAchrichten an.
client.on('message', message => {
    console.log(message.from)
    console.log(message.body);
});

client.on('message', message => {
    if (message.body === 'Test') {
        message.reply('The server is currently active!');
    }
});

client.on('message', message => {
    if (message.body === '#test') {
        message.reply('The server is currently active!');
    }
});

client.on('message', message => {
    if (message.body === '👀') {
        message.reply('👀👀');
    }
});

client.on('message', message => {
    if (message.body === '#update') {
        message.reply('*—『 UPDATES 』—* -                                                                                                                                                                                                                                                                                                                             *#alle* _Makiert alle Gruppen Mitglieder._ _______________________________                                                                                                                                                                                                                                                                                                                              *#leer* _Du erhällst eine Leere Nachricht_ - ⬇️⬇️ _                                                                                                                                                                                                                                                                                                                            ~Bot-Team_');
    }
});

client.on('message', message => {
    if (message.body === '#owner') {
        message.reply('*Die Owner von Mir sind Nico Pit(wa.me/4917629368004) und Nico Lorenzo(wa.me/49491759610400). Wenn ihr mehr über die Beiden Wissen Wollt schreibt: #NicoP oder #Lorenzo');
    }
});

client.on('message', message => {
    if (message.body === '#Owner') {
        message.reply('*Die Owner von Mir sind Nico Pit(wa.me/4917629368004) und Nico Lorenzo(wa.me/49491759610400). Wenn ihr mehr über die Beiden Wissen Wollt schreibt: #NicoP oder #Lorenzo');
    }
});

client.on('message', message => {
    if (message.body === '#spiel') {
        message.reply('*—『 SPIEL 』—* Das Spiel ist ein uraltes Spiel, dass jeder seit Anbeginn der Zeit spielt. Die meisten wissen es nur noch nicht, weswegen sie noch nicht verlieren können. Gewinnen kannst du übrigens auch nicht. Deine Aufgabe ist es, es zu schaffen, nicht an das Spiel zu denken. Denkst du dran, hast du verloren, und du musst irgendwen anders darüber informieren, der dann logischerweise auch verlieren sollte, und so geht die Kette weiter. Wichtig: Du gehörst zum Spiel, wie Müller zu Milch. Das heißt: Du kannst nicht ausscheiden oder nicht mehr mitspielen. Das einzige, was dir bleibt, ist zu vergessen. Lerne zu vergessen!');
    }
});

client.on('message', message => {
    if (message.body === '#ping') {
        message.reply('pong!');
    }
});

client.on('message', message => {
    if (message.body === 'Liam') {
        message.reply('Hallo, ich bin Liam Bot');
    }
});

client.on('message', message => {
    if (message.body === '#menu') {
        message.reply('Unfortunately there is no menu available yet!');
    }
});

client.on('message', message => {
    if (message.body === '#menü') {
        message.reply('Unfortunately there is no menu available yet!');
    }
});

client.on('message', message => {
    if (message.body === '#gewonnen') {
        message.reply('*Du kannst bei dem #spiel nicht gewinnen!*');
    }
});

//Verloren
client.on('message', message => {
    if (message.body === '#verloren') {
        message.reply('Halbautomatische Spielmitteilung                                                                                                                                                                                                                                                                                                                            *Du hast verloren!*');
    }
});
//Verloren
client.on('message', message => {
    if (message.body === '#Verloren') {
        message.reply('Halbautomatische Spielmitteilung                                                                                                                                                                                                                                                                                                                            *Du hast verloren!*');
    }
});

client.on('message', message => {
    if (message.body === 'Guten Morgen') {
        message.reply('*Guten Morgen*');
    }
});

client.on('message', message => {
    if (message.body === 'Guten morgen') {
        message.reply('*Guten Morgen*');
    }
});

client.on('message', message => {
    if (message.body === 'Hast du Kekse') {
        message.reply('*Hier hast du ein Keks: 🍪*');
    }
});

client.on('message', message => {
    if (message.body === 'Wo ist mein Keks') {
        message.reply('*Hier hast du ein Keks: 🍪*');
    }
});

client.on('message', message => {
    if (message.body === 'Hast du Kekse?') {
        message.reply('*Hier hast du ein Keks: 🍪*');
    }
});

client.on('message', message => {
    if (message.body === 'Wo ist mein Keks?') {
        message.reply('*Hier hast du ein Keks: 🍪*');
    }
});

client.on('message', message => {
    if (message.body === 'Wie geht es dir') {
        message.reply('_Mir Geht es sehr gut. Und dir?_');
    }
});

client.on('message', message => {
    if (message.body === 'Wie geht es dir?') {
        message.reply('_Mir Geht es sehr gut. Und dir?_');
    }
});

client.on('message', message => {
    if (message.body === 'Wie gehts') {
        message.reply('_Mir geht es sehr gut, danke der Nachfrage! Und dir?_');
    }
});

client.on('message', message => {
    if (message.body === 'Wie gehts?') {
        message.reply('_Mir geht es sehr gut, danke der Nachfrage! Und dir?_');
    }
});

client.on('message', message => {
    if (message.body === '#hoster') {
        message.reply('Wir suchen noch Hoster!🤫 Wenn du interesse hast, dann melde dich gerne bei Nico Lorenzo (wa.me/+49491759610400). Wir freuen uns auf dich!😉');
    }
});

client.on('message', message => {
    if (message.body === 'Moin') {
        message.reply('*Moin*');
    }
});

client.on('message', message => {
    if (message.body === 'Hi') {
        message.reply('*Hi*');
    }
});

client.on('message', message => {
    if (message.body === 'Hey') {
        message.reply('*Hey*');
    }
});

client.on('message', message => {
    if (message.body === 'Wmdg') {
        message.reply('_Ich schreibe mit dir..._');
    }
});

client.on('message', message => {
    if (message.body === '#NicoP') {
        message.reply('Der Ersteller von *CellBot*. Danke das du meinem Bruder etwas leben eingehaucht hast.');
    }
});



client.on('message', message => {
    if (message.body === 'Mir geht es auch gut') {
        message.reply('Das freut mich.');
    }
});

client.on('message', message => {
    if (message.body === '#Sup') {
        message.sendMessage(message.from, 'https://chat.whatsapp.com/GgcqAN9Sy3aLDHqpk1A8kZ');
    }
});

client.on('message', message => {
    if (message.body === 'Bot') {
        message.reply('_Für fragen oder Ideen äußere dich gerne in unserer Chatgruppe. Schreibe dazu einfach #sup ._');
    }
});

client.on('message', message => {
    if (message.body === '#sup') {
        client.sendMessage(message.from, 'https://chat.whatsapp.com/GgcqAN9Sy3aLDHqpk1A8kZ');
    }
});

client.on('message', message => {
    if (message.body === '#support') {
        message.reply('https://chat.whatsapp.com/GgcqAN9Sy3aLDHqpk1A8kZ');
    }
});

client.on('message', message => {
    if (message.body === '#support') {
        message.reply('https://chat.whatsapp.com/GgcqAN9Sy3aLDHqpk1A8kZ');
    }
});

client.on('message', message => {
    if (message.body === 'Guten Abend') {
        message.reply('*Danke!* Ich wünsche dir auch einen Wundervollen Abend.');
    }
});

client.on('message', message => {
    if (message.body === 'Gute Nacht') {
        message.reply('*Gute Nacht, schlaf gut.*');
    }
});

client.on('message', message => {
    if (message.body === 'Gn') {
        message.reply('*Gute Nacht, schlaf gut.*');
    }
});

client.on('message', message => {
    if (message.body === 'Wo bist du') {
        message.reply('_Ich bin in deinem Handy!_');
    }
});

client.on('message', message => {
    if (message.body === 'Wo bist du?') {
        message.reply('_Ich bin in deinem Handy!_');
    }
});

client.on('message', message => {
    if (message.body === 'Wo bin ich?') {
        message.reply('_Du bist ganz in meiner Nähe._');
    }
});

client.on('message', message => {
    if (message.body === '#dumm') {
        message.reply('Bist du dumm...?👀');
    }
});

client.on('message', message => {
    if (message.body === '#ssp') {
        message.reply('Cannot read properties of undefined (reading "0")');
    }
});

client.on('message', message => {
    if (message.body === '#ssp Papier') {
        message.reply('Cannot read properties of undefined (reading "0")');
    }
});

client.on('message', message => {
    if (message.body === '#ssp Stein') {
        message.reply('Cannot read properties of undefined (reading "0")');
    }
});

client.on('message', message => {
    if (message.body === '#ssp papier') {
        message.reply('Cannot read properties of undefined (reading "0")');
    }
});

client.on('message', message => {
    if (message.body === '#ssp stein') {
        message.reply('Cannot read properties of undefined (reading "0")');
    }
});

client.on('message', message => {
    if (message.body === '#ssp schere') {
        message.reply('Cannot read properties of undefined (reading "0")');
    }
});

client.on('message', message => {
    if (message.body === '#RIPMarianne') {
        message.reply('🪦R.I.P🪦 Marianne Sophie Ølsner Geb. 13.03.2003 Du hast Deine Tage auf der Welt gelebt und auch halbwegs genossen. Ich wünschte mir das wäre niemals passiert. Liebe Grüße dein Bester Freund aus Deutschland');
    }
});

client.on('message', message => {
    if (message.body === 'Wer bist du?') {
        message.reply('*Moin, ich bin der Liam Bot* 😂 _wenn du fragen hast komme gerne in die Chatgruppe. schreibe dazu #sup_');
    }
});

client.on('message', async message => {
    if (message.body === '#Lorenzo') {
        message.reply('Der Ersteller Meines Lieben Bruders *CellBot* und mir dem *Liam-Bot*. Danke Dafür Nico Lorenzo.');
    }
});

client.on('message', async message => {
    if (message.body === '#leer') {
        message.reply('                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ');
    }
});

client.on('message', async message => {
    if (message.body === '#alle') {
        message.reply('*Okay...* _Gruppen Mitglieder weden aufgelistet!_');
    }
});

// Mention everyone
client.on('message', async(msg) => {
    if (msg.body === '#alle') {
        const chat = await msg.getChat();

        let text = "➡️ ";
        let mentions = [];

        for (let participant of chat.participants) {
            const contact = await client.getContactById(participant.id._serialized);

            mentions.push(contact);
            text += `@${participant.id.user} `;
        }

        await chat.sendMessage(text, { mentions });
    }
});
client.initialize();