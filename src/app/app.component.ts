import { Component } from '@angular/core';
import { ITodos } from './interfaces/itodos';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'todo-app';

  constructor(private todoService: TodoService) { }

  addTask(task: ITodos) {
    this.todoService.addTask(task);
  }
}
