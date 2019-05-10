import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createMessage } from '../actions';

class MessageForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  componentDidMount() {
    this.messageBox.focus();
  }

  handleChange = (e) => {
    this.setState({ input: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createMessage(this.props.selectedChannel, this.props.currentUser, this.state.input);
    this.setState({ input: "" });
  }

  render() {
    return (
      <div className="message-form">
        <form action="" onSubmit={this.handleSubmit}>
          <input ref={(input) => { this.messageBox = input; }} type="text" value={this.state.input} onChange={this.handleChange} />
          <button>Send</button>
        </form>
        <p>input: {this.state.input}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createMessage },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
