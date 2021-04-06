import { CompileTemplateMetadata } from '@angular/compiler';
import { Component, OnInit, ɵisBoundToModule__POST_R3__ } from '@angular/core';
import { Todo } from "src/app/todo";
import { DataService } from '../data.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  
  searchText: string | null = null;
  newTask: string = "";
  todos: Todo[] = [];


  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.todos = this.data.getTodos();
  }

  addTask() {
    this.data.addTodo(this.newTask);
    this.newTask = "";
  }

  removeTask(todo: Todo) {
    this.data.deleteTodo(todo);
  }

  completeTask(todo: Todo) {
    todo.completed = true;
  }
}
