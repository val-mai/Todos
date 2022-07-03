import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/classes/todo';
import { ITodos } from 'src/app/interfaces/itodos';
import { TodoService } from 'src/app/todo.service';
import { faStar, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  message = 'Stiamo cercando i tuoi task...'
  faStar = faStar;
  faTrash = faTrash;

  blink:boolean = true;


  todos: Todo[] = [];


  ngOnInit(): void {
    setTimeout(() => {
      this.getTask();
      this.message = 'Ooops...non ci sono task!';
      this.blink = false;
    },2000);
  }

  getTask(): void {
    this.todos = this.todoService.getTask();
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

  clearAll(){
    this.todoService.clearTasks();
  }
}
