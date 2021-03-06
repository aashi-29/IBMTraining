import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';


const baseUrl = 'http://localhost:8000/api/employee/'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  fetchAllEmployees(){
    return this.http.get(baseUrl);
  }

  // addEmployee(name: string, salary: number){
  //   return this.http.post(baseUrl, 
  //     {name: name, salary: salary},{observe : 'response'})

  // }

  addEmployee(employee: Employee){
    console.log('In service : ', employee)
    return this.http.post(baseUrl, 
      employee,{observe : 'response'})

  }

  updateEmployee(employee: Employee){
    console.log('In service : ', employee)
    return this.http.put(baseUrl, 
      employee,{observe : 'response'})

  }

  deleteEmployee(id: number){
    return this.http.delete(baseUrl + id, {observe : 'response'})

  }
  // addEmployee()
  // { return this.http.post(baseUrl, 
  //   {
  //    "name": "Aashi",
  //    "salary": 9123100.00
  //    } 
  // );
  // }

}