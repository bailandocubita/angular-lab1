import { Pipe, PipeTransform, ɵisBoundToModule__POST_R3__ } from '@angular/core';
import { Todo } from './todo';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], searchText: string | null): unknown {
    if (!searchText) {
      return todos;
    }
    return todos.filter((todo:Todo) => todo.task.toLowerCase().includes(searchText.toLowerCase()));
  }

}
