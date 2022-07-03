import { Injectable } from '@angular/core';
import { Todo } from './classes/todo';
import { ITodos } from './interfaces/itodos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  values:any;

  constructor() { }

  todos: ITodos[] =[];

  i:any = 0;

  getTask(): Todo[] {
    this.values = localStorage.getItem("Todos");
    if (this.values != null) {
      this.todos = JSON.parse(this.values);
    }
    if (this.todos.length != undefined && this.todos.length > 0) {
      this.i = this.todos[this.todos.length-1].id
    } else {
      this.i = 0;
    }
    return this.todos;
  }

  addTask(task: ITodos):void {
    this.i++;
    task.id = this.i;
    this.todos.push(task);
    localStorage.setItem('Todos', JSON.stringify(this.todos));
  }

  deleteTask(task: ITodos):void {
    let index = this.todos.indexOf(task);
    this.todos.splice(index, 1);
    this.updateLocal();
  }

  changeStatus(task: ITodos):void {
    let index = this.todos.indexOf(task);
    this.todos[index].completed = !this.todos[index].completed;
    console.log(this.todos);
    this.updateLocal();
  }

  starTask(task: ITodos):void {
    let index = this.todos.indexOf(task);
    if (this.todos[index].important === 'not') {
      this.todos[index].important = 'important';
      this.todos.unshift(this.todos.splice(index, 1)[0]);
    } else {
      this.todos[index].important = 'not';
    }
    /* console.log(this.todos); */
    this.updateLocal();
  }

  clearTasks() {
    this.todos.splice(0, this.todos.length);
    this.updateLocal();
  }

  updateLocal() {
    localStorage.removeItem('Todos');
    localStorage.setItem('Todos', JSON.stringify(this.todos));
  }

}
