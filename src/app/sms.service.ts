import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Sms } from './Sms';
@Injectable({
  providedIn: 'root'
})
export class SmsService {
  url: string;
  constructor(private httpClient: HttpClient) {
    this.url = "http://10.201.118.7:9000/task-management-tool/employees/multi-sms";
  }

  sendSMS(Sms: any): Observable<any> {
    // send sms api
    return this.httpClient.post(`${this.url}`, Sms);
  }
}
