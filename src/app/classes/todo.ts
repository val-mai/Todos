import { ITodos } from "../interfaces/itodos";

export class Todo implements ITodos {
  id?:number;
  title!:string;
  completed!:boolean;
  important!:string

  constructor(title:string, completed:boolean, important:string ) {
    this.title = title;
    this.completed = completed;
    this.important = important
  }
}
