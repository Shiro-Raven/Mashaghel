import { Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TodoService } from '../todo.service';

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

  constructor(
    public dialogRef: MatDialogRef<CreateTodoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public todoService: TodoService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    console.log(this.date);
    const todoData = {
      name: this.name,
      description: this.description,
      deadline: this.date,
      type: this.type
    };

    const _this = this;
    this.todoService.createTodo(todoData).subscribe(function (res) {
      _this.dialogRef.close(true);
    }, function (err) {
      alert(err.error.message);
    });
  }
}
