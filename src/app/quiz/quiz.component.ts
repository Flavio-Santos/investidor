import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MaterializeDirective } from 'angular2-materialize';

import Quiz from './quiz'
import QuizSelect from './quiz.select'
import { QuizService } from './quiz.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  isDisabled = true;
  quizzes: Quiz[]
  quizSelect: QuizSelect[]

  ngValues:any;
  selectInputs: Object[] = [];
  arrPer: String[] = [];
  formulario: FormGroup;

  constructor(
    private http: Http,
    private quizService: QuizService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {

  }

  ngOnInit() {
    const { quizService, formulario, quizzes } = this
    quizService
      .getQuestions()
        .subscribe(
          data => {
            this.quizzes = data.perguntas
            this.quizSelect = data.select

            console.log(this.quizzes)
          },
          err => {
            console.log(err);
          }
        )

    this.formulario = this.formBuilder.group({
      q0: [null, Validators.required],
      q1: [null, Validators.required],
      q2: [null, Validators.required],
      s0: [null, ],
      s1: [null, ],
      s2: [null, ],
      s3: [null, ],
    })
  }

  onSubmit() {
    if (this.formulario.valid) {
      console.log(this.quizzes);
      localStorage.setItem('db', JSON.stringify(this.quizzes))
      this.router.navigate(['/sucess']);

    } else {
      console.log("")
      Object.keys(this.formulario.controls).map(campo => {
        console.log(campo)
        const controle = this.formulario.get(campo);
        controle;
      });
    }

    //redirecionamento para sucess

    //console.log(this.formulario);
    //this.quiz = this.formulario.value;
    //console.log(this.quiz);

    /*this.http.post('', JSON.stringify(this.formulario.value))
    .map(res=> res)
    .subscribe(dados => console.log(dados));*/
  }
}
