import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeachersListComponent } from './components/teachers-list/teachers-list.component';
import { AddTeachersComponent} from './components/add-teachers/add-teachers.component';

const routes: Routes = [
  { path: '', redirectTo: 'teachers', pathMatch: 'full' },
  { path: 'teachers', component: TeachersListComponent },
  { path: 'add', component: AddTeachersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
