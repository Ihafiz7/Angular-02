import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent {

  isLogged = true;

  status = 1;

  changeStatus() {
    this.status = this.status < 3 ? this.status + 1 : 1;
  }

  users = ["asad","asad 2", "asad 3"];

  role = "admin"
}
