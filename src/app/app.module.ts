import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { MaterializeModule} from 'angular2-materialize';

import { AppComponent } from './app.component';
import { InitialComponent } from './initial/initial.component';
import { QuizComponent } from './quiz/quiz.component';
import { SucessComponent } from './sucess/sucess.component';
import { routing } from './app.routing';
import { QuizModule } from './quiz/quiz.module';
import { QuizService } from './quiz/quiz.service';

@NgModule({
  declarations: [
    AppComponent,
    InitialComponent,
    SucessComponent
  ],
  imports: [
    MaterializeModule,
    BrowserModule,
    routing,
    ReactiveFormsModule,
    QuizModule,
  ],
  providers: [
    QuizService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
