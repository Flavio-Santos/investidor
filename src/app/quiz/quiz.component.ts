import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MaterializeDirective } from 'angular2-materialize';

import Quiz from './quiz'
import QuizSelect from './quiz.select'
import QuizDTO from './quizDTO';
import SelectDTO from './selectDTO';
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

  ngValues: any;
  selectInputs: Object[] = [];
  arrPer: String[] = [];
  formulario: FormGroup;
  quizDto: QuizDTO[]
  selectDto: SelectDTO[];
  constructor(
    private http: Http,
    private quizService: QuizService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {

  }

  ngOnInit() {
    let { quizService, formulario, quizzes, quizSelect } = this
    quizService
      .getQuestions()
      .subscribe(
      data => {
        this.quizzes = data.perguntas
        this.quizSelect = data.select
        this.quizDto = this.quizzes.map((quiz) => {
          return new QuizDTO(quiz.id, quiz.titulo, quiz.opcoes);
        })
        this.selectDto = this.quizSelect.map((select) => {
          return new SelectDTO(select.id, select.titulo, select.opcoes);
        })
      },
      err => {
        console.log(err);
      }
      )

    this.formulario = this.formBuilder.group({
      q0: [null, Validators.required],
      q1: [null, Validators.required],
      q2: [null, Validators.required],
      s0: [null, Validators.required],
      s1: [null, Validators.required],
      s2: [null, Validators.required],
      s3: [null, Validators.required],
    })
  }

  onSubmit() {
    if (this.formulario.valid) {
      let transfer = {
        quizzes: this.quizDto,
        selects: this.selectDto
      }
      localStorage.setItem('db', JSON.stringify(transfer))
      this.router.navigate(['/success']);

    } else {
      console.log("")
      Object.keys(this.formulario.controls).map(campo => {
        console.log(campo)
        const controle = this.formulario.get(campo);
        controle;
      });
    }

  }
}
