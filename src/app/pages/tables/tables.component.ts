import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/tasks';
import { Employee } from 'src/app/employee';
import { TaskService } from 'src/app/tasks.service';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  employees: Observable<Employee[]>;
  tasks: Observable<Task[]>;

  constructor(private taskService: TaskService, private employeeService: EmployeeService) {
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


}
