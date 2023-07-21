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
  selectedEmployee: Employee = { id: 0, name: '', email: '', department: '', jobTitle: '', salary: 0 };
  newEmployee: Employee = { id: 0, name: '', email: '', department: '', jobTitle: '', salary: 0 };
  editMode: boolean = false;
  showAddForm: boolean = false;
  showEditForm: boolean = false;
  


  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.refreshEmployeeList();
  }

  refreshEmployeeList() {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
      this.filteredEmployees = data;
    });
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
    this.showEditForm = false; 
    this.selectedEmployee = { id: 0, name: '', email: '', department: '', jobTitle: '', salary: 0 };
  }
  
  editEmployee(employee: Employee) {
    this.selectedEmployee = { ...employee };
    this.editMode = true;
    this.showEditForm = true;
  }

  saveEmployeeChanges() {
    if (this.editMode && this.selectedEmployee) {
      this.employeeService.updateEmployee(this.selectedEmployee).subscribe(() => {
        this.showEditForm = false; // Close the edit form
        this.editMode = false; // Reset editMode to false
        this.refreshEmployeeList();
      });
    }
  }

  cancelEdit() {
    this.showEditForm = false; // Close the edit form without saving changes
    this.editMode = false; // Reset editMode to false
  }

  saveNewEmployee() {
    this.employeeService.addEmployee(this.newEmployee).subscribe(() => {
      this.newEmployee = { id: 0, name: '', email: '', department: '', jobTitle: '', salary: 0 };
      this.showAddForm = false;

      // Refresh the employee list after adding the new employee
      this.refreshEmployeeList();
    });
  }

  cancelAddNewEmployee() {
    this.newEmployee = { id: 0, name: '', email: '', department: '', jobTitle: '', salary: 0 };
    this.showAddForm = false;
  }
}
