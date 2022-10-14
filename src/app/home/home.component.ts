import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
$index: any;
selected_image: any;
selected_image_idx: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  images = ['../../assets/Images/logos/logo.png'];

  onHomeClick(): void {
    this.router.navigate(['home'])
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
