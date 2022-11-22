import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onContactUsClick(): void {
    this.router.navigate(['contact-us'])
  }
  onLogoClick(): void {
    this.router.navigate(['home'])
  }

  onProvidedServiceClick(): void {
    this.router.navigate(['services'])
  }


}
