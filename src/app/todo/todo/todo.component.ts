import { Component, OnInit } from '@angular/core';
import { Todo } from '../Todo';
import { MatDialog } from '@angular/material';
import { CreateTodoComponent } from '../create-todo/create-todo.component';
import { TodoService } from '../todo.service';
import { MapComponent } from '../map/map.component';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  date: Date = new Date();
  todos: Todo[];
  username: string;

  constructor(public dialog: MatDialog, public todoService: TodoService, public authService: AuthService,
    private cookiesService: CookieService, public router: Router) {

    const cookieUser = cookiesService.get('user');
    this.username = cookieUser.substring(0, cookieUser.indexOf('@'));
    if (!cookiesService.check('user')) {
      this.router.navigateByUrl('/');
    }
  }

  ngOnInit() {
    const _this = this;

    const todoData = {
      date: _this.date.setHours(0, 0, 0, 0)
    };

    this.todoService.getTodos(todoData).subscribe(function (res) {
      _this.todos = res.data;
    }, function (err) {
      alert(err.error.message);
    });
  }

  reload() {
    const _this = this;
    const todoData = {
      date: _this.date.setHours(0, 0, 0, 0)
    };
    this.todoService.getTodos(todoData).subscribe(function (res) {
      _this.todos = res.data;
    }, function (err) {
      alert(err.error.message);
    });
  }

  openCreateTodo(): void {
    const dialogRef = this.dialog.open(CreateTodoComponent, {
      data: { 'date': this.date },
      width: '40%'
    });

    dialogRef.afterClosed().subscribe((success) => {
      if (success) {
        this.reload();
      }
    });
  }

  deleteTodo(_id: String, done: number): void {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i]._id === _id) {
        this.todos.splice(i, 1);
        break;
      }
    }
    this.todoService.deleteTodo(_id).subscribe(function (res) {
    }, function (err) {
      alert(err.error.message);
    });
    if (done) {
      alert('Good Job!');
    }
  }

  openMap(lt: any, lg: any) {
    this.dialog.open(MapComponent, {
      data: { lat: lt.$numberDecimal, lng: lg.$numberDecimal }, width: '40%'
    });
  }

  logout() {
    const _this = this;
    this.authService.signOut().subscribe(function () {
      _this.cookiesService.delete('user');
      _this.router.navigateByUrl('/');
    }, function (err) {
      console.log(err);
    });
  }

}
