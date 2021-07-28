import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Sms } from 'src/app/Sms';
import { SmsService } from 'src/app/sms.service';
import { TaskService } from 'src/app/tasks.service';

@Component({
  selector: 'app-sms-modal',
  templateUrl: './sms-modal.component.html',
  styleUrls: ['./sms-modal.component.css']
})
export class SmsModalComponent implements OnInit {

  sms: Sms  = new Sms();
  submitted = false;
  // InformType = Sms;

constructor(public activeModal: NgbActiveModal, private router: Router, private taskService: TaskService, private smsService: SmsService) { }

ngOnInit(): void {
  this.sms.employeeIds=[21,22];
  this.sms.content='Only example';
  this.sms.informType=InformType.SMS;
  this.sms.cc=[23,24];
}
newSMS(): void {
  this.submitted = false;
  this.sms = new Sms();
}

sendSmsToMember() {
  this.submitted = true;
  this.smsService.sendSMS(this.sms).subscribe(data => {
    console.log(data);
    // this.sms = new Sms();
  },
    error => console.log(error)
  );
}
}

