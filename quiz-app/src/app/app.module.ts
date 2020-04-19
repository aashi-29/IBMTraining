import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewQuizComponent } from './components/view-quiz/view-quiz.component';
import { TakeQuizComponent } from './components/take-quiz/take-quiz.component';
import { ResultComponent } from './components/result/result.component';

const appRoutes: Routes = [
  { path: 'viewQuiz',component: ViewQuizComponent } ,
  { path: 'takeQuiz',component: TakeQuizComponent } ,
  { path: 'viewResult',component: ResultComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    ViewQuizComponent,
    TakeQuizComponent,
    ResultComponent,
    
  ],
  imports: [
    BrowserModule,
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
