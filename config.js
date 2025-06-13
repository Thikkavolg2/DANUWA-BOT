const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}



// Change following defaultConfig if you are deploying DANUWA-MD on github actions/github codespaces or replit...Railway users don't need to edit this



const defaultConfig = {
  SESSION_ID: "jZ4HHRCR#ERBHNoTo8-vw-RcodNlhZCF9DFjUgpLMyy5LwsvudqI", // Put your session id here
  ALIVE_IMG: "https://github.com/DANUWA-MD/DANUWA-BOT/blob/main/images/Danuwa%20-%20MD.png?raw=true",
  ALIVE_MSG: "*Hello👋 Thikka-MD Is Alive Now😍*", // Change alive msg from here
  OPENAI_API_KEY: "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",// Add OPENAI API key here
  GEMINI_API_KEY: "AIzaSyCCVRam8SBgBlQb6wvgi9BKYRWA5YPDRsA", // Add Gemini API key here
  REMOVE_BG_API_KEY:"", // Add removebg API key here
  WEATHER_API_KEY: "", // Add your weather API key here
  BOT_OWNER: "94765788564", // Replace your bot owner number here with 94(country code)
  ownerNumber: ["94765788564"], // Replace your bot owner number here (same as bot owner number)
  AUTO_READ_STATUS: "true", // Turn on or off auto read status from here
  MODE: "public", // 'private', 'public'
};

//*******************************************************************************************************************************************************

module.exports = {
  SESSION_ID: process.env.SESSION_ID || defaultConfig.SESSION_ID,
  ALIVE_IMG: process.env.ALIVE_IMG || defaultConfig.ALIVE_IMG,
  ALIVE_MSG: process.env.ALIVE_MSG || defaultConfig.ALIVE_MSG,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || defaultConfig.OPENAI_API_KEY,
  GEMINI_API_KEY: process.env.GEMINI_API_KEY || defaultConfig.GEMINI_API_KEY,
  REMOVE_BG_API_KEY: process.env.REMOVE_BG_API_KEY || defaultConfig.REMOVE_BG_API_KEY, 
  WEATHER_API_KEY: process.env.WEATHER_API_KEY || defaultConfig.WEATHER_API_KEY,
  BOT_OWNER: process.env.BOT_OWNER || defaultConfig.BOT_OWNER,
  ownerNumber: process.env.OWNER_NUMBER
    ? process.env.OWNER_NUMBER.split(",")
    : defaultConfig.ownerNumber,
  AUTO_READ_STATUS: convertToBool(process.env.AUTO_READ_STATUS, defaultConfig.AUTO_READ_STATUS),
  MODE: process.env.MODE || defaultConfig.MODE,

};
