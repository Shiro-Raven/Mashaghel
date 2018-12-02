import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TodoService } from '../todo.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent {

  name: string;
  description: string;
  date: Date;
  type: boolean;
  time: string;
  minDate = new Date();
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  emails: string[] = [];
  lat = 30.0560109;
  lng = 31.2221738;
  zoom = 14.24;
  checked = false;

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our email
    if ((value || '').trim()) {
      this.emails.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(email: string): void {
    const index = this.emails.indexOf(email);
    if (index >= 0) {
      this.emails.splice(index, 1);
    }
  }

  constructor(
    public dialogRef: MatDialogRef<CreateTodoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public todoService: TodoService) {
    this.date = new Date(data.date);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  test(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
  }

  onSubmit() {
    const array = this.time.split(':', 2);
    this.date.setHours(parseInt(array[0], 10), parseInt(array[1], 10), 0, 0);
    const todoData = {
      name: this.name,
      description: this.description,
      deadline: this.date,
      type: this.type,
      emails: this.emails,
      lat: this.lat,
      lng: this.lng
    };

    const _this = this;
    this.todoService.createTodo(todoData).subscribe(function (res) {
      _this.dialogRef.close(true);
    }, function (err) {
      alert(err.error.message);
    });
  }
}
