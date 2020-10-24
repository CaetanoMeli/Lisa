const { readdirSync } = require('fs');
const { join } = require("path");
const filePath = join(__dirname, "..", "events");

module.exports.run = (client) => {
  const eventFiles = readdirSync(filePath).filter(file => file.endsWith('.js'));
  eventFiles.forEach(file => {
    const event = require(`${filePath}/${file}`);
    const eventName = file.split(".").shift();

    client.on(eventName, event.bind(null, client));
  })

  console.log(`Loaded ${eventFiles.length} events!`)
};