import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEditEmployeeComponent } from './add-edit-employee/add-edit-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'add-employee', component: AddEditEmployeeComponent },
  { path: 'edit-employee', component: AddEditEmployeeComponent },
  { path: 'delete-employee', component: DeleteEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
