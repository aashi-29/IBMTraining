import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-view-quiz',
  templateUrl: './view-quiz.component.html',
  styleUrls: ['./view-quiz.component.css']
})
export class ViewQuizComponent implements OnInit {

  quiz:Array<any>=[];
  constructor(private quizService:CommonService,private router:Router) { }

  ngOnInit(): void {
    this.quizService.fetchAllQuiz().subscribe((res:any)=>{
      console.log(res);
      this.quiz=res;
    })
  }

  takeQuiz(questions:any){
    console.log("in take quiz",questions);
    this.router.navigate(["takeQuiz",{name:questions.name}]);
  }

}