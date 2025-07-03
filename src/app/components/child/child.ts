import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child {
  @Input('childColor') childColorProps!: string;
  @Input() name!: string;

  @Output() nameChange = new EventEmitter<string>();
  changeName() {
    this.nameChange.emit('Имя, заданное в дочернем компоненте');
  }
}
