import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee';
import {EmployeeService} from '../employee.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id: number;
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService,
              private activityRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.activityRoute.snapshot.params.id;
    this.employeeService.get(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
  }

  update(): void {
    this.employeeService.update(this.id, this.employee).subscribe(data => {
      console.log(data);
      this.goToEmployeeList();
    }, error => console.log(error));
  }

  goToEmployeeList(): void {
    this.router.navigate(['/employees']);
  }
}
