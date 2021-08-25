import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
{path:'',redirectTo:'/user/login',pathMatch:'full'},
  {path:'user',component:UserComponent,
children:[
  { path:'registration',component:RegistrationComponent},
  { path: 'login', component: LoginComponent }

]
  },
  {path:'home',component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
