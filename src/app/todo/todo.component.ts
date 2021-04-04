import { CompileTemplateMetadata } from '@angular/compiler';
import { Component, OnInit, ɵisBoundToModule__POST_R3__ } from '@angular/core';
import { Todo } from "src/app/todo";


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  
  searchText: string | null = null;
  newTask: string;


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

  completeTask(todo: Todo) {
    todo.completed = true;
  }

  addTask() {
    this.todos.push({task: this.newTask, completed: false});
  }

  removeTask(todo: Todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }

}
