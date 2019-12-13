import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from '@ag-grid-community/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './a_main-page/main-page.component';
import { ProfileComponent } from './a_main-page/a_profile/profile.component';
import { ListadminComponent } from './a_main-page/a_listadmin/listadmin.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './a_main-page/a_register/register.component';
import { LoginComponent } from './a_login/login.component';

import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { UpdateproComponent } from './a_main-page/a_profile/a_updatepro/updatepro.component';
import { StartpageComponent } from './startpage/startpage.component';
const appRoutes: Routes = [
  { path: 'a_login', component: LoginComponent },
  { path: 'a_main-page', component: MainPageComponent, canActivate: [AuthGuard] }
];
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ProfileComponent,
    ListadminComponent,
    RegisterComponent,
    LoginComponent,
    UpdateproComponent,
    StartpageComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    AgGridModule.withComponents([]),
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }




 /*import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AgGridModule} from "@ag-grid-community/angular";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }*/



