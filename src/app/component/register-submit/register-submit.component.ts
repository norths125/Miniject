import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-submit',
  templateUrl: './register-submit.component.html',
  styleUrls: ['./register-submit.component.css']
})
export class RegisterSubmitComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  back(){
    this.router.navigateByUrl('register')
  }
  submit(){
    this.router.navigateByUrl('registration')
  }
}
