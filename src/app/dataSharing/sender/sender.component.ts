import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.scss']
})
export class SenderComponent {

  message:string = "";

  constructor(private shared: SharedService){}

  sendMessage(){
    this.shared.updateMessage(this.message)
  }

  savemessage(){
    localStorage.setItem("savedMessage",this.message);
  }

  removeMessage(){
    localStorage.removeItem("savedMessage");
  }
}
