import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  showMessage : boolean = false;
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      Name: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }
   
     onSubmit() {
      if(this.submitted = true) {
      this.showMessage = true;
      this.router.navigate(['/viewQuiz']);
      }
      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
            }
  
}
