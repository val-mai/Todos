import { Component, OnInit } from '@angular/core';
import { faStar, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Todo } from 'src/app/classes/todo';
import { ITodos } from 'src/app/interfaces/itodos';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  message = 'Stiamo cercando i tuoi task...'
  faStar = faStar;
  faTrash = faTrash;

  blink:boolean = true;


  todos: Todo[] = [];


  ngOnInit(): void {
    setTimeout(() => {
      this.getTask();
      this.message = 'Non hai ancora completato nessun task';
      this.blink = false;
    },2000);
  }

  getTask(): void {
    this.todos = this.todoService.getTask();
    this.todos = this.todos.filter(ele => ele.completed === true);
  }

  addTask(task: ITodos) {
    this.todoService.addTask(task);
  }

  deleteTask(task: ITodos) {
    this.todoService.deleteTask(task);
    this.getTask();
  }

  starTask(task: ITodos) {
    this.todoService.starTask(task);
    this.getTask();
  }

  changeStatus(task: ITodos) {
    this.todoService.changeStatus(task);
    this.getTask();
  }
}
