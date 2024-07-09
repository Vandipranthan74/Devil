const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/bloma
  

global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "7994591304";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_20_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA3MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAzOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4NCxcbiAgICAgICAgMzksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNixcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDMsXG4gICAgICAgIDE3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTgxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjUzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0LFxuICAgICAgICAxNixcbiAgICAgICAgMjksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDgxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ0LFxuICAgICAgICA3MixcbiAgICAgICAgMTQsXG4gICAgICAgIDM4LFxuICAgICAgICA4MixcbiAgICAgICAgMTksXG4gICAgICAgIDc4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODAsXG4gICAgICAgIDQ4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMSxcbiAgICAgICAgMixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDM3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzAsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDkxLFxuICAgICAgICA3NixcbiAgICAgICAgMjE3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjQxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTA2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMCxcbiAgICAgICAgOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgNyxcbiAgICAgICAgNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjksXG4gICAgICAgIDUwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMixcbiAgICAgICAgNDUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI2ZjExNmpLT0RDYVloMEt6Z0FFYWFqbTZJQ2FnNDJQU1MzamRhYm8xOStnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJuYmxjM3oyNlRzU3poendiTThycUVnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ4ZDlhN2RhLTNhNWEtNDVlNy1iOTFhLTUzMzMxZWJlZjgyNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzUsXG4gICAgICAyNDgsXG4gICAgICAxNzcsXG4gICAgICAxNTYsXG4gICAgICAxNzgsXG4gICAgICAyOSxcbiAgICAgIDE3NSxcbiAgICAgIDExMixcbiAgICAgIDkyLFxuICAgICAgMjA3LFxuICAgICAgNDAsXG4gICAgICAxMzUsXG4gICAgICA0LFxuICAgICAgMjcsXG4gICAgICAxMzEsXG4gICAgICAyMDgsXG4gICAgICAzNyxcbiAgICAgIDE5NCxcbiAgICAgIDcwLFxuICAgICAgMTYxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MCxcbiAgICAgIDI0MyxcbiAgICAgIDgzLFxuICAgICAgMjEsXG4gICAgICA5NSxcbiAgICAgIDEwMixcbiAgICAgIDQ0LFxuICAgICAgMTIxLFxuICAgICAgMjM0LFxuICAgICAgMTY5LFxuICAgICAgMTc0LFxuICAgICAgMjQ2LFxuICAgICAgMTM3LFxuICAgICAgMjEwLFxuICAgICAgMTk5LFxuICAgICAgMTU0LFxuICAgICAgMTksXG4gICAgICA2NixcbiAgICAgIDM5LFxuICAgICAgMjA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkZHSEZUQUExXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTc5OTQ1OTEzMDQ6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjI5ODUzODk5MDMwNzc3OjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHpzb2ZzQ0VJaU90YlFHR0FrZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJBc0RmY051S2l4ZWpaeGVaTDZqcWdpRjVtdFAyMnpHMkcyU0tZUm9vbDFvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjQ2N0hyOXRDZ1dqYzVFVWNVUWxxdVhsNG5KU283ZWgreThxUzlWU0k4d0RJYU1LSCtIUWVPcXcxQ2xzZ0xlSUkrVUxoMS9MUlZ4RjFNRTlEVUdUS0FnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm1TVkFqaDk1ekc0NG1JT0d3RVFUN3lWVHR4Qzg4aFkxOEtqemxqUTVpU0x4LzA0RUkwVXlHWUQ4T0h3QkIwY2I5OWh5VTErUldTQTdWeUVFbEhvSGpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxNzk5NDU5MTMwNDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNTM0Nzk1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUE1oXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQTWguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJtUlZ6eWsyK2R3U0VHeUQycExDNTJxZFJKOGx3aEFiUHMxR0dxMTNIeHV3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjc5NTM3NTIyOCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
