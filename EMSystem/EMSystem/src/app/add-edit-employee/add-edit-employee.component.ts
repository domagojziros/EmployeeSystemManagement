import { Component, OnInit } from '@angular/core';
import { Employee } from '../services/employee.model';
import { EmployeeService } from '../services/EmployeeService';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.css']
})
export class AddEditEmployeeComponent implements OnInit {
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  searchQuery: string = '';
  selectedEmployee: Employee | null = null;
  selectedEmployeeCopy: Employee | null = null; // Copy of selectedEmployee for editing
  editMode: boolean = false; // Edit mode flag
  showAddForm: boolean = false; // Add form display flag

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
    console.log('Clicked on employee:', employee);
    this.selectedEmployee = employee;
  }

  onSearch() {
    if (this.searchQuery) {
      this.filteredEmployees = this.employees.filter((employee) =>
        employee.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredEmployees = this.employees;
    }
  }

  addEmployee() {
    this.showAddForm = true;
    this.selectedEmployee = null; // Initialize selectedEmployee as null for adding a new employee
    this.editMode = false; // Set editMode to false, as it's a new employee being added
  }
  

  editEmployee(employee: Employee) {
    this.selectedEmployee = { ...employee };
    this.selectedEmployeeCopy = { ...employee };
    this.editMode = true;
  }

  saveEmployeeChanges() {
    if (this.editMode && this.selectedEmployee) {
      // Check if editMode is true and selectedEmployee is not null
      // Implement the logic to save the changes to the employee here
      // For now, let's just deselect the employee after saving changes
      this.selectedEmployee = null;
      this.editMode = false;
    }
  }

  cancelEdit() {
    if (this.selectedEmployeeCopy) {
      this.selectedEmployee = { ...this.selectedEmployeeCopy };
      this.selectedEmployeeCopy = null;
    }
    this.editMode = false;
  }

  addNewEmployee(employee: Employee) {
    // Implement the logic to add the new employee to the database here
    // For now, let's just add the employee to the employees list
    this.employees.push(employee);

    // Clear the selectedEmployee and showAddForm flags after adding
    this.selectedEmployee = null;
    this.showAddForm = false;
  }

  cancelAddNewEmployee() {
    this.selectedEmployee = null;
    this.showAddForm = false;
  }
}
