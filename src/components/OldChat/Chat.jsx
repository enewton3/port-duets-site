import { Input } from "@material-ui/core";
import React, { Component } from "react";
import Messages from "./Messages";

function randomColor() {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
}
export default class Chat extends Component {
  state = {
    messages: [],
    member: {
      username: "",
      color: randomColor(),
    },
  };

  constructor(props) {
    super();
    this.setState((prev) => (prev.member.username = props.username));
    this.drone = new window.Scaledrone("SV89KgSeZxRnyi88", {
      data: this.state.member,
    });
    this.drone.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
      const member = { ...this.state.member };
      member.id = this.drone.clientId;
      this.setState({ member });
    });
    const room = this.drone.subscribe("observable-room");
    room.on("data", (data, member) => {
      const messages = this.state.messages;
      messages.push({ member, text: data });
      this.setState({ messages });
    });
    console.log(props);
    console.log(this.drone);
    console.log(room);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>My Chat App</h1>
        </div>
        <Messages
          messages={this.state.messages}
          currentMember={this.state.member}
        />
        <Input onSendMessage={this.onSendMessage} />
      </div>
    );
  }

  onSendMessage = (message) => {
    this.drone.publish({
      room: "observable-room",
      message,
    });
  };
}
