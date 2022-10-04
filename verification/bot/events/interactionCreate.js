const { MessageActionRow, Modal, TextInputComponent } = require("discord.js");
module.exports = async (client, interaction) => {
  const Assigned_Role = "998073542975434763";
  const Citizen_Role = '1019135734172635137';
  if (interaction.customId === "verify") {
    if (!interaction.member.roles.cache.has(Assigned_Role)) {
      const modal = new Modal()
        .setCustomId("verification")
        .setTitle("The Train Staff");
      const Question = new TextInputComponent()
        .setCustomId("train")
        .setLabel("Say something")
        .setStyle("SHORT")
        .setPlaceholder("What are you looking for?")
        .setMinLength(4)
        .setMaxLength(7)
        .setRequired(true);

      const ActionRow = new MessageActionRow().addComponents(Question);

      modal.addComponents(ActionRow);

      await interaction.showModal(modal);
    } else {
      await interaction.deferReply({ ephemeral: true });
      interaction.editReply({
        content: "It seems like you are already on the platform... exploring.....",
        ephemeral: true,
      });
    }
  }

  if (interaction.customId === "verification") {
    const response = interaction.fields.getTextInputValue("train");
    if (response.toLowerCase() == "coz-135") {
      await interaction.deferReply({ ephemeral: true });
      let member = interaction.guild.members.cache.get(interaction.user.id);
      member.roles.add(Assigned_Role);
      member.roles.remove(Citizen_Role);
      
      interaction.followUp({
        content:
          "The platform doors slide open.... you are now in the Cozies world.",
        ephemeral: true,
      });
    } else {
      interaction.reply({
        content: "Error... please swipe again.....",
        ephemeral: true,
      });
    }
  }
};
