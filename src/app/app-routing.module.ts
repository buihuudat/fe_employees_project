import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './components/employees/delete-employee/delete-employee.component';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeesListComponent,
  },
  {
    path: 'employees',
    component: EmployeesListComponent,
  },
  {
    path: 'employees/add',
    component: AddEmployeeComponent,
  },
  {
    path: 'employees/edit/:id',
    component: EditEmployeeComponent,
  },
  {
    path: 'employees/delete/:id',
    component: DeleteEmployeeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
