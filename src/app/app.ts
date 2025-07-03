import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  color = 'green'
  parentName: string = 'hello, world!';

  changeColor(newColor: string) {
    this.color = newColor;
  }

  checkCurrentValue(event: Event) {
    const target = event.target as HTMLInputElement;
    console.log('e', target.value);
  }

  setNewName(newName: string) {
    this.parentName = newName;
  }
}
