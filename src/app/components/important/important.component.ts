import { Component, OnInit } from '@angular/core';
import { faStar, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Todo } from 'src/app/classes/todo';
import { ITodos } from 'src/app/interfaces/itodos';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-important',
  templateUrl: './important.component.html',
  styleUrls: ['./important.component.css']
})
export class ImportantComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  message = 'Stiamo cercando i tuoi task...'
  faStar = faStar;
  faTrash = faTrash;


  todos: Todo[] = [];


  ngOnInit(): void {
    setTimeout(() => {
      this.getTask();
      this.message = 'Niente di importante qui!';
    },2000);
  }

  getTask(): void {
    this.todos = this.todoService.getTask();
    this.todos = this.todos.filter(ele => ele.important === 'important');
  }

  addTask(task: ITodos) {
    this.todoService.addTask(task);
  }

  deleteTask(task: ITodos) {
    this.todoService.deleteTask(task);
  }

  starTask(task: ITodos) {
    this.todoService.starTask(task);
  }

  changeStatus(task: ITodos) {
    this.todoService.changeStatus(task);
  }
}
