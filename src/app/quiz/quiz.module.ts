import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { QuizComponent } from './quiz.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  declarations: [
    QuizComponent,
  ]
})
export class QuizModule { }
