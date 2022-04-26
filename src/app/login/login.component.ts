import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  login = new FormGroup({
    email : new FormControl(''),
    pass:new FormControl('')

  }
  )
  ngOnInit(): void {

  }

  loginUser(){
    console.log(this.login.value)

    if(this.login.value.email === 'admin' && this.login.value.pass === 'admin'){
    this.router.navigate(['/dash']);

    } else{
      this.router.navigate(['/']);
    }

  }
}
