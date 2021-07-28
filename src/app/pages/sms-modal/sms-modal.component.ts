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

  Sms: Sms = new Sms();
  submitted = false;
  InformType = Sms;

constructor(public activeModal: NgbActiveModal, private router: Router, private taskService: TaskService, private smsService: SmsService) { }

ngOnInit(): void {
  // this.sms.employeeIds = [34,25];
  // this.sms.content = "This is example";
  // this.sms.informType = InformType.SMS;
  // this.sms.subject = "Testing";
  // this.sms.cc = null;
}
newSMS(): void {
  this.submitted = false;
  this.Sms = new Sms();
}

sendSms() {
  this.submitted = true;
  this.smsService.sendSMS(this.Sms).subscribe(data => {
    console.log(data);
    this.Sms = new Sms();
  },
    error => console.log(error)
  );
}
}

