import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { MaterializeModule} from 'angular2-materialize';

import { AppComponent } from './app.component';
import { InitialComponent } from './initial/initial.component';
import { ModalTermsComponent } from './modal-terms/modal-terms.component';
import { QuizComponent } from './quiz/quiz.component';
import { SucessComponent } from './sucess/sucess.component';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    InitialComponent,
    ModalTermsComponent,
    QuizComponent,
    SucessComponent
  ],
  imports: [
    MaterializeModule,
    BrowserModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
