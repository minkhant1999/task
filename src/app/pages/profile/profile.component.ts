import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from 'src/app/employee';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id: number;
  employee: Employee;
  constructor(private route: ActivatedRoute, private router: Router,
    private employeeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employee = new Employee();
    this.id = this.route.snapshot.params['id'];

    this.employeeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['employees']);
  }

}
