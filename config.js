//David Cyril
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUZCNHZOZzEyQkhySkpZRkRmaXZwOEdXUWd2cW04VXp3V3JFZUQ5Z2ZGOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRDMyWVlJY1RLbjNKQUo2SS9hWkhnYTRRTkV0SnVJYkpiTVRYOGVuWGUwTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrSElzL2IrK2UzeFZGKy9UR053bjJpU1pHZXNUS2hCWEpRY0RMTW8yd0VvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4YjR2Zm5FZUhLOFBNY29xRUsxMTZlZGRaUU1NOHZicVVteEo0M0JOekFnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndCb1A2VTlEaVo5dE85NFhsZkNzRC9SMTJyMVozR0NScmd3MHFRMHVRMkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlAyN2pXS090R2c4NC9ST1dmQk1NOHU3REYwZjZxbm04dzUvRVhhVWhFVDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUtwaE00VmhDcDRKVXZscFdQTXBCZTBRWXV0ZXh3ZVJzVElyMWRlQ2xWRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicXpVNUpYaFpxVXhQWGdZUU9kZHRGZDVpQURSRGRWUi9SZ0xVR1YraWFUST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZvZ3NyODdZSTkxMW5iajlnUDRiMHVraXpTMDBDdHFFZlplMVp4bG5mK3EwMmE3ZUx4eVRRV0tXWnJuTlBwL0RiR2xsU3ZrN1JkS1dXRi9XWnY5VkRnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjksImFkdlNlY3JldEtleSI6IkluSGRYUDhNRktUQ1J3UzdEdkZNVm9MZmc5ZjBDUWtNRCsvUVppd1lGZFE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzNDM5NTk3OTM4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjE0RDI1MkZEOThCQzI0QjEwOTM4QTgyQ0ZBMEQ4QjhGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTk3MjI5NDl9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzQzOTU5NzkzOEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwQ0E1NEZFQTREMjc1NjFEQUI3RDlCRUE0ODE1QkM3MyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE5NzIyOTQ5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJGcFdPcDVfVFM1MkdZTkpQajc3dmNnIiwicGhvbmVJZCI6ImZmOTk5YWI5LWY4NmEtNDhiNC1iZTk2LWM4MDE0NjNiYjNhYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmOVZEM3NQeklvbEE0bmN2eGtrNGVQbDhMWDA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN1RGRmRTdVN0Mm9SMzR6NkJhOUo5NS9GUzU0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Iko0NEdBNzhBIiwibWUiOnsiaWQiOiI5MjM0Mzk1OTc5Mzg6N0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwk4apQXdhaXPgv5AifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0ltWDVjY0NFTGJIZzdRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkUxb3M3dzUrenFtMGVsRjE3YTk1T3BFa2N4YTY0SFd3NVAzQitWZEdSam89IiwiYWNjb3VudFNpZ25hdHVyZSI6IkV4OU42YXltMjJ5N0FpT082SGtjYnhWRFZEVmRCazNTeWVIZnFWNGU0OXBiUU1JT1YzeGxzbUFxWG0yOXo5MiswTG1yS0ptOUI4SElIS0lNQXhvU0NBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI2cVh4ckdzWTkvbDBZYnJuZWZRVTYrZWJOUHJyZkc2OUlhSFAwckNDMXVmeUNxOUppREJKU3ZHT0duQkUxSU54dEJPM25NQnRlSHYwOUNSSXIxeEJBQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzQzOTU5NzkzODo3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJOYUxPOE9mczZwdEhwUmRlMnZlVHFSSkhNV3V1QjFzT1Q5d2ZsWFJrWTYifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTk3MjI5NDYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUFBKIn0=";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "923189492995";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/0f089184835ed3d3b1f8c.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://telegra.ph/file/c71eab884ac90ecbf8d1c.png";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`©QUEEN_ANITA-V2`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/QUEEN_ANITA-V2";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.devs = "2349066528353";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
