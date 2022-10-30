import { Component, OnInit } from '@angular/core';
import { LoginuserService } from 'src/app/services/loginuser.service';
import { User } from 'src/app/services/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User =new User();
  constructor(private loginuserservice:LoginUserService{}

  ngOnInit(): void {
  }

  userLogin(){
    console.log(this.user);
    this.loginuserservice.loginuser((this.user).subscribe(data =>{
      window.location.href ="/porfolio"
    }, error=>alert("POr favor ingrese un usuario y contraseña correcto"));
  }
}
