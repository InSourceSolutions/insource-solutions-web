import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
$index: any;
selected_image: any;
selected_image_idx: any;

  constructor() { }

  ngOnInit(): void {
  }
  images = ['../../assets/Images/logos/logo.png'];
}
