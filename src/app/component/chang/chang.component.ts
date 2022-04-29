import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chang',
  templateUrl: './chang.component.html',
  styleUrls: ['./chang.component.css']
})
export class ChangComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  submit(){
    this.router.navigateByUrl('registration')
  }
}
