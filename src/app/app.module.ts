import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GiohangComponent } from './giohang/giohang.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ContactComponent } from './contact/contact.component';
const appRoutes: Routes = [
{ path: 'login', component: LoginComponent }, 
{ path: 'register', component: RegisterComponent }, 
{ path: 'giohang', component: GiohangComponent },
{ path: 'home', component: HomeComponent },
{ path: 'details', component: DetailsComponent },
{ path: 'contact', component: ContactComponent },    
{ path: '', redirectTo: '/login', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    GiohangComponent,
    DetailsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    RouterModule.forRoot(
      appRoutes, { enableTracing: true }
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
