import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import { fileURLToPath } from "url"
import fs from "fs"

/**Owner number**/
global.owner = [
  ["994408465157", "AryGamz", true],
  ["6281278368278", "Botnya", true]
]
  // [number, name, dia developer?]
  // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.girlfren = ["994408465157", "AryGamz", true] // Your gf/pacar

//Api website
global.APIs = { // API Prefix
  // name: "https://website"
  nrtm: "https://nurutomo.herokuapp.com",
  bg: "http://bochil.ddns.net",
  xteam: "https://api.xteam.xyz",
  zahir: "https://zahirr-web.herokuapp.com",
  zeks: "https://api.zeks.xyz",
  pencarikode: "https://pencarikode.xyz",
  LeysCoder: "https://leyscoders-api.herokuapp.com",
  zenz: "https://zenzapis.xyz"
}
global.APIKeys = { // APIKey Here
  // "https://website": "apikey"
  "https://api.xteam.xyz": "d90a9e986e18778b",
  "https://zahirr-web.herokuapp.com": "zahirgans",
  "https://api.zeks.xyz": "apivinz",
  "https://pencarikode.xyz": "pais",
  "https://leyscoders-api.herokuapp.com": "dappakntlll",
  "https://zenzapis.xyz": "BagasPrdn"
}

// Sticker WM
global.packname = "Created By AryGamz"
global.author = "Ary"
global.wm = "AryGamzV2"
global.multiplier = 69 // The higher, The harder levelup

//
global.eror = "Error bang"
global.wait = "Process..."
global.render = "wait render"
global.webs = "https://github.com/arygamz"//Your Website
global.logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKsHEAITWM7dPQ_irYtNvZ1hiM_zj4tZ4f6A&usqp=CAU"//Your logo
global.gcwangsaf = "https://chat.whatsapp.com/JWMl9LW5g0i0RSj7ophXAk"//Link Group whatsapp

//Donasi
global.saweria = "Gapunya"// website saweria.co
global.dana = "085762008398"// dana here
global.pulsa = "081264038909"// pulsa here
global.gopay = "081537442307"// number for Payment digital Gopay Gojek


//Rpg
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: "🧬",
      limit: "🌌",
      health: "❤️",
      strength: "🦹‍♀️",
      mana: "🪄",
      stamina: "⚡",
      agility: "🤸‍♂️",
      intelligence: "🧠",
      exp: "✉️",
      pointxp: "📧",
      money: "💵",
      potion: "🥤",
      gems: "🍀",
      crystal: "🔮",
      diamond: "💎",
      darkcrystal: "♠️",
      common: "📦",
      uncommon: "🎁",
      mythic: "🗳️",
      legendary: "🗃️",
      pet: "🎁",
      trash: "🗑",
      armor: "🥼",
      sword: "🗡️",
      arc: "🏹",
      bow: "🏹",
      magicwand: "⚕️",
      keyiron: "🗝️",
      keygold: "🔑",
      knife: "🔪",
      wood: "🪵",
      rock: "🪨",
      string: "🕸️",
      horse: "🐎",
      cat: "🐈",
      dog: "🐕",
      fox: "🦊",
      cow: "🐄",
      bull: "🐃",
      tiger: "🐅",
      lion: "🦁",
      giraffe: "🦒",
      elephant: "🐘",
      snake: "🐍",
      dragon: "🐉",
      chicken: "🐓",
      petFood: "🍖",
      iron: "⛓️",
      gold: "👑",
      emerald: "💚"
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, "gi")]).filter(v => v[1].test(string))
    if (!results.length) return ""
    else return emot[results[0][0]]
  }
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update \"config.js\""))
  import(`${file}?update=${Date.now()}`)
})
