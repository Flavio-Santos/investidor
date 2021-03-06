import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import Quiz from './quiz'

@Injectable()
export class QuizService{
    
    questions: Object
    resource: string

    constructor(private http: Http){
        this.resource = 'https://crud-api-angular2.herokuapp.com/quiz'
    }
    
    getQuestions(){
        const { http, resource } = this
        const data = http
            .get(resource)
            .map(res => res.json())
        return data
    }
}