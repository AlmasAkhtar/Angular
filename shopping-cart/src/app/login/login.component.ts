import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  name: string;
  id: number;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;
  authenticationService: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router) {
    this.route = route;
  }

  ngOnInit() {
  }

  handleLogin() {
    //  this.authenticationService(this.id, this.name).subscribe((result) => {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      this.router.navigate(['/items']);
  /*  }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });*/
  }
}
