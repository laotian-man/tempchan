import { SlashCommandBuilder, Message, Client } from 'discord.js';

export default {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Dong!'),
  async execute(client: Client, interaction: Message) {
    await interaction.reply('Pong!');
  },
};
