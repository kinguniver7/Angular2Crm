import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { BoldDirective } from './directives/bold.directive';
import { WhileDirective } from './directives/while.directive';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    BoldDirective,
    WhileDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
