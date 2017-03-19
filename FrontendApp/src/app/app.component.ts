import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  name: string = "test";

  addItem(t1, t2): string {
    console.log(t2);
    return t1;
  }

}
