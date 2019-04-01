import { Component, OnInit } from "@angular/core";
import { Todo } from "../../interfaces/todo";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [
    { id: 5, text: "do homework", completed: false },
    { id: 4, text: "go to gym", completed: false },
    { id: 3, text: "buy a calendar", completed: false },
    { id: 2, text: "clean the room", completed: false },
    { id: 1, text: "go for a walk with the dog", completed: false }
  ];
  congratulations = false;

  constructor() {}

  ngOnInit() {}

  onOutputEventDelete(todoId) {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].id === todoId) {
        this.todos.splice(i, 1);
        return;
      }
    }
  }

  onOutputEventDone(todoId) {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].id === todoId) {
        this.todos[i].completed = true;
        break;
      }
    }

    this.congratulations = this.todos.every(todo => todo.completed === true);
  }

  onClickAllDone() {
    for (let todo of this.todos) {
      todo.completed = true;
    }
    this.congratulations = true;
  }

  onOutputEventAdd(newTodoText: string) {
    this.todos.unshift({
      id: this.todos[0].id + 1,
      text: newTodoText,
      completed: false
    });
  }
}
