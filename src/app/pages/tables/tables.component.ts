import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/tasks';
import { Employee } from 'src/app/employee';
import { TaskService } from 'src/app/tasks.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  tasks: Observable<Task[]>;

  constructor(
    private taskService:TaskService
  ) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.taskService.getTaskList().subscribe(data => {
      this.tasks = data.result;
      console.log(this.tasks);
    });
  }


}
