import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import { Router, ActivatedRoute } from '@angular/router';
import { Choice } from 'src/app/models/choice';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  surveyName:string;
  choices: Array<Choice>=[]
  chart;
  dataList:Array<any>=[];
  labelList:Array<any>=[]
  constructor(private surveyService : SurveyService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      
      console.log('***', params.get('text'));
      this.surveyName=params.get('text');

      this.surveyService.fetchAllOptions(this.surveyName).subscribe((res: any) => {
      
        this.choices = res.choices;
        var i=1
        console.log("checking "+this.choices);

        for(let choice of this.choices){
          this.labelList.push(choice.text);
          console.log("Option: "+this.labelList[i-1])
          this.dataList.push(choice.count);
          console.log("Count of each option: "+choice.count)  
          i=i+1;
        }
        })

   
    })


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
        labels:this.labelList,
        datasets:[
          {
            type:'bar',
            label:'Test Chart',
            data:this.dataList,
            backgroundColor:'#3F3FBF',
            fill:false
          }
        ]
      }
    });
  }

}
