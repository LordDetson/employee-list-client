import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeServes: EmployeeService) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  private getAllEmployees(): void {
    this.employeeServes.getAll().subscribe(data => {
      this.employees = data;
    });
  }
}
