import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Employee } from '../a_register/employee';

@Injectable({
  providedIn: 'root'
})
export class ProfileserviceService {

  constructor(private http: HttpClient) { }

  updateSuperuser(emp_no : number,employee: Object) {
  	console.log(emp_no);
  	console.log(employee);
    return this.http.put<Employee>('http://localhost:8080/A_MyProject/put/a_employee'+ emp_no, employee);
  }
  getSuperuserDetails()
  {
  	
	return this.http.get('http://localhost:8080/A_MyProject/a_superuser');
}
}