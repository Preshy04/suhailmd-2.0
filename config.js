const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349038020072";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_00_35_12_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA5MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDM4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA2LFxuICAgICAgICA1OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDk3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTcsXG4gICAgICAgIDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI1LFxuICAgICAgICA5MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODUsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2MCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDQsXG4gICAgICAgIDU4LFxuICAgICAgICAxMyxcbiAgICAgICAgNixcbiAgICAgICAgMTg3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTE0LFxuICAgICAgICA3MixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQzLFxuICAgICAgICAxODUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDM5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjM4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjUsXG4gICAgICAgIDExNixcbiAgICAgICAgNzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTg2LFxuICAgICAgICA5MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDg2LFxuICAgICAgICA5OSxcbiAgICAgICAgNyxcbiAgICAgICAgOTksXG4gICAgICAgIDUzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTU0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDExLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg0LFxuICAgICAgICA3OSxcbiAgICAgICAgNzksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA5OSxcbiAgICAgICAgODMsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODMsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjksXG4gICAgICAgIDIwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAzLFxuICAgICAgICAyOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAzMixcbiAgICAgICAgNDAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDU0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDk2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI0LFxuICAgICAgICA4NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc1LFxuICAgICAgICA5MixcbiAgICAgICAgOTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc4LFxuICAgICAgICA1NyxcbiAgICAgICAgOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJUeWFuaGNmZHpPdng1anQ1dERkOHR2QlZSVjdLS0pJb2hxd0lCRjRJdjZRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJWZHlSYmxhNlJhQ3RsZVJhVjVWUFR3XCIsXG4gIFwicGhvbmVJZFwiOiBcImE1ODA0YzQzLWE4NWUtNDJlMy04NjUwLTlmNGE1OWUyYmQ0YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzgsXG4gICAgICAxMDcsXG4gICAgICA1NCxcbiAgICAgIDEyMixcbiAgICAgIDk2LFxuICAgICAgMTk2LFxuICAgICAgMjMxLFxuICAgICAgMjIsXG4gICAgICAxOTcsXG4gICAgICA4NCxcbiAgICAgIDIxMCxcbiAgICAgIDE5OCxcbiAgICAgIDg1LFxuICAgICAgMjAyLFxuICAgICAgMjUwLFxuICAgICAgNCxcbiAgICAgIDExMSxcbiAgICAgIDc1LFxuICAgICAgMzEsXG4gICAgICAyNTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ5LFxuICAgICAgMTY4LFxuICAgICAgMjEzLFxuICAgICAgMTI4LFxuICAgICAgMTksXG4gICAgICAxNzAsXG4gICAgICAxODYsXG4gICAgICAxNyxcbiAgICAgIDEzNCxcbiAgICAgIDIyNixcbiAgICAgIDE1MCxcbiAgICAgIDIzNCxcbiAgICAgIDY0LFxuICAgICAgMjQxLFxuICAgICAgMTMsXG4gICAgICAyMyxcbiAgICAgIDM1LFxuICAgICAgNDQsXG4gICAgICAyLFxuICAgICAgMTY1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlc4ODJFQjFIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDM4MDIwMDcyOjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjY4Njg1NTU5MzE3NTM6MTZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3JXZ2RjQ0VObnIvYm9HR0FjZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIzUVBVV0IxRkVjM2xTL3ZXRHJyb3ZMMXFad0dBYWlYbzljR0ZJN3lSTjNVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInNFRXhaUzkrSTN0Q29SbHFPZTZwb1I2TlcyalJlVVBEaW1waTQzL2k0SjVseXJkRzVBZU8ydHNFeHdFRVlWQncyTkdqelF6OTBxVHVnUXhBYnloOUFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjI2SDZHeGRIZS83UTJ3Zzh5dE1aRlk5MUR0UWRSRDByTEJDMHozU01qbTk3Q09qdkNqZlZpSVNRVGlPdjYxOFRyVTVEQnRWKzVyK0dYd1BRUDRacWdRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMzgwMjAwNzI6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDMwOTM0MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQW9BQUtLa1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBb0FBS0trLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSzFHd3lhOFUxZXc2UnBvZTdaNHh4b3R4ZHdFKzd2akdCNmI0V1hnQUh4OD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTkzNTA2MzQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDQsNSwxMF19LFwidGltZXN0YW1wXCI6XCIxNzMyMzU5NTYyODA0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Hillary",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
