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

  //this.info = localStorage.getItem(JSON.parse('db'));
  ngOnInit() {
    this.info = JSON.parse(localStorage.getItem('db'));
    

    console.log(this.info);
    // this.answers = Object.keys(this.info).map(infoKey => {
    //   let con = {};
    //   con[infoKey] = this.info[infoKey]

    //   return con;
    // });
    // //console.log(Object.keys(this.answers));
    // this.answers.map((answer, index) => {
    //   //console.log(Object.keys(this.info)[index]);
    //   //console.log(answer[Object.keys(this.info)[index]]);
    //   if (Object.keys(this.info)[index].includes("q")) {
    //     //console.log("foi");
    //     //console.log(answer);
    //   }
    // })
    // let aw = this.answers.splice()
    // console.log(this.answers.toString());
    // console.log(this.quiz);
    //console.log(this.answers);
    // console.log(Object.keys(this.info));


    // this.info = this.route.queryParamMap.map(route=>route.get('1'));
    // console.log(this.info);
  }

}
