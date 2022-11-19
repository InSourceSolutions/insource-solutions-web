import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contactUsValidation = new FormGroup({
  })
  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.contactUsValidation = this.formBuilder.group({
      firstName:['',[Validators.required, Validators.minLength(6), Validators.maxLength(20),Validators.pattern('[a-zA-Z]+')]],
      lastName:['',[Validators.required, Validators.minLength(6), Validators.maxLength(20),Validators.pattern('[a-zA-Z]+')]],

    });
  }
  onSubmitClick(): void {

  }
}
