import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  name: string;
  isActive: boolean = false;
  isLoad: boolean = false;


  items: Array<string>;

  constructor() {
    
  }
  refresh(): void {
    this.isLoad = true;
    setTimeout(() => {
      this.active();
    }, 3000);
  }
  active():void{
    this.items = ["Apple iPhone 7", "Huawei Mate 9", "Samsung Galaxy S7", "Motorola Moto Z"];
    this.isLoad = false;
  }

  ngOnInit() {
    console.log("init");
    this.refresh();
  }

  changeActive(): void {
    this.isActive = !this.isActive;
    this.refresh();
  }
}
