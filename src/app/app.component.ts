import { Component, OnInit } from '@angular/core';
import {SocketioService} from './socketio.service'
///
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ang-socket-spike4';

  constructor(private socketService: SocketioService) {}
  ngOnInit() {
    this.socketService.setupSocketConnection();
  }

  emit(){this.socketService.emit()}
  emitOther(){this.socketService.emitOther()}
  message(){this.socketService.message()}
  stop(){this.socketService.stop()}
  verifyOff(){this.socketService.verifyOff()}
}
