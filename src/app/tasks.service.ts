import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
// import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  url: string;


  constructor(private httpClient: HttpClient) {
    this.url = "http://10.201.118.7:9000/task-management-tool/jira-tasks/main-tasks";
  }

  getTask(id: number): Observable<any> {
    return this.httpClient.get(`${this.url}/${id}`);
  }

  // getting task list from API
  getTaskList(): Observable<any> {
    let param: any = {'offset': 0, 'limit':100};
    console.log(this.httpClient.get(`${this.url}`));
    return this.httpClient.get(`${this.url}`, {params: param});
  }
  // create employee phase 2
  createTask(Task: Object): Observable<Object> {
    return this.httpClient.post(`${this.url}`, Task);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  // private log(message: string) {
  //   this.messageService.add(`employeeService: ${message}`);
  // }
}
