import React, { Component } from 'react';
import './ChatInput.scss';

class ChatInput extends Component {
  constructor() {
    super();
    this.state = {
      textInput: '',
    };
  }

  handleSubmit = () => {
    this.props.handleInputSubmit(this.state.textInput);
    this.setState({
      textInput: '',
    });
  };

  handleOnChange = (event) => {
    this.setState({
      textInput: event.target.value,
    });
  };

  render() {
    return (
      <footer className="ChatInput">
        <input type="text" value={this.state.textInput} onChange={this.handleOnChange} />
        <button type="button" onClick={this.handleSubmit}>
          Send
        </button>
      </footer>
    );
  }
}

export default ChatInput;
