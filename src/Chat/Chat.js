import React, { Component } from 'react';
import './Chat.scss';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatBox from './ChatBox/ChatBox';
import ChatInput from './ChatInput/ChatInput';
import shopData from '../data/shop.json';
import answersData from '../data/answers.json';
import { ROLE } from '../constants';

class Chat extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      shop: {},
      messages: [],
    };
  }

  componentDidMount() {
    const defaultMessage = answersData.find((answer) => answer.tags.includes('DEFAULT'));
    const messages = this.state.messages.concat(defaultMessage);

    setTimeout(() => {
      this.setState({
        shop: shopData,
        messages,
      });
    }, 1000);
  }

  handleInputSubmit = (inputText) => {
    const customerMessage = {
      text: inputText,
      role: ROLE.CUSTOMER,
    };
    const answerMessage = answersData.find((answer) => answer.tags.includes(inputText));
    const messageDialog = [customerMessage, answerMessage];
    const oldMessages = this.state.messages;
    const updatedMessages = oldMessages.concat(messageDialog);
    this.setState({
      messages: updatedMessages,
    });
  };

  render() {
    const { shop, messages } = this.state;
    return (
      <main className="Chat">
        <ChatHeader shop={shop} />
        <ChatBox messages={messages} />
        <ChatInput handleInputSubmit={this.handleInputSubmit} />
      </main>
    );
  }
}

export default Chat;
