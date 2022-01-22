ire("discord.js")
const client = new Discord.Client()

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)

client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("pong");
  }

const Discord = require("discord.js")
const fetch = require("node-fetch")
const client = new Discord.Client()

function getQuote() {
  return fetch("https://zenquotes.io/api/random")
    .then(res => {
      return res.json()
      })
    .then(data => {
      return data[0]["q"] + " -" + data[0]["a"]
    })
}

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if (msg.author.bot) return
    
  if (msg.content === "$inspire") {
    getQuote().then(quote => msg.channel.send(quote))
  }
})
encouragements = [
    "Cheer up!",
    "Hang in there.",
    "You are a great person / bot!"
  ]
  client.on("message", msg => {
    if (msg.content === "$inspire") {
      getQuote().then(quote => msg.channel.send(quote))
    }
  
    if (sadWords.some(word => msg.content.includes(word))) {
      const encouragement = encouragements[Math.floor(Math.random() * encouragements.length)]
      msg.reply(encouragement)
    }
    const Database = require("@replit/database")
const db = new Database()
db.get("encouragements").then(encouragements => {
    if (!encouragements || encouragements.length < 1) {
      db.set("encouragements", starterEncouragements)
    }  
  })
  function updateEncouragements(encouragingMessage) {
    db.get("encouragements").then(encouragements => {
      encouragements.push([encouragingMessage])
      db.set("encouragements", encouragements)
    })
  }
  
  function deleteEncouragment(index) {
    db.get("encouragements").then(encouragements => {
      if (encouragements.length > index) {
        encouragements.splice(index, 1)
        db.set("encouragements", encouragements)
      }
    })
    client.on("message", msg => {
        if (msg.content === "$inspire") {
          getQuote().then(quote => msg.channel.send(quote))
        }
      
        
        if (sadWords.some(word => msg.content.includes(word))) {
          db.get("encouragements").then(encouragements => {
            const encouragement = encouragements[Math.floor(Math.random() * encouragements.length)]
            msg.reply(encouragement)
          })
        }
      
        if (msg.content.startsWith("$new")) {
          encouragingMessage = msg.content.split("$new ")[1]
          updateEncouragements(encouragingMessage)
          msg.channel.send("New encouraging message added.")
        }
      
        if (msg.content.startsWith("$del")) {
          index = parseInt(msg.content.split("$del ")[1])
          deleteEncouragment(index)
          msg.channel.send("Encouraging message deleted.")
        
        }
        const Discord = require("discord.js")
const fetch = require("node-fetch")
const Database = require("@replit/database")

const db = new Database()
const client = new Discord.Client()

const sadWords = ["sad", "depressed", "unhappy", "angry", "miserable"]

const starterEncouragements = [
  "Cheer up!",
  "Hang in there.",
  "You are a great person / bot!"
]

db.get("encouragements").then(encouragements => {
  console.log(encouragements)
  if (!encouragements || encouragements.length < 1) {
    db.set("encouragements", starterEncouragements)
  }  
})

db.get("responding").then(value => {
  if (value == null) {
    db.set("responding", true)
  }  
})

function getQuote() {
  return fetch("https://zenquotes.io/api/random")
    .then(res => {
      return res.json()
      })
    .then(data => {
      return data[0]["q"] + " -" + data[0]["a"]
    })
}

function updateEncouragements(encouragingMessage) {
  db.get("encouragements").then(encouragements => {
    encouragements.push([encouragingMessage])
    db.set("encouragements", encouragements)
  })
}

function deleteEncouragment(index) {
  db.get("encouragements").then(encouragements => {
    if (encouragements.length > index) {
      encouragements.splice(index, 1)
      db.set("encouragements", encouragements)
    }
  })
}

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if (msg.content === "$inspire") {
    getQuote().then(quote => msg.channel.send(quote))
  }

  db.get("responding").then(responding => {
    if (responding && sadWords.some(word => msg.content.includes(word))) {
      db.get("encouragements").then(encouragements => {
        const encouragement = encouragements[Math.floor(Math.random() * encouragements.length)]
        msg.reply(encouragement)
      })
    }
  })

  if (msg.content.startsWith("$new")) {
    encouragingMessage = msg.content.split("$new ")[1]
    updateEncouragements(encouragingMessage)
    msg.channel.send("New encouraging message added.")
  }

  if (msg.content.startsWith("$del")) {
    index = parseInt(msg.content.split("$del ")[1])
    deleteEncouragment(index)
    msg.channel.send("Encouraging message deleted.")
  }

  if (msg.content.startsWith("$list")) {
    db.get("encouragements").then(encouragements => {
      msg.channel.send(encouragements)
    })
  }
    
  if (msg.content.startsWith("$responding")) {
    value = msg.content.split("$responding ")[1]

    if (value.toLowerCase() == "true") {
      db.set("responding", true)
      msg.channel.send("Responding is on.")
    } else {
      db.set("responding", false)
      msg.channel.send("Responding is off.")
    }
  }
})
db.get("responding").then(value => {
    if (value == null) {
      db.set("responding", true)
    }  
  })
  const express = require("express")

const server = express()

server.all("/", (req, res) => {
  res.send("Bot is running!")
})

function keepAlive() {
  server.listen(3000, () => {
    console.log("Server is ready.")
  })
  const keepAlive = require("./server")
F5