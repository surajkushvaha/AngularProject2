import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ToolsComponent } from './tools/tools.component';
import { EducationComponent } from './education/education.component';
import { HealthComponent } from './health/health.component';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { PasswordComponent } from './password/password.component';
import { ThirukkuralComponent } from './thirukkural/thirukkural.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { Covid19Component } from './covid19/covid19.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ToolsComponent,
    EducationComponent,
    HealthComponent,
    QrcodeComponent,
    PasswordComponent,
    ThirukkuralComponent,
    AboutComponent,
    Covid19Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
