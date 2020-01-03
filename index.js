const Discord = require('discord.js');
const {prefix, token, giphyToken} = require('./config.json'); 
const client = new Discord.Client();

var GphApiClient = require('giphy-js-sdk-core')
giphy = GphApiClient(giphyToken)

client.once('ready',() =>{
    console.log('Ready!')
})

client.on('message', message => {
         if (message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) {

        //console.log(message.content);

     if(message.content.startsWith(`${prefix}kick`)) {
         //message.channel.send("You've Been Kicked")

         let member = message.mentions.members.first();
         member.kick().then((member) => {

                giphy.search('gifs', {"q":"fail"})
                    .then((response) => {

                        var totalResponses = response.data.length;
                        var responseIndex = Math.floor((Math.random() * 10) + 1) % totalResponses;
                        var responseFinal = response.data[responseIndex];

                        message.channel.send(":wave:" + member.displayName + "has been kicked!", {
                            files: [responseFinal.images.fixed_height.url]
                      
                     })

                  })
            })
    
        }
    }
})
client.on('message', message => {
if(message.content.startsWith(`${prefix}bagel`)) {

    giphy.search('gifs', {"q":"bagel"})
    .then((response) => {

    var totalResponses = response.data.length;
    var responseIndex = Math.floor((Math.random() * 10) + 1) % totalResponses;
    var responseFinal = response.data[responseIndex];

    message.channel.send("You've Been BAGELED",{ files: [responseFinal.images.fixed_height.url]
            })
        })
    }
})
client.on('message', message => {
    if(message.content.startsWith(`${prefix}gif`)) {
    
        giphy.search('gifs', {"q":"fail"})
        .then((response) => {
    
        var totalResponses = response.data.length;
        var responseIndex = Math.floor((Math.random() * 10) + 1) % totalResponses;
        var responseFinal = response.data[responseIndex];
    
        message.channel.send("Here's you're GIF",{ files: [responseFinal.images.fixed_height.url]
                })
            })
        }
    })
    client.on('message', message => {
        if (message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) {

       //console.log(message.content);

    if(message.content.startsWith(`${prefix}ban`)) {
        //message.channel.send("You've Been Kicked")

        let member = message.mentions.members.first();
        member.ban().then((member) => {

               giphy.search('gifs', {"q":"ban"})
                   .then((response) => {

                       var totalResponses = response.data.length;
                       var responseIndex = Math.floor((Math.random() * 10) + 1) % totalResponses;
                       var responseFinal = response.data[responseIndex];

                       message.channel.send(":wave:" + member.displayName + "has been banned!", {
                           files: [responseFinal.images.fixed_height.url]
                     
                    })

                 })
           })
   
       }
   }
})
client.on('message', message => {
    if(message.content.startsWith(`${prefix}baguette`)) {
    
        giphy.search('gifs', {"q":"baguette"})
        .then((response) => {
    
        var totalResponses = response.data.length;
        var responseIndex = Math.floor((Math.random() * 10) + 1) % totalResponses;
        var responseFinal = response.data[responseIndex];
    
        message.channel.send("You've Been BAGUETTED",{ files: [responseFinal.images.fixed_height.url]
                })
            })
        }
    })
    client.on('message', message => {
        if (message.member.hasPermission(['MUTE_MEMBERS'])) {

       //console.log(message.content);

    if(message.content.startsWith(`${prefix}mute`)) {
        //message.channel.send("You've Been Kicked")

        let members = message.mentions.members.first();
        members.serverMute().then((member) => {

               giphy.search('gifs', {"q":"mute"})
                   .then((response) => {

                       var totalResponses = response.data.length;
                       var responseIndex = Math.floor((Math.random() * 10) + 1) % totalResponses;
                       var responseFinal = response.data[responseIndex];

                       message.channel.send(":shushing_face:" + member.displayName + " has been muted...", {
                           files: [responseFinal.images.fixed_height.url]
                     
                    })

                 })
           })
   
       }
   }
})
client.login(token)
