import React from 'react';
//import {Component} from 'react';
import createReactClass from 'create-react-class';
//import ReactDOM from 'react-dom';
import sha1 from 'sha1';
import socketIOClient from "socket.io-client";


var Messaging = createReactClass({
  getInitialState: function() {
    return {
      response: false,
      endpoint: "http://127.0.0.1:8080/messages/getUsernamesOfSenders",
      request: {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "username": "testtest",
          "hashedPassword" : sha1("testtest"),
        })
      },
      friends: [],
    };
  },

  componentDidMount: function() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("FromAPI", data => this.setState({ response: data }));
  },

  handleFriendList: function() {

  },


  render: function() {
    fetch(this.state.endpoint, this.state.request)
      .then(result => result.json())
      .then(friends => this.setState({friends: friends}));

    return (
      <div style={{ textAlign: "left" }}>
        <MessageList friends={this.state.friends} />
      </div>
    );
  }
});

var Friend = createReactClass({
  getInitialState: function() {
    this.setState({friendName: this.props.name});
    return null;
  },

  render: function() {
    return (
      <li friendName={this.props.name} />
    )
  }
});

var MessageList = createReactClass({
  getInitalState: function () {
    this.setState({friends: this.props.friends});
  },

  render: function () {
    
    var friendComponents = this.props.friends.map(function(friend){
      return <Friend name={friend} />
    });
    return (
      <div>
        <ol>
          {friendComponents}
        </ol>
      </div>
    )
  }
});

export default Messaging;
