import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
// import { MessageService } from './message.service';
import { Employee } from './employee';
 
@Injectable({
  providedIn: 'root'
})

export class TaskService {
  url: string;
  link: string;


  constructor(private httpClient: HttpClient) {
    this.url = "http://10.201.118.7:9000/task-management-tool/employees/lists";
    // this.link = "http://10.201.118.7:9000/task-management-tool/employees/lists";
  }

  getEmployee(id: number): Observable<any> {
    return this.httpClient.get(`${this.url}/${id}`);
  }
  // create employee phase 2
  createEmployee(employee: Object): Observable<Object> {
    return this.httpClient.post(`${this.url}`, employee);
  }
  // update employee phase 2
  updateEmployee(id: number, value: any): Observable<Object> {
    return this.httpClient.put(`${this.url}/${id}`, value);
  }
  // delete employee phase 2
  deleteEmployee(id: number): Observable<any> {
    return this.httpClient.delete(`${this.url}/${id}`, { responseType: 'text' });
  }
  // getting employee list from API
  getEmployeeList(): Observable<any> {
    console.log(this.httpClient.get(`${this.url}`));
    return this.httpClient.get(`${this.url}`);
  }

  /* GET heroes whose name contains search term */
  searchEmployee(term: string): Observable<Employee[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.httpClient.get<Employee[]>(`${this.url}/?name=${term}`).pipe(
      tap(x => x.length ?
        console.log(`found heroes matching "${term}"`) :
        console.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Employee[]>('searchEmployee', []))
    );
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
