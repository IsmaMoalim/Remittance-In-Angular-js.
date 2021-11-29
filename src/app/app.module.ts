import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AllusersComponent } from './allusers/allusers.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HttpClientModule } from '@angular/common/http';
import { EdituserComponent } from './edituser/edituser.component';
import { NewuserComponent } from './newuser/newuser.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { GetAllOperationsComponent } from './get-all-operations/get-all-operations.component';
import { AllCurrencyComponent } from './all-currency/all-currency.component';
import { StatusComponent } from './status/status.component';
import { LogoutComponent } from './logout/logout.component';
import { RemittanceComponent } from './remittance/remittance.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AllusersComponent,
    HomeComponent,
    ContactusComponent,
    EdituserComponent,
    NewuserComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    GetAllOperationsComponent,
    AllCurrencyComponent,
    StatusComponent,
    LogoutComponent,
    RemittanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
