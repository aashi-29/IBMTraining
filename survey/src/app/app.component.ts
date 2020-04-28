import { Component ,OnInit} from '@angular/core';
import {Chart} from 'chart.js';
import{ SocketService } from './socket.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Coronavirus Updates';
  chart;
  constructor(private srv:SocketService){

  }
  ngOnInit(){

    this.srv.listen('dataupdate').subscribe((res:any)=>{
      console.log(res);
      this.chart.data.datasets[0].data=res;
      this.chart.update();
    });
    this.chart=new Chart('canvas',{
      
      type:'bar',
      options:{
        responsive:true,
        title:{
          display:true,
          text:'Realtime Charts'
        },
      },
      data:{
        labels:['Feb','Mid-Feb','March','Mid-March','April','Mid-April','Expected-May'],
        datasets:[
          {
            type:'bar',
            label:'Test Chart',
            // data:[10,3,6,11,38,5,6,17],

            backgroundColor:'#3F3FBF',
            fill:false
          }
        ]
      }
    });
  }
}
//    // ADD CHART OPTIONS. 
//    chartOptions = {
//     responsive: true    // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
//   }

//   labels =  ['Uttarakhand', 'delhi', 'bihar', 'UP', 'Maharashtra', 'Gujarat', 'Punjab', 'Karnataka', 'Telangana', 'Kerala', 'Rajasthan', 'Jammu&Kashmir'];

//   // STATIC DATA FOR THE CHART IN JSON FORMAT.
//   chartData = [
//     {
//       label: 'recovery rate',
//       data: [21, 56, 4, 31, 45, 15, 57, 61, 9, 17, 24, 59] 
//     },
//     { 
//       label: 'current cases',
//       data: [47, 9, 28, 54, 77, 51, 24]
//     },
//     {
//       label: 'death rate',
//       data: [21, 56, 4, 31, 45, 15, 57, 61, 9, 17, 24, 59] 
//     }
    
//   ];

//   // CHART COLOR.
//   colors = [
//     { // 1st Year.
//       backgroundColor: 'rgb(103, 243, 184)'
//     },
//     { // 2nd Year.
//       backgroundColor: 'rgba(rgb(118, 157, 98,0.8)'
//     }
//   ]
  
//   // CHART CLICK EVENT.
//   onChartClick(event) {
//     console.log(event);
//   }

  
// }
