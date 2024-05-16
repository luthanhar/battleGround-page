const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

// Enable CORS
app.use(cors());

// Example data
const settings = [
    { REGION: 'EUROPE', PUNKBASTER: 'ON', FAIRFIGHT: '30', PASSWORD: 'OFF', PRESET: 'NORMAL' },
];
const advanced = [{
    MINIMAP: "ON",
    "ONLY SQUAD LEADER SPAWN": "OFF",
    VEHICLES: "ON",
    "TEAM BALANCE": "ON",
    "MINIMAP SPOTTING": "ON",
    HUD: "ON",
    "3P VEHICLE CAM": "ON",
    "REGENERATIVE HEALTH": "ON",
    "KILL CAM": "ON",
    "FRIENDLY FIRE": "OFF",
    "3D SPOTTING": "ON",
    "ENEMY NAME TAGS": "ON"
}]
const gameRules = [{
    TICKETS: 400,
    "VEHICLE SPAWN DELAY": 25,
    "BULLET DAMAGE": 100,
    "KICK AFTER TEAM KILLS": 5,
    "PLAYER HEALTH": 100,
    "PLAYER RESPAWN TIME": 100,
    "KICK AFTER IDLE": 300,
    "BAN AFTER KICKS": 3
}]

const mapData = [
    { title: "CONQUEST LARGE DAWNBREAKER", image: 'https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6039076c1ab31e3d009e691e_browser__SI-next-image%20-%2002.png' },
    { title: "CONQUEST LARGE OPERATION FIRESTORM", image: 'https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6039076c1ab31e3d009e691e_browser__SI-next-image%20-%2002.png' },
    { title: "CONQUEST LARGE GOLMUD RAILWAY", image: 'https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6039076c1ab31e3d009e691e_browser__SI-next-image%20-%2002.png' },
    { title: "CONQUEST LARGE OPERATION METRO", image: 'https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6039076c1ab31e3d009e691e_browser__SI-next-image%20-%2002.png' },
    { title: "CONQUEST LARGE CASPIAN BORDER", image: 'https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6039076c1ab31e3d009e691e_browser__SI-next-image%20-%2002.png' },
    { title: "CONQUEST LARGE OPERATION LOCKER", image: 'https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6039076c1ab31e3d009e691e_browser__SI-next-image%20-%2002.png' },
    { title: "CONQUEST LARGE SHANGHAI", image: 'https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6039076c1ab31e3d009e691e_browser__SI-next-image%20-%2002.png' },
    { title: "CONQUEST LARGE HAINAN RESORT", image: 'https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6039076c1ab31e3d009e691e_browser__SI-next-image%20-%2002.png' },
    { title: "CONQUEST LARGE PROPAGANDA", image: 'https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6039076c1ab31e3d009e691e_browser__SI-next-image%20-%2002.png' },
    { title: "CONQUEST LARGE FLOOD ZONE", image: 'https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6039076c1ab31e3d009e691e_browser__SI-next-image%20-%2002.png' },
    { title: "CONQUEST LARGE ZAVOD 311", image: 'https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6039076c1ab31e3d009e691e_browser__SI-next-image%20-%2002.png' },
    { title: "CONQUEST LARGE LANCANG DAM", image: 'https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6039076c1ab31e3d009e691e_browser__SI-next-image%20-%2002.png' },
    { title: "CONQUEST LARGE GUILIN PEAKS", image: 'https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6039076c1ab31e3d009e691e_browser__SI-next-image%20-%2002.png' },
    { title: "CONQUEST LARGE OPERATION WHITEOUT", image: 'https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6039076c1ab31e3d009e691e_browser__SI-next-image%20-%2002.png' },
    { title: "CONQUEST LARGE HAMMERHEAD", image: 'https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6039076c1ab31e3d009e691e_browser__SI-next-image%20-%2002.png' },
    { title: "CONQUEST LARGE LOST ISLANDS", image: 'https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6039076c1ab31e3d009e691e_browser__SI-next-image%20-%2002.png' }
];



// Route to serve data
app.get('/api/settings', (req, res) => {
    res.json(settings[0]);
});
app.get('/api/advanced', (req, res) => {
    res.json(advanced[0]);
});
app.get('/api/rules', (req, res) => {
    res.json(gameRules[0]);
});
app.get('/api/mapData', (req, res) => {
    res.json(mapData);
});


// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
