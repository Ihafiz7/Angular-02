import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  parentMessage:string = "I am parent message";
  

  message = "I am parent event";

  receiveMessage($event: string){
    this.message = $event;
  }
}
