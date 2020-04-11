import { Component } from '@angular/core';

@Component({
  selector: 'my-message',
  template: `
    <h2>Thought for the day is : {{txt}}</h2>
  `
})
export class MessageComponent{
    txt : string= "Nothing is impossible.";
}