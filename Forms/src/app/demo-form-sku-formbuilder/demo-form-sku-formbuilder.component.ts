import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'demo-form-sku-formbuilder',
  templateUrl: './demo-form-sku-formbuilder.component.html',
  styleUrls: ['./demo-form-sku-formbuilder.component.css']
})
export class DemoFormSkuFormbuilderComponent implements OnInit {
  myForm: FormGroup;

  constructor(public fb: FormBuilder) { 
    this.myForm = this.fb.group({

      'sku': ['', [Validators.required]],
      'email': ['', [Validators.required]]
    });

  }

  ngOnInit() {};


  onSubmit(){
    this.sku();
    this.email();
    console.log(this.sku());  
  }

  sku(){
    return this.myForm.get('sku').value;
  }
  email(){
    return this.myForm.get('email').value;
  }

}
