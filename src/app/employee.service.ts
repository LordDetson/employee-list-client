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
  private employee = 'employee';

  constructor(private httpClient: HttpClient) { }

  getUrl(pathToAdd: string): string {
    return `${this.baseUrl + pathToAdd}`;
  }

  getAll(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.getUrl(this.employees));
  }

  get(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(this.getUrl(`${this.employee}/${id}`));
  }

  create(employee: Employee): Observable<object> {
    return this.httpClient.post(this.getUrl(this.createEmployee), employee);
  }

  update(id: number, employee: Employee): Observable<object> {
    return this.httpClient.put(this.getUrl(`${this.employee}/${id}`), employee);
  }

  delete(id: number): Observable<object> {
    return this.httpClient.delete(this.getUrl(`${this.employee}/${id}`));
  }
}
