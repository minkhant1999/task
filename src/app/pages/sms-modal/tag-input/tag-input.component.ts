import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/employee.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tag-input',
  templateUrl: './tag-input.component.html',
  styleUrls: ['./tag-input.component.css']
})
export class TagInputComponent implements OnInit {

  employees: [];
  dropdownList = [];
  selectedItems = [];
  dropdownSettings :IDropdownSettings;

  constructor(private employeeService: EmployeeService, private router: Router) { }
  ngOnInit() {
    this.reloadData();

    this.selectedItems = [
      // { item_id: 3, item_text: 'Pune' },
      // { item_id: 4, item_text: 'Navsari' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  reloadData() {
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees = data.result.content;
      this.dropdownList = this.employees;
      console.log("log customer", this.employees);
    });
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
}