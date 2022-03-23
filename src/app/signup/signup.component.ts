import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/services/user.services';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email1: any;
  validatemail: boolean = false;
  constructor(private fb: FormBuilder, private user: UserService) { }

  signuptable: any = {};

  ngOnInit(): void {
    this.getRecord()

  }

  Signupform = this.fb.group(
    {
      'Userid': new FormControl('', [Validators.required]),
      'firstname': new FormControl('', [Validators.required]),
      'lastname': new FormControl('', [Validators.required]),
      'mobileNo': new FormControl('', [Validators.required, Validators.maxLength(11)]),
      'gender': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required]),
      'dob': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required]),
      'confirmpassword': new FormControl('', [Validators.required]),
      'address': new FormControl('', [Validators.required]),





    });
  get Userid() {
    return this.Signupform.get('Userid');
  }
  get firstname() {
    return this.Signupform.get('firstname');
  }

  get lastname() {
    return this.Signupform.get('lastname');
  }

  get mobileNo() {
    return this.Signupform.get('mobilNo');
  }

  get email() {
    return this.Signupform.get('email');
  }

  get gender() {
    return this.Signupform.get('gender');
  }
  get password() {
    return this.Signupform.get('password');
  }
  get confirmpassword() {
    return this.Signupform.get('confirmpassword');
  }

  get dob() {
    return this.Signupform.get('dob');
  }
  get address() {
    return this.Signupform.get('address');
  }









  recordinfo: any;
  getRecord() {
    debugger;
    this.user.getuser().subscribe((data: any) => { this.recordinfo = data; console.table(this.recordinfo) });
  }
  result: any;
  setRecord() {
    let exp = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
    let emailVal = this.email1;
    if (!emailVal.match(exp)) {
      this.validatemail = true;
    } else {
      this.validatemail = false;
    }
    debugger;
    console.log(this.Signupform.value);

    if (this.validatemail == false) {
      this.user.insertuser(this.Signupform.value).subscribe((data: any) => { this.result = data, console.log(this.result) });
    }
  }
  //for validation
  doregister(rform: NgForm) {
    debugger;
    console.log(this.signuptable.fullname);

    console.log(rform.value);




  }

}