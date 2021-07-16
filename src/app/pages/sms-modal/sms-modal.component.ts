import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Sms } from 'src/app/Sms';
import { SmsService } from 'src/app/sms.service';
import { Task } from 'src/app/tasks';
import { TaskService } from 'src/app/tasks.service';

@Component({
  selector: 'app-sms-modal',
  templateUrl: './sms-modal.component.html',
  styleUrls: ['./sms-modal.component.css']
})
export class SmsModalComponent implements OnInit {

  tasks: Observable<Task[]>;
  sms: Observable<Sms[]>;

  @Input() public user;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();


  constructor(public activeModal: NgbActiveModal, private taskService: TaskService, private smsService: SmsService) { }

  ngOnInit() {
  }



}
