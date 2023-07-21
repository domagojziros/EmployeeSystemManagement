import { Component, OnInit } from '@angular/core';
import { Employee } from '../services/employee.model';
import { EmployeeService } from '../services/EmployeeService';

@Component({
  selector: 'app-employee-list',
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
      this.filteredEmployees = this.employees.filter(employee =>
        employee.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredEmployees = this.employees; // Reset to show all employees if searchQuery is empty
    }
  }

  // Method to delete an employee
  deleteEmployee(employee: Employee) {
    // Implement the logic to delete the employee from the database here
    // For now, let's just remove the employee from the filteredEmployees list
    this.filteredEmployees = this.filteredEmployees.filter(emp => emp.id !== employee.id);
    this.selectedEmployee = null; // Reset selectedEmployee to hide the employee details
  }
}
