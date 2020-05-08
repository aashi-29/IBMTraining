import { Component, OnInit, ɵConsole } from '@angular/core';



import { SurveyService } from 'src/app/services/survey.service';
import { Question } from 'src/app/models/question';
import { Survey} from 'src/app/models/survey';
import { Choice} from 'src/app/models/choice';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-take-survey',
  templateUrl: './take-survey.component.html',
  styleUrls: ['./take-survey.component.css']
})
export class TakeSurveyComponent implements OnInit {

  surveys: Array<Survey>=[]
  choices: Array<any>=[]
  surveyName : string;
  count: number;
  question: string;
  ch:any;
  t:Array<any>=[]
  id:any
  showResult:boolean=false;
  obj:any
  

  constructor(private surveyService : SurveyService, private router: Router, private route: ActivatedRoute) { }

  // ngOnInit(): void {
  //   this.surveyService.fetchAllSurveys()
  //   .subscribe((res:Array<Survey>)=> {
  //     console.log(res);
  //     this.surveys = res;
      
  //   })
    
  // }

  ngOnInit():void {
    this.route.paramMap.subscribe(params => {
      
      console.log('***', params.get('text'));
      this.surveyName = params.get("text");
      console.log(this.surveyName);
    })
    this.surveyService.fetchAllOptions(this.surveyName).subscribe((res: any) => {
      
      console.log(res)
      this.question = res.text;
      console.log(this.question);
      this.choices = res.choice;
      console.log(this.choices);
      this.id=res._id;
      console.log("checking "+this.question);
      })

}

radioChangeHandler(event:any){
  this.ch=event.target.value;
  console.log(this.ch);
}

 incrementCount(){ 

  console.log("inside increment method");
  //  var c=document.getElementsByName('answer');
    console.log("see choice:"+this.ch);
    // for(var i=0;i<this.choices.length;++i){
    //   if(this.ch==this.choices[i].text)
    // }
    for(let choice of this.choices){
      if(this.ch==choice.text){
        choice.count=choice.count+1;
        console.log("mmmmmmmmmmm:"+choice.count)
      }
    }
   this.obj={
     text:this.question,
     choices:this.choices
   }
   for(let choice of this.choices){
     console.log("Final choice count:"+choice.count)
   }
   this.surveyService.updateSurvey(this.obj)
   .subscribe((res)=>{
     if(res!=null){
     console.log("update"+res);
     alert("survey has been submitted");
     this.showResult=true;
     }
   })


 }


 showChart(){
    
  console.log("ggggg"+this.choices)
  this.router.navigate(["chart",{text:this.obj.text}]);
}

}
