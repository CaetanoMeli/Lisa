module.exports = {
  name: 'ping',
  description: 'Ping!',
  requirements: {},
  execute(client, msg, args) {
    msg.reply(`Pong! ${client.ws.ping.toFixed(2)}ms`);
  },
};
