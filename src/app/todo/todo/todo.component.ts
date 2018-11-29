import { Component, OnInit } from '@angular/core';
import {Todo} from '../Todo';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  date: Date;
  todos: [Todo];

  constructor() { }
  ngOnInit() {
  }
  changeDate(event: MatDatepickerInputEvent<Date>) {
    this.date = event.value;
  }

}
