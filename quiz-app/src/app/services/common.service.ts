import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl='http://localhost:8085/api/quiz/';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  fetchAllQuiz(){
    return this.http.get(baseUrl);
  }
  fetchSingleQuizQuestion(quizName:string){
    return this.http.get(baseUrl+quizName);
  }
}