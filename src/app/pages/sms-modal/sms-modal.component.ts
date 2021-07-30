import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Sms } from 'src/app/Sms';
import { SmsService } from 'src/app/sms.service';
import { TaskService } from 'src/app/tasks.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from 'src/app/employee';


@Component({
  selector: 'app-sms-modal',
  templateUrl: './sms-modal.component.html',
  styleUrls: ['./sms-modal.component.css']
})
export class SmsModalComponent implements OnInit {
  items = ['Javascript', 'Typescript'];

  inputText = 'text';

  itemsAsObjects = [{id: 0, name: 'Angular', readonly: true}, {id: 1, name: 'React'}];

  autocompleteItems = ['Item1', 'item2', 'item3'];
  sms: Sms  = new Sms();
  submitted = false;

constructor(public activeModal: NgbActiveModal, private router: Router, private taskService: TaskService, private smsService: SmsService,private fb: FormBuilder) { }

ngOnInit(): void {
  // this.sms.employeeIds=[21,22];
  // this.sms.content='';
  // this.sms.informType='SMS';
  // this.sms.subject='';
  // this.sms.cc=[21,22];
  this.sms.employeeIds=[21,22];

}
sendSmsToMember() {
  this.submitted = true;
  

  this.sms.informType='SMS';
  this.sms.cc=[];
  this.sms.content='';
  this.sms.employeeIds=[21,22];

  this.smsService.sendSMS(this.sms).subscribe(data => {
    console.log(data);
    // console.log(InformType);
    // this.sms = new Sms();
  },
    error => console.log(error)
  );
}

}

