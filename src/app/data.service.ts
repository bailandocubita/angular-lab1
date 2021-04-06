import { Injectable } from '@angular/core';
import { Todo } from "src/app/todo";

@Injectable({
  providedIn: 'root'
})
export class DataService {


  todos: Todo[] = [
    {
      task: "Bug Matt to post the schedule",
      completed: true,
    },
    {
      task: "Bug Henry to post our grades",
      completed: false,
    },
    {
      task: "Keep my son alive for another day",
      completed: true,
    },
    {
      task: "Figure out how to take over the world",
      completed: false,
    }
  ];


  constructor() { }

  
  
  getTodos() {
    return this.todos;
  }

  addTodo(newTask: string) {
    this.todos.push({task: newTask, completed: false});
  }

  deleteTodo(todo: Todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }

  completeTask(todo: Todo) {
    todo.completed = true;
  }
}




