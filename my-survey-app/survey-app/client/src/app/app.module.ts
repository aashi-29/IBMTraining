import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ViewSurveysComponent } from './components/view-surveys/view-surveys.component';
import { TakeSurveyComponent } from './components/take-survey/take-survey.component';
import { FormComponent } from './components/form/form.component';
import { ChartComponent } from './components/chart/chart.component';
import { PopularSurveyComponent } from './components/popular-survey/popular-survey.component';



const appRoutes: Routes = [
 
  { path: 'view',      component: ViewSurveysComponent },
  { path: 'add',  component: FormComponent},
  { path: 'takeSurvey',component: TakeSurveyComponent },
  { path: 'chart',component:ChartComponent},
  { path: 'popularSurvey', component:PopularSurveyComponent}
  
];



@NgModule({
  declarations: [
    AppComponent,
    ViewSurveysComponent,
    TakeSurveyComponent,
    FormComponent,
    ChartComponent,
    PopularSurveyComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
   providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }