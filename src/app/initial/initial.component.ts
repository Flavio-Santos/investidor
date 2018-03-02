import { Component, OnInit } from '@angular/core';
import { CheckboxRequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.css']
})
export class InitialComponent implements OnInit {

  valid: string= "disabled";

  constructor() { }

  ngOnInit() {

    localStorage.clear();
  }

  check(){
    if(this.valid==""){
      this.valid = "disabled"
    }else{
      this.valid = ""
    }
  }
}
