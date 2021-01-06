import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee';
import {ActivatedRoute} from '@angular/router';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {

  id: number;
  employee: Employee = new Employee();

  constructor(private activatedRoute: ActivatedRoute,
              private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.employeeService.get(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
  }

}
