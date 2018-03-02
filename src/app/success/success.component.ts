import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Quiz from '../quiz/quiz';


@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  quiz: Quiz;
  info: any;
  answers: any[] = [];
  constructor(private route: ActivatedRoute) { }


  ngOnInit() {
    this.info = JSON.parse(localStorage.getItem('db'));
  }

}
