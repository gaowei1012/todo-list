import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoService {

  // tslint:disable-next-line:no-inferrable-types
  lastId: number = 0;

  todos: Todo[] = [];

  constructor() { }

  // 添加
  addTodo(todo: Todo): TodoService {

    if (!todo.id) {
      todo.id = ++ this.lastId;
    }

    this.todos.push(todo);

    return this;
  }

  // 移除
  deleteTodoById(id: number): TodoService {

    this.todos = this.todos
      .filter(todo => todo.id !== id);

      return this;
  }

  // 追加
  updateTodoById(id: number, values: Object = {}): Todo {
    const todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);

    return todo;
  }

  // GET /todos
  getAllTodos(): Todo[] {
    return this.todos;
  }

  // Get /todos/:id
  getTodoById(id: number): Todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  // toggle todo componet
  toggleTodoComponent(todo: Todo) {
    const updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }

}
