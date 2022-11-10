import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css'],
})
export class DeleteEmployeeComponent implements OnInit {
  employeeDetails: Employee = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: '',
  };

  constructor(
    private employeeService: EmployeesService,
    private route: Router,
    private routeActive: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routeActive.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          this.employeeService.getEmployee(id).subscribe({
            next: (response) => {
              this.employeeDetails = response;
            },
          });
        }
      },
    });
  }

  deleteEmployee() {
    this.employeeService.deleteEmployee(this.employeeDetails).subscribe({
      next: (value) => {
        this.route.navigate(['employees']);
      },
    });
  }
}
