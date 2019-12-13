import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.css']
})
export class StartpageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  	//document.body.classList.add('bg-img');
  }

	title="ABC Bank";
  superuser(){
      console.log("superuser");
      this.router.navigate(['a_login']);
  }

 /*admin(){
      console.log("superuser");
      this.router.navigate(['admin']);
  }

  agent(){
    this.router.navigate(['agent']);
  }

  customer(){
    this.router.navigate(['customer']);
  }*/

}
