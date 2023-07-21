import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../services/employee.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {
  @Input() employee: Employee | null = null; // Input property to receive the selected employee
  @Output() saveEmployee = new EventEmitter<void>(); // Output event when saving employee changes
  @Output() cancelEmployee = new EventEmitter<void>(); // Output event when canceling employee changes
  @Output() saveNewEmployee = new EventEmitter<Employee>(); // Output event when adding a new employee
  @Output() cancelNewEmployee = new EventEmitter<void>(); // Output event when canceling adding a new employee

  // Function to save changes to an employee
  onSaveEmployee() {
    this.saveEmployee.emit();
  }

  // Function to cancel editing an employee
  onCancelEmployee() {
    this.cancelEmployee.emit();
  }

  // Function to save changes to a new employee
  onSaveNewEmployee() {
    if (this.employee) {
      this.saveNewEmployee.emit(this.employee);
    }
  }

  // Function to cancel adding a new employee
  onCancelNewEmployee() {
    this.cancelNewEmployee.emit();
  }
}
