import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public messageSource = new BehaviorSubject<string>("Default message from service");

  updateMessage(message: string){
    this.messageSource.next(message);
  }
  
}
