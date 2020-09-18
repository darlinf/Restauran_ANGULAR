import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;

  public isLogin: boolean = false; 
  public isUserOrAdmin: boolean = true;

  public login: string = this.isLogin? "logout" : "Login";

  public userOrAdmin: string  = this.isUserOrAdmin? "Admin" : "Orden";
  toggleUserOrAdmin(){
    if(this.isLogin){
      
    }
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

}
