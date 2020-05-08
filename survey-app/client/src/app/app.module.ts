import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ViewSurveysComponent } from './components/view-surveys/view-surveys.component';
import { TakeSurveyComponent } from './components/take-survey/take-survey.component';
import { FormComponent } from './components/form/form.component';
import { SubmitComponent } from './components/submit/submit.component';
import { ChartComponent } from './components/chart/chart.component';



const appRoutes: Routes = [
 
  { path: 'view',      component: ViewSurveysComponent },
  { path: 'add',  component: FormComponent},
  { path: 'takeSurvey',component: TakeSurveyComponent },
  { path: 'submit' , component: SubmitComponent },
  { path: 'chart' , component: ChartComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    ViewSurveysComponent,
    TakeSurveyComponent,
    FormComponent,
    SubmitComponent,
    ChartComponent
    
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