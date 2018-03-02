import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import 'rxjs/add/operator/map'

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { InitialComponent } from './initial/initial.component';
import { QuizComponent } from './quiz/quiz.component';
import { SuccessComponent } from './success/success.component';
import { routing } from './app.routing';
import { QuizModule } from './quiz/quiz.module';
import { QuizService } from './quiz/quiz.service';

@NgModule({
  declarations: [
    AppComponent,
    InitialComponent,
    SuccessComponent,
  ],
  imports: [
    MaterializeModule,
    BrowserModule,
    routing,
    ReactiveFormsModule,
    QuizModule,
    FormsModule
  ],
  providers: [
    QuizService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
