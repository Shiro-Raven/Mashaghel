import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), withCredentials: true };

@Injectable()
export class TodoService {

  serverLink = environment.serverLink;

  constructor(private http: HttpClient) { }

  public createTodo(todoData: any): Observable<any> {
    const todoUrl = this.serverLink + 'createtodo';
    return this.http.post<any>(todoUrl, todoData, httpOptions);
  }
  public getTodos(todoData: any): Observable<any> {
    const todoUrl = this.serverLink + 'gettodos';
    return this.http.post<any>(todoUrl, todoData, httpOptions);
  }
  public deleteTodo(id: String): Observable<any> {
    const todoUrl = this.serverLink + 'deletetodo';
    const todoData = {_id: id};
    return this.http.post<any>(todoUrl, todoData, httpOptions);
  }

}
