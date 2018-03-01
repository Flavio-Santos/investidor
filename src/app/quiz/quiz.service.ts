import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class QuizService{
    
    questions: Object ;

    constructor(private http: Http){
    }
    getQuestions1a3(){
        
        return this
        .http
        .get('https://crud-api-angular2.herokuapp.com/perguntas1a3')
        .map(res => res.json())
        
    }
    getQuestion4(){
        
        return this
        .http
        .get('https://crud-api-angular2.herokuapp.com/pergunta4')
        .map(res => res.json())
        
    }
}