import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {Employee} from './employee';

@Injectable({
  providedIn: 'root'
})
export class RegserviceService {

  constructor(private http: HttpClient) { }
  
  createEmployee(employee: Object): Observable<Object>{
  	console.log(employee);
    return this.http.post<Employee>(`http://localhost:8080/A_MyProject/post/a_employee/`, employee);
  }
  
}
