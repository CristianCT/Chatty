import React, { Component } from "react";
import { auth } from "../services/firebase";
import { db } from "../services/firebase"

export default class Chat extends Component {
    constructor(props) {
      super(props);
      this.state = {
        user: auth().currentUser,
        chats: [],
        content: '',
        readError: null,
        writeError: null
      };
      this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    async componentDidMount() {
      this.setState({ readError: null });
      try {
        db.ref("chats").on("value", snapshot => {
          let chats = [];
          snapshot.forEach((snap) => {
            chats.push(snap.val());
          });
          this.setState({ chats });
        });
      } catch (error) {
        this.setState({ readError: error.message });
      }
    }

    handleChange(event) {
        this.setState({
          content: event.target.value
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        this.setState({ writeError: null });
        try {
          await db.ref("chats").push({
            content: this.state.content,
            timestamp: Date.now(),
            uid: this.state.user.uid
          });
          this.setState({ content: '' });
        } catch (error) {
          this.setState({ writeError: error.message });
        }
      }

    render() {
        return (
            <div className="card chat" >
              <h5 class="card-header bg-info"><center>Chatty</center></h5>
              <div className="m-3" >
                <div className="chats">
                  {this.state.chats.map(chat => {
                    
                    return <div className="message" ><p key={chat.timestamp}>{chat.content}</p></div>
                  })}
                </div>
              </div>
              <div className="card-footer" >
                <form onSubmit={this.handleSubmit}>
                    <div class="input-group mb-3">
                      <input onChange={this.handleChange} value={this.state.content} type="text" className="form-control" aria-label="Recipient's username" aria-describedby="button-send"></input>
                      {this.state.error ? <p>{this.state.writeError}</p> : null}
                      <button type="submit" className="btn btn-outline-info" id="button-send"> <img src="https://img.icons8.com/color/20/000000/filled-sent.png" alt="icono" />Send</button>
                    </div>
                </form>
                <div>
                  Login in as: <strong>{this.state.user.email}</strong>
                </div>
              </div>
            </div>
        );
    }
}