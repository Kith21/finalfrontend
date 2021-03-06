import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListadminserviceService {

  constructor(private http:HttpClient) { }

  getAdminDetails() {
  	return this.http.get('http://localhost:8080/A_MyProject/a_employee');
  }
  getSuperuserDetails(){
  	return this.http.get('http://localhost:8080/A_MyProject/a_superuser');
  }
}
