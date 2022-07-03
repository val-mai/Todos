import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { Todo } from '../../classes/todo';
import { ITodos } from '../../interfaces/itodos';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  faCirclePlus = faCirclePlus;

  constructor() { }

  @Output() onAddTask = new EventEmitter<ITodos>();

  newTodo = new Todo('',false,'not');

  ngOnInit(): void {
  }

  addTask() {
    this.onAddTask.emit(this.newTodo);
    this.newTodo = new Todo('',false,'not');
  }

}
