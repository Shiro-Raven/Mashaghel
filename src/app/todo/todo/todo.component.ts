import { Component, OnInit } from '@angular/core';
import {Todo} from '../Todo';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {FormControl} from '@angular/forms';
import { MatDialog } from '@angular/material';
import {CreateTodoComponent} from '../create-todo/create-todo.component';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  date: Date = new Date();
  todos: Todo[];

  constructor(public dialog: MatDialog, public todoService: TodoService) { }
  ngOnInit() {
    const _this = this;
    const todoData = {
      date: _this.date.setHours(0, 0, 0, 0)
    };
      this.todoService.getTodos(todoData).subscribe(function (res) {
        _this.todos = res.data;
        console.log(res.data);
      }, function (err) {
        alert(err.error.message);
      });
    console.log(this.todos);
  }
  reload() {
    const _this = this;
    const todoData = {
      date: _this.date.setHours(0, 0, 0, 0)
    };
      this.todoService.getTodos(todoData).subscribe(function (res) {
        _this.todos = res.data;
        console.log(res.data);
      }, function (err) {
        alert(err.error.message);
      });
    console.log(this.todos);
  }

  openCreateTodo(): void {
    const dialogRef = this.dialog.open(CreateTodoComponent, {
      width: '40%'
    });

    dialogRef.afterClosed().subscribe((success) => {
      if (success) {
       console.log('success');
       this.reload();
      }
    });
  }
  deleteTodo(_id: String, done: number): void {
    for (let i = 0; i < this.todos.length; i++) {
      if ( this.todos[i]._id === _id) {
        this.todos.splice(i, 1);
        break;
      }
    }
    this.todoService.deleteTodo(_id).subscribe(function(res) {
      console.log('success');
    }, function(err) {
      alert(err.error.message);
    });
    if (done) {
      alert('Good Job!');
    }
  }

}
