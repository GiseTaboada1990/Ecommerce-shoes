import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import HighSchoolBranches from "./HighSchoolBranches";


const botName = "Yourbot";

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(
      `Hola! soy ${botName}. Estoy aqui para ayudarte`
    ),
    createChatBotMessage(
      "Cual es tu consulta?",
      {
        withAvatar: true,
        widget: "highSchoolBranches"
      }
    )
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#f87d2d",
    },
    chatButton: {
      backgroundColor: "#f87d2d",
      
    }
  },
  widgets: [
    {
      widgetName: "highSchoolBranches",
      widgetFunc: (props) => <HighSchoolBranches {...props} />
    },
  ]
};

export default config;
