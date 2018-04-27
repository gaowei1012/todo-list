import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})

export class TodoComponent implements OnInit {

  newTodos: Todo = new Todo();
  // 注入 todoServer;
  constructor(private todoDataServer: TodoService) { }

  addTodo() {
    this.todoDataServer.addTodo(this.newTodos);
    this.newTodos = new Todo();
  }

  toggleTodoComponent(todo) {
    this.todoDataServer.toggleTodoComponent(todo);
  }

  removeTodo(todo) {
    this.todoDataServer.deleteTodoById(todo);
  }

  get todos() {
    return this.todoDataServer.getAllTodos();
  }

  ngOnInit() {
  }

}
