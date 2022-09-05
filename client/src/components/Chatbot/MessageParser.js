class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (
        lowerCaseMessage.includes("hi") ||
        lowerCaseMessage.includes("hey") ||
        lowerCaseMessage.includes("hello") ||
        lowerCaseMessage.includes("hello there") ||
        lowerCaseMessage.includes("hey there") ||
        lowerCaseMessage.includes("hi there")
      ) {
        this.actionProvider.greet();
      } else if (
        lowerCaseMessage.includes("science") ||
        lowerCaseMessage.includes("commerce") ||
        lowerCaseMessage.includes("arts")
      ) {
        this.actionProvider.handleCareerList();
      } else {
        this.actionProvider.handleDefault();
      }
    }
  }
  
  export default MessageParser;
  