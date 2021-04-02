import { Component, OnInit } from '@angular/core';
import { Todo } from "src/app/todo";


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  
  searchText: string | null = null;
  index = null;

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

  ngOnInit(): void {
  }

  completeTask() {
    
  }

  addTask() {

  }

  removeTask() {
    this.todos.splice(this.index, 1);
  }

}
