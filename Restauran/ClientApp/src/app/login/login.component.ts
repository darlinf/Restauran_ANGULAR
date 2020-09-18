import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public regitrarAcceder: boolean = true;

  public rolUserAmin: boolean = false;

  public rol(value: string){
    if(value == "Administrador")
      this.rolUserAmin = true;
    if(value == "Cliente")
      this.rolUserAmin = false;
  }

}
