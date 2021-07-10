import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/tasks.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  employees: Observable<Employee[]>;
  constructor() { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.taskService.getEmployeeList().subscribe(data => {
      this.employees = data.result.content;
      console.log(this.employees);
    });
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error)
    );
  }

  employeeDetails(id: number){
    console.log()
    this.router.navigate(['details', id]);  
  }
}
