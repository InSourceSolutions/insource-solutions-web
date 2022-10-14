import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onHomeClick(): void {
    this.router.navigate([''])
  }

  onAboutUsClick(): void {
    this.router.navigate(['about-us'])
  }

  onServicesClick(): void {
    this.router.navigate(['services'])
  }

  onContactUsClick(): void {
    this.router.navigate(['contact-us'])
  }

  onJobAbroadClick(): void {
    this.router.navigate(['job-abroad'])
  }

}
