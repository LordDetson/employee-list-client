import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8080/api/v1/';
  private employees = 'employees';
  private createEmployee = 'employee/create';

  constructor(private httpClient: HttpClient) { }

  getUrl(pathToAdd: string): string {
    return `${this.baseUrl + pathToAdd}`;
  }

  getAll(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.getUrl(this.employees));
  }

  create(employee: Employee): Observable<object> {
    return this.httpClient.post(this.getUrl(this.createEmployee), employee);
  }
}
