import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { ProfileComponent } from './pages/profile/profile.component';
import { SmsModalComponent } from './pages/sms-modal/sms-modal.component';
import { EmailModalComponent } from './pages/email-modal/email-modal.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    MatSelectModule,
    MatButtonModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    EmployeeListComponent,
    ProfileComponent,
    SmsModalComponent,
    EmailModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
