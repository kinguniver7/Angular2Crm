import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App!';
  name: string = "test";

  addItem(t1, t2): string {
    console.log("addItem", t1);
    return t1;
  }
  onChanged(increased) {
    console.log("App", increased);
  }

}
