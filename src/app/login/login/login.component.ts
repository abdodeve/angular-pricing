import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log("app-login");
    document.body.classList.add("bg-dark");
  }

  ngOnDestroy() {
    document.body.classList.remove("bg-dark");
  }

}
