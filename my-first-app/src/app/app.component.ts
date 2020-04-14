import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CourseService } from './services/course.service';
import { CommonService } from './services/common.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  constructor(public courseService: CourseService, private commonService: CommonService ){
 
  }

  ngOnInit(){
    console.log('Initialization code will be...')
    // // this.http.get('http://localhost:8000/api/employee').toPromise()
    // this.courseService.fetchAllCourses()
    // .then((res: any) => {
    //   console.log(res);
    //   this.courses = res;
    // })
  }

  handleLoadedEvent(data: Array<string>){
    console.log('In parent app component...', data)
    this.alphabets = data
  }

  title :string = 'Welcome to Angular App';
  courses: Array<any> = []
  alphabets: Array<string> = []
}


// export class AppComponent {
//   title :string = 'Welcome to Angular App';
//   courses: Array<any> = [
//     {title: 'Angular', summary:'Framework from Angular'},
//     {title: 'React', summary:'Library from facebook'},
//     {title: 'Ember', summary:'Framework for UI'},
//     {title: 'Js', summary:'Most popular programming language'}
//   ]
// }