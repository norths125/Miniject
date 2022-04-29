import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-drop',
  templateUrl: './add-drop.component.html',
  styleUrls: ['./add-drop.component.css']
})
export class AddDropComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  submit(){
    this.router.navigateByUrl('registration')
  }

}
