import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
// import {environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  socket;
  constructor() {   }
  setupSocketConnection() {
    // this.socket = io(environment.SOCKET_ENDPOINT);
    this.socket = io('http://localhost:5003');
    this.socket.emit("message", {"message": "I am the client, I am trying to connect to server."})
    this.socket.on("message", (data)=>{console.log(data)})
    this.socket.on("produced grid", (data)=>{console.log(data)})
  }

  emit(){
    this.socket.emit("grid specs", { "timestamp": Date.now(), "grid_width": 5, "grid_height": 5, "mandatory_words": ["holly"], "banned_words": [], "desirable_words_unfiltered": [

      'holds'
      // 'holds', 'strut', 'yearn', 'hasty', 'larva', 'satin', 'caper', 'serif', 'solve', 'casts', 'peril', 'rifle', 'bones', 'ibiza', 'knelt', 'brisk', 'noise', 'smart', 'dread', 'mafia', 'runny', 'demur', 'elfin', 'diary', 'remit', 'nerve', 'ether', 'range', 'march', 'their', 'felon', 'arced', 'eider', 'flame', 'laced', 'nadir', 'bolts', 'cruel', 'pesto', 'bicep', 'lauds', 'salvo', 'vapid', 'utter', 'testy', 'vault', 'paths', 'dirty', 'basin', 'relic', 'doses', 'bared', 'soles', 'nicks', 'petit', 'salty', 'alert', 'pasta', 'tilde', 'tryst', 'swoon', 'anger', 'match', 'swarm', 'ought', 'north', 'stale', 'rabid', 'plead', 'strip', 'amble', 'ended', 'robed', 'video', 'leers', 'rival', 'badge', 'drops', 'macro', 'scuff', 'riser', 'miser', 'clubs', 'offer', 'dross', 'earth', 'media', 'dream', 'oared', 'schwa'

    ], "threshold": 1 })
  }

  emitOther(){
    this.socket.emit("grid specs", { "timestamp": Date.now(), "grid_width": 5, "grid_height": 5, "mandatory_words": ["bucky", "balls"], "banned_words": [], "desirable_words_unfiltered": [

      'holds'
      // 'holds', 'strut', 'yearn', 'hasty', 'larva', 'satin', 'caper', 'serif', 'solve', 'casts', 'peril', 'rifle', 'bones', 'ibiza', 'knelt', 'brisk', 'noise', 'smart', 'dread', 'mafia', 'runny', 'demur', 'elfin', 'diary', 'remit', 'nerve', 'ether', 'range', 'march', 'their', 'felon', 'arced', 'eider', 'flame', 'laced', 'nadir', 'bolts', 'cruel', 'pesto', 'bicep', 'lauds', 'salvo', 'vapid', 'utter', 'testy', 'vault', 'paths', 'dirty', 'basin', 'relic', 'doses', 'bared', 'soles', 'nicks', 'petit', 'salty', 'alert', 'pasta', 'tilde', 'tryst', 'swoon', 'anger', 'match', 'swarm', 'ought', 'north', 'stale', 'rabid', 'plead', 'strip', 'amble', 'ended', 'robed', 'video', 'leers', 'rival', 'badge', 'drops', 'macro', 'scuff', 'riser', 'miser', 'clubs', 'offer', 'dross', 'earth', 'media', 'dream', 'oared', 'schwa'

    ], "threshold": 0 })
  }

  stop(){
    this.socket.emit("please terminate", {})
  }

}
