import { Injectable } from '@angular/core';
import { Todo } from './classes/todo';
import { ITodos } from './interfaces/itodos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  todos: ITodos[] = [];

  i: number = 0;

  getTask(): Todo[] {
    return this.todos;
  }

  addTask(task: ITodos) {
    this.i++;
    task.id = this.i;
    this.todos.push(task);
  }

  deleteTask(task: ITodos) {
    let index = this.todos.indexOf(task);
    this.todos.splice(index, 1);
  }

  changeStatus(task: ITodos) {
    let index = this.todos.indexOf(task);
    this.todos[index].completed = !this.todos[index].completed;
    /* console.log(this.todos); */
  }

  starTask(task: ITodos) {
    let index = this.todos.indexOf(task);
    if (this.todos[index].important === 'not') {
      this.todos[index].important = 'important';
      this.todos.unshift(this.todos.splice(index, 1)[0]);
    } else {
      this.todos[index].important = 'not';
    }
    /* console.log(this.todos); */
  }

}
