import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

import { QuizService } from './quiz.service'

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  isDisabled = false;

  /*quizService: QuizService;*/
  questions: String[] =[];
  formulario: FormGroup;

  constructor( private formBuilder: FormBuilder, private http: Http, private quizService: QuizService) {
    
   }

  ngOnInit() {
    this.questions = this.quizService.getQuestions();
    console.log(this.questions);

    this.formulario = this.formBuilder.group({
      conduct: [],
      time: [],
      percent: []
      
    })
  }
  onSubmit(){
    console.log(this.formulario.value);
    
    /*this.http.post('', JSON.stringify(this.formulario.value))
    .map(res=> res)
    .subscribe(dados => console.log(dados));*/
  }
}
