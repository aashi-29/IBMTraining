import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-take-quiz',
  templateUrl: './take-quiz.component.html',
  styleUrls: ['./take-quiz.component.css']
})
export class TakeQuizComponent implements OnInit {
  currentQuestion: any;
  currentQuestionName: any;
  choices: Array<any> = [];
  quizName: string;
  questions: Array<any> = [];
  index: number = 0;
  length: any;
  isLastQuestion: boolean = false;
  isFirstQuestion: boolean = false;
  answer: Array<any> = [];
  count: number = 0;
  constructor(private route: ActivatedRoute, private quizService: CommonService,
    private router:Router) 
    { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
     
      console.log('***', params.get('name'));
      this.quizName = params.get("name");
      console.log(this.quizName);
    })
    this.quizService.fetchSingleQuizQuestion(this.quizName).subscribe((res: any) => {
      // console.log(res);
      this.questions = res.questions;
      this.length = this.questions.length;
      console.log("questions", this.questions);
      this.currentQuestion = this.questions[this.index];
      this.currentQuestionName= this.currentQuestion.text;
      console.log("current question", this.currentQuestion);
      this.choices = this.currentQuestion.choices;
      console.log("current choice", this.choices);
      console.log("length of question", this.length);
      this.isFirstQuestion = true;
      // this.answer=this.choices[0].isAnswer;
      // console.log("isAnswer",this.answer)
    })

  }

  nextQuestion() {
    if (this.index < this.length) {
      ++this.index;
      if(this.index>0){
        this.isFirstQuestion=false;
        // console.log("from next",this.isFirstQuestion);
      }
      
      console.log(this.index);
      this.currentQuestion = this.questions[this.index];
      this.currentQuestionName= this.currentQuestion.text;
      this.choices = this.currentQuestion.choices;
      this.isLastQuestion = false;
      //  console.log("last question",this.isLastQuestion);
      if (this.index == this.length - 1) {
        this.isLastQuestion = true;
        // console.log(this.isLastQuestion);
      }
    }

  }
  previousQuestion() {
    if (this.index > 0) {
      --this.index;
      if(this.index<this.length){
        this.isLastQuestion=false;
      }
      console.log(this.index);
      this.currentQuestion = this.questions[this.index];
      this.currentQuestionName= this.currentQuestion.text;

      this.choices = this.currentQuestion.choices;
      this.isFirstQuestion = false;
      console.log("first question", this.isFirstQuestion);
      if (this.index == 0) {
        this.isFirstQuestion = true;
        console.log("first question", this.isFirstQuestion);
      }
    }
  }
  calculate(isAnswer: boolean) {
    this.answer.push(isAnswer);
    console.log(this.answer);
  }
  finalResult() {
   
  }
  viewResult(){
    this.answer.forEach(i => {
      if (i == true) {
        this.count++;
      }
    });
    console.log("result", this.count);
    this.router.navigate(["viewResult",{count:this.count}]);

}
}

