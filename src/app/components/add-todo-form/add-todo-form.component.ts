import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-add-todo-form",
  templateUrl: "./add-todo-form.component.html",
  styleUrls: ["./add-todo-form.component.css"]
})
export class AddTodoFormComponent implements OnInit {
  text = "";
  @Output() addNewTodo = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onFormSubmit(form) {
    this.addNewTodo.emit(this.text);
    form.resetForm();
  }
}
