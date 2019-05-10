import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMessages } from '../actions';

import Message from '../components/message';


class MessageList extends Component {
  componentWillMount = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  };

  componentDidMount = () => {
    this.refresher = window.setInterval(() => {
      this.props.fetchMessages(this.props.selectedChannel);
    }, 3000);
  }

  componentWillUnmount = () => {
    clearInterval(this.refresher);
  }

  render() {
    return (
      <div className="message-list">
        {this.props.messages.map((message) => {
          if (message.channel === this.props.selectedChannel) {
            return <Message message={message} key={message.created_at} />;
          }
        }
        )}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
