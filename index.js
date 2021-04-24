// requirements
let dbLink = 'mongodb+srv://............'

const discord = require("discord.js");
const canvas = require("canvas");
const imgapi = require("blueapi.js")
const { Database } = require('quickmongo');
const db = new Database(dbLink);
const sourcebin = require('sourcebin_js');

require("discord-reply")
require("discord-buttons")

const client = new discord.Client({
  disableMentions: 'everyone'
})

//.... rest of the code
