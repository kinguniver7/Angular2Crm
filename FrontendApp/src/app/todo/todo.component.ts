import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  name: string;
  isActive: boolean = false;
  constructor() { }

  ngOnInit() {
    console.log("init");
  }

  changeActive(): void {
    this.isActive = !this.isActive;
  }
}
