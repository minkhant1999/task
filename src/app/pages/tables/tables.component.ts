import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/tasks';
import { TaskService } from 'src/app/tasks.service';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/employee.service';
import { Router } from '@angular/router';
import { SmsModalComponent } from '../sms-modal/sms-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  selectedUser: string = '';
  selectedTask: string = '';

  employees: Observable<Employee[]>;
  tasks: Observable<Task[]>;

  constructor(private taskService: TaskService, private router: Router, private employeeService: EmployeeService, public modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.reloadData();
    this.loadEmployees();
  }
  reloadData() {
    this.taskService.getTaskList().subscribe(data => {
      this.tasks = data.result;
      console.log(this.tasks);
    });
  }

  loadEmployees() {
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees = data.result.content;
      console.log(this.employees);
    });
  }
  
  profile(id: number){
    console.log(id);
    this.router.navigate(['profile',id]);  
  }
  

  //event handler for the select element's change event
  selectChangeUser (event: any) {
    //update the ui
    this.selectedUser  = event.target.value;
  }
  //event handler for the select element's change event
  selectChangeTask (event: any) {
    //update the ui
    this.selectedTask  = event.target.value;
  }

  openSmsModal() {
    const modalRef = this.modalService.open(SmsModalComponent);
    modalRef.componentInstance.user = this.tasks;
    modalRef.result.then((result) => {
      if (result) {
        console.log(this.tasks); 
      }
    });
    // modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
    //   console.log(receivedEntry);
    // })
   }

   openEmailModal() {
    const modalRef = this.modalService.open(SmsModalComponent);
    modalRef.componentInstance.user = this.employees;
    modalRef.result.then((result) => {
      if (result) {
        console.log(this.employees); 
      }
    });
    // modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
    //   console.log(receivedEntry);
    // })
   }
}
