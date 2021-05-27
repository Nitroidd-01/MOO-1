const Discord = require('discord.js');
const client = new Discord.Client();
 
const prefix = '-';
 
const fs = require('fs');
 
client.once('ready', () => {
    console.log('Moo1 is online!');
}
);

client.commands = new Discord.Collection ();

client.on('Message', message => {

if(!Message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).split(/ +/);
const command =args.shift().toLowerCase();

if(command === 'clear'){
    client.commands.get('clear').execute(message.args);

 
}  else if(command === 'kick'){
    client.commands.get('kick').execute(message.args);

}  else if(command === 'ban'){
    client.commands.get('ban').execute(message.args);
}

});

client.login('ODQ3MDU5NTI3ODI4MjQyNDQy.YK4jqQ.br5oagkRktAVHeYL9jhRWKh4DLc');