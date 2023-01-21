import React, { Component } from 'react';  

class Start extends React.Component {
    render() {
      return (
        <div className="roomid-container">
          <div className="room-join">
          <h3>Join Room with Room ID</h3>
          <p> Enter room ID to join (6 digit)</p>
          <form action="/room" method="POST">
          <input
            name="room_id"
            type="number"
            autoComplete="off"
            maxLength={6}
            required
          />
          <button type="submit">Join Room</button>
        </form>

        </div>
        <div className="room-create">
        <div className="btn-create-room">
          Create Room
        </div>

        <div className="new-room">
          <form action="http://127.0.0.1:80/create_room" method="POST">

            <select name="playerNos" required placeholder="No of Players">
              <option value={2}>2 Players</option>
              <option value={3}>3 Players</option>
              <option value={4}>4 Players</option>
            </select>

            <select name="capScore" required placeholder="Cap Score">
              <option value={160}>160</option>
              <option value={240}>240</option>
            </select>

            <button type="submit">Create Room</button>
          </form>

        </div>
        </div>
    </div>
      );
    }
  }
 
export default Start