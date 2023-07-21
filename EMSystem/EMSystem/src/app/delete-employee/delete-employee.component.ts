import { Component, OnInit } from '@angular/core';
import { Employee } from '../services/employee.model';
import { EmployeeService } from '../services/EmployeeService';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  searchQuery: string = '';
  selectedEmployee: Employee | null = null;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
      this.filteredEmployees = data; // Initialize filteredEmployees with all employees initially
    });
  }

  onEmployeeClick(employee: Employee) {
    // Handle the click event here, e.g., show employee details, navigate to a new page, etc.
    this.selectedEmployee = employee;
  }

  // Method to filter employees based on search query
  onSearch() {
    if (this.searchQuery) {
      this.filteredEmployees = this.employees.filter((employee) =>
        employee.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredEmployees = this.employees; // Reset to show all employees if searchQuery is empty
    }
  }

  // Method to delete an employee
  deleteEmployee(employee: Employee) {
    // Show a confirmation dialog before deleting the employee
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(employee.id).subscribe(
        () => {
          // Employee deleted successfully from the backend, now update the frontend
          this.filteredEmployees = this.filteredEmployees.filter((emp) => emp.id !== employee.id);
          this.selectedEmployee = null; // Reset selectedEmployee to hide the employee details
        },
        (error) => {
          console.error('Error deleting employee:', error);
          // Handle the error appropriately (e.g., show a notification)
        }
      );
    }
  }
}
