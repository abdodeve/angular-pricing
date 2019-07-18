import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module'; 
import { HttpClientModule } from '@angular/common/http';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';


// Import Modules
// import { DashboardModule } from './dashboard/dashboard.module' ;
import { LoginModule } from './login/login.module' ;


import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pageNotFound/page-not-found/page-not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';





@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SnotifyModule,
    // DashboardModule,
    LoginModule,

    // Always after modules
    AppRoutingModule,
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
