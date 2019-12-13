import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './a_login/login.component';
import { MainPageComponent} from './a_main-page/main-page.component';
import { ProfileComponent } from './a_main-page/a_profile/profile.component';
import { RegisterComponent } from './a_main-page/a_register/register.component';
import { ListadminComponent } from './a_main-page/a_listadmin/listadmin.component';
import { UpdateproComponent } from './a_main-page/a_profile/a_updatepro/updatepro.component';
import { AuthGuard } from './auth.guard';
import { StartpageComponent } from './startpage/startpage.component';

const routes: Routes = [ 
{ path:'',redirectTo:'startpage',pathMatch:'full'},
 {path:'startpage', component:StartpageComponent },
{ path:'a_login', component:LoginComponent },
{ path:'a_main-page', component:MainPageComponent,canActivate: [AuthGuard] },
{path: 'a_profile', component: ProfileComponent,canActivate: [AuthGuard]  },
	{path: 'a_register', component: RegisterComponent,canActivate: [AuthGuard]  },
	{path: 'a_listadmin', component: ListadminComponent ,canActivate: [AuthGuard] },
	{path: 'a_updatepro', component: UpdateproComponent ,canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
