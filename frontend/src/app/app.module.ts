import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeachersListComponent } from './components/teachers-list/teachers-list.component';
import { AddTeachersComponent } from './components/add-teachers/add-teachers.component';

@NgModule({
  declarations: [
    AppComponent,
    TeachersListComponent,
    AddTeachersComponent
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
