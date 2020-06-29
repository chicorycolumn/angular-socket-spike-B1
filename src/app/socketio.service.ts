import { Injectable } from '@angular/core';
import socketIOClient from "socket.io-client";

@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  socket;

  constructor() {   }
  setupSocketConnection() {
    let shouldEndpointBeHeroku = true;

    this.socket = socketIOClient(
      shouldEndpointBeHeroku
        ? "https://cook-up-a-crossword.herokuapp.com/"
        : "http://localhost:5000",
        {transports: ['websocket']}
    );

    this.socket.on("connect", ()=>{
      console.log("Connected!", (Date.now()/1000)-1593360000)
    })

    this.socket.on("message", (data)=>{
      console.log("server sent ", data, (Date.now()/1000)-1593360000)
    })

    this.socket.on("produced grid", (data)=>{
      console.log(data, (Date.now()/1000)-1593360000)
    })
  }

  emit(){
    console.log("gonna emit", (Date.now()/1000)-1593360000)

    this.socket.emit("grid specs", { "timestamp": Date.now(), "grid_width": 5, "grid_height": 5, "mandatory_words": ["holly"], "banned_words": [], "desirable_words_unfiltered": [

      'holds'
      // 'holds', 'strut', 'yearn', 'hasty', 'larva', 'satin', 'caper', 'serif', 'solve', 'casts', 'peril', 'rifle', 'bones', 'ibiza', 'knelt', 'brisk', 'noise', 'smart', 'dread', 'mafia', 'runny', 'demur', 'elfin', 'diary', 'remit', 'nerve', 'ether', 'range', 'march', 'their', 'felon', 'arced', 'eider', 'flame', 'laced', 'nadir', 'bolts', 'cruel', 'pesto', 'bicep', 'lauds', 'salvo', 'vapid', 'utter', 'testy', 'vault', 'paths', 'dirty', 'basin', 'relic', 'doses', 'bared', 'soles', 'nicks', 'petit', 'salty', 'alert', 'pasta', 'tilde', 'tryst', 'swoon', 'anger', 'match', 'swarm', 'ought', 'north', 'stale', 'rabid', 'plead', 'strip', 'amble', 'ended', 'robed', 'video', 'leers', 'rival', 'badge', 'drops', 'macro', 'scuff', 'riser', 'miser', 'clubs', 'offer', 'dross', 'earth', 'media', 'dream', 'oared', 'schwa'

    ], "threshold": 1 })
  }

  emitOther(){
    console.log("gonna emit other", (Date.now()/1000)-1593360000)

    this.socket.emit("grid specs", { "timestamp": Date.now(), "grid_width": 5, "grid_height": 5, "mandatory_words": ["bucky", "balls"], "banned_words": [], "desirable_words_unfiltered": [

      // 'holds'
      'holds', 'strut', 'yearn', 'hasty', 'larva', 'satin', 'caper', 'serif', 'solve', 'casts', 'peril', 'rifle', 'bones', 'ibiza', 'knelt', 'brisk', 'noise', 'smart', 'dread', 'mafia', 'runny', 'demur', 'elfin', 'diary', 'remit', 'nerve', 'ether', 'range', 'march', 'their', 'felon', 'arced', 'eider', 'flame', 'laced', 'nadir', 'bolts', 'cruel', 'pesto', 'bicep', 'lauds', 'salvo', 'vapid', 'utter', 'testy', 'vault', 'paths', 'dirty', 'basin', 'relic', 'doses', 'bared', 'soles', 'nicks', 'petit', 'salty', 'alert', 'pasta', 'tilde', 'tryst', 'swoon', 'anger', 'match', 'swarm', 'ought', 'north', 'stale', 'rabid', 'plead', 'strip', 'amble', 'ended', 'robed', 'video', 'leers', 'rival', 'badge', 'drops', 'macro', 'scuff', 'riser', 'miser', 'clubs', 'offer', 'dross', 'earth', 'media', 'dream', 'oared', 'schwa'

    ], "threshold": 0 })
  }

  stop(){
    console.log("gonna ask to stop", (Date.now()/1000)-1593360000)
    this.socket.emit("please terminate", {})
  }

  message(){
    console.log("gonna message", (Date.now()/1000)-1593360000)
    this.socket.emit("message", {"message": "I am the client, I am trying to connect to server."})
  }

  verifyOff(){
    console.log("gonna verify off", (Date.now()/1000)-1593360000)
    this.socket.emit("verify off", {})
  }

}
