import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private router: Router;
  constructor(router: Router) {
    this.router = router;
  }


  ngOnInit(): void {
  }

  logout() {
    this.router.navigate(['login']);
  }
}
