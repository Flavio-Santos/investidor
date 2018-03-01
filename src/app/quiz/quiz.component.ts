import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MaterializeDirective } from 'angular2-materialize';

import { Quiz } from './quiz'
import { QuizService } from './quiz.service'

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  isDisabled = true;
  quiz = new Quiz;
  /*quizService: QuizService;*/
  questions: Object[]=[];
  selectInputs: Object[]=[];
  arrPer:String[]=[];
  formulario: FormGroup;

  sapo: any;
  constructor( private http: Http, private quizService: QuizService, private formBuilder: FormBuilder) {
    
   }
   
  ngOnInit() {
    this.quizService
    .getQuestions1a3()
    .subscribe(
      data=>{
        this.questions = data.perguntas;
        console.log(this.questions.length)
      },
      err => {
        console.log(err);
      }
    );

    this.quizService
    .getQuestion4()
    .subscribe(
      data=>{
        this.selectInputs = data;
      },
      err => {
        console.log(err);
      }
    );
    
    
    
    this.formulario = this.formBuilder.group({
      q1:[],
      q2:[],
      q3:[],
      s0:[],
      s1:[],
      s2:[],
      s3:[],
    })
  }
  
  onSubmit(){
    //this.quiz = this.formulario.value;
    console.log(this.quiz);
    
    /*this.http.post('', JSON.stringify(this.formulario.value))
    .map(res=> res)
    .subscribe(dados => console.log(dados));*/
  }
}
