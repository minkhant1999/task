import { Component, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Sms } from 'src/app/Sms';
import { SmsService } from 'src/app/sms.service';
import { TaskService } from 'src/app/tasks.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from 'src/app/employee';
import { EmployeeInfo } from 'src/app/models/EmployeeInfo';


@Component({
  selector: 'app-sms-modal',
  templateUrl: './sms-modal.component.html',
  styleUrls: ['./sms-modal.component.css']
})
export class SmsModalComponent implements OnInit {
  newID =[];
  EmployeeInfo = new EmployeeInfo();
  sms: Sms  = new Sms();
  submitted = false;
  
constructor(public activeModal: NgbActiveModal, private router: Router, private taskService: TaskService, private smsService: SmsService,private fb: FormBuilder) { }

ngOnInit(): void {

  // this.sms.employeeIds=[21,22];
  // this.sms.content='';
  // this.sms.informType='SMS';
  // this.sms.subject='';
  // this.sms.cc=[21,22];
  this.sms.employeeIds=[25,47,48,32,49,33,30,61];

}

sendSmsToMember() {
  
  // this.submitted = true;
  this.sms.informType='SMS';
  // this.sms.cc=[];
  // this.sms.content='';
  // this.sms.employeeIds=[];

  this.smsService.sendSMS(this.sms).subscribe(data => {
    console.log(data);
    // console.log(InformType);
    // this.sms = new Sms();
  },
    error => console.log(error)
  );
}

}

