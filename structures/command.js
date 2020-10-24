const { readdirSync } = require('fs');
const { join } = require("path");
const filePath = join(__dirname, "..", "commands");

module.exports.run = (client) => {
  const commandFiles = readdirSync(filePath).filter(file => file.endsWith('.js'));
  commandFiles.forEach(file => {
    const command = require(`${filePath}/${file}`);
    client.commands.set(command.name, command);
  })

  console.log(`Loaded ${client.commands.size} commands!`)
}