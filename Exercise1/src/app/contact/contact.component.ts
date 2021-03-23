import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    carQuestion: new FormControl('', Validators.required)
  },)
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.contact.valid){
    let userSubmission = this.contact.value;
    console.table(userSubmission);
    }
  }

}
