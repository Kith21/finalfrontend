import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../a_register/employee';
import { ProfileserviceService } from './profileservice.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
getData:any;
private gridApi;
    private gridColumnApi;
  constructor(private router: Router, private http: HttpClient, private _httpService : ProfileserviceService ) { 
  console.log("HELLO");
	this._httpService.getSuperuserDetails()
		.subscribe((res : any[])=>{
			console.log(res);

			this.getData = res;
	});}
   id : number;
    name: string;
    dob: string;
    phno: number;
    username :string;
    password : string;
    role :string;

    employee : Employee;
    model =  new Employee('','',0,'','','');

  ngOnInit() {
  }

home3(){
	this.router.navigate(['a_main-page']);
}

navigate(){
       

        this.router.navigate(['/a_updatepro']);
    }

logout(){
  this.router.navigate(['/a_login']);
}

    }

