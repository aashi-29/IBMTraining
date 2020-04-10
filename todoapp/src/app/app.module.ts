import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { SentenceCasePipe } from './pipes/todo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    SentenceCasePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
