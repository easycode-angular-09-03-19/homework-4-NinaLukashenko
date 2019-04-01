import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { Todo } from "../../interfaces/todo";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"]
})
export class TodoItemComponent implements OnInit, OnDestroy {
  @Input() todo: Todo;
  @Output() cancelTask = new EventEmitter();
  @Output() doneTask = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  ngOnDestroy(): void {
    alert("The task is going to be deleted!");
  }

  onClickDelete() {
    let sure = confirm();
    if (!sure) {
      return alert("Ok, lets leave this task");
    }
    this.cancelTask.emit(this.todo.id);
  }

  onClickDone() {
    this.doneTask.emit(this.todo.id);
  }
}
