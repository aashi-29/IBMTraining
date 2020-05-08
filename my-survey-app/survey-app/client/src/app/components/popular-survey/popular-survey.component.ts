import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import { Router, ActivatedRoute } from '@angular/router';
import { Choice } from 'src/app/models/choice';
import { SurveyService } from 'src/app/services/survey.service';
import { Survey } from 'src/app/models/survey';
@Component({
  selector: 'app-popular-survey',
  templateUrl: './popular-survey.component.html',
  styleUrls: ['./popular-survey.component.css']
})
export class PopularSurveyComponent implements OnInit {
  chart
  surveys:Array<Survey>=[]
  surveyName: string;
  choices: Array<any>=[]
  finaln:Array<any>=[]
  finalc:Array<any>=[]
  constructor(private surveyService : SurveyService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void 
  {
    this.surveyService.fetchAllSurveys()
    .subscribe((res:Array<Survey>)=> {
    console.log("pls see this"+res);
    this.surveys = res;
    for(let survey of this.surveys)
    {
      this.surveyName=survey.text;
      console.log("ssssssssssssssssssssssssss"+this.surveyName)
      this.finaln.push(this.surveyName)
      this.surveyService.fetchAllOptions(this.surveyName).subscribe((res: any) => {
        this.choices = res.choices;
        console.log("checking "+this.choices);
      // this.choices=survey.choices[0]
        var c=0;
        for(let choice of this.choices)
        {   
          c=c+choice.count;
          console.log("Count of each option of "+this.surveyName+choice.count)  
        }
        
        this.finalc.push(c)
        // console.log("see tis::"+this.finaln)
      
        })
    }
    this.chart=new Chart('canvas',
    {
      type:'bar',
      options:
      {
        responsive:true,
        scales:
        {
          yAxes:[{
                  display:true,
                  ticks:{
                          suggestedMin:0,
                          suggestedMax:10,
                          beginAtZero:true,
                          steps:10,
                          stepValue:5
                        }
                }]
        },
        title:
        {
          display:true,
          text:'Realtime Charts of '+this.surveyName
        },
      },
      data:
      {
        labels:this.finaln,
        datasets:[
          {
            type:'bar',
            label:'Test Chart',
            data:this.finalc,
            backgroundColor:'#3F3FBF',
            fill:false
          }
        ]
      }
    });
  })
}
  }
  


