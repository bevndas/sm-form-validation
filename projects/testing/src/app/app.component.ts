import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit{
  title = 'testing';
  testForm: FormGroup;
  customError= {
    customField:{
      invalid: 'There number should have 8 digits'
    }
  };

  maxLengthOfEight = (
    control: AbstractControl
  ): { [key: string]: boolean } | null =>  {
    const value = control.value;
    if (!value) { return null; }
    if (value.length > 8) {
      return {
        invalid: true
      };
    }
    return null;
  };

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.testForm = this.formBuilder.group({
      testUser: ['', Validators.required],
      password: ['', Validators.required],
      customField: ['', this.maxLengthOfEight],
      minValid: ['', Validators.minLength(5)]
    })
  }

  onValidation() {
    console.log('This is form state', this.testForm);
  }



}
