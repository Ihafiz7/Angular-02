import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-reciver',
  templateUrl: './reciver.component.html',
  styleUrls: ['./reciver.component.scss']
})
export class ReciverComponent implements OnInit {

  message:string = "";

  constructor(private shared: SharedService){}

  ngOnInit(): void {
    this.shared.messageSource.subscribe(msg => this.message = msg);
    // this.message = localStorage.getItem("savedMessage") || "Dont have anything to show"
  }


}
