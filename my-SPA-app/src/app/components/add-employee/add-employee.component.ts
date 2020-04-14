import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  
  Employees: Array<any> = []

  constructor(private employeeservice: EmployeeService) { }

  ngOnInit(): void {
    this.employeeservice.addEmployee()
    .subscribe((res:any)=> {
      console.log(res);
      this.Employees = res;
    })
  }
  

 

}
