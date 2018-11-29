import { Component, OnInit } from '@angular/core';
import {Todo} from '../Todo';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {FormControl} from '@angular/forms';
import {todoArr} from '../todo-mock';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  date = new FormControl(new Date());
  todos: Todo[];

  constructor() { }
  ngOnInit() {
    this.todos = todoArr;
    console.log(this.todos);
  }
  reload() {

    console.log(this.date.value);
  }

}
