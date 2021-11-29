import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllusersComponent } from './allusers/allusers.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EdituserComponent } from './edituser/edituser.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewuserComponent } from './newuser/newuser.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { AdminComponent } from './admin/admin.component';
import { GetAllOperationsComponent } from './get-all-operations/get-all-operations.component';
import { AllCurrencyComponent } from './all-currency/all-currency.component';
import { StatusComponent } from './status/status.component';
import { LogoutComponent } from './logout/logout.component';
import { RemittanceComponent } from './remittance/remittance.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'allusers', component: AllusersComponent,canActivate: [AuthGuard]},
  {path: 'contactus', component: ContactusComponent},
  {path: 'edituser', component: EdituserComponent,canActivate: [AuthGuard]},
  {path: 'newuser', component: NewuserComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  {path: 'getAllOperations', component: GetAllOperationsComponent,canActivate: [AuthGuard]},
  {path: 'allCurrency', component: AllCurrencyComponent,canActivate: [AuthGuard]},
  {path: 'status', component: StatusComponent,canActivate: [AuthGuard]},
  {path: 'logout', component: LogoutComponent},
  {path: 'remittance', component: RemittanceComponent,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
