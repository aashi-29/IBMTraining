import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input('caption') title: string = ""
  @Input('summary') summary: string = ""
  @Input('id') id: number = null;
  constructor(public http: HttpClient) { }

  ngOnInit(): void {
  
  }
  deleteCourse(id: number){
    console.log('Delete course from here', id)
    this.http.delete('http://localhost:8000/api/employee/' + id).toPromise()
    .then(res=>console.log(res))
  }

}
