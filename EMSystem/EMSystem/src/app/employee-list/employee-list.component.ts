import { Component, OnInit } from '@angular/core';
import { Employee } from '../services/employee.model';
import { EmployeeService } from '../services/EmployeeService';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  searchQuery: string = '';
  selectedEmployee: Employee | null = null;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService.getEmployees().subscribe((data) => {
      console.log('Received employee data:');
      console.log(data);
      this.employees = data;
      this.filteredEmployees = data; // Initialize filteredEmployees with all employees initially
    });
  }

  onEmployeeClick(employee: Employee) {
    // Handle the click event here, e.g., show employee details, navigate to a new page, etc.
    console.log('Clicked on employee:', employee);
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

 
}
