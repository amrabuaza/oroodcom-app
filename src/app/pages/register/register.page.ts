import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from "@angular/forms";
import { RegisterService } from "src/app/services/register.service";
import { IErrorMessage, IErrorResponse } from "src/app/services/types";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  error: string;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private authSerivce: AuthService
  ) {
    this.registerForm = new FormGroup({
      username: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern(
          "[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})"
        ),
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  get username() {
    return this.registerForm.get("username");
  }

  get email() {
    return this.registerForm.get("email");
  }

  get password() {
    return this.registerForm.get("password");
  }

  public errorMessages = {
    username: [
      {
        type: "required",
        message: "Username is required !",
      },
      {
        type: "minlength",
        message: "Username should contain at least 4 characters !",
      },
      {
        type: "taken",
        message: "This username has already been taken.",
      },
    ],
    password: [
      {
        type: "required",
        message: "Password is required !",
      },
      {
        type: "minlength",
        message: "Password should contain at least 6 characters !",
      },
    ],
    email: [
      {
        type: "required",
        message: "Email is required !",
      },
      {
        type: "pattern",
        message: "Email is not a valid email address. !",
      },
      {
        type: "taken",
        message: "This email has already been taken.",
      },
    ],
  };

  ngOnInit() {}

  register() {
    this.registerService.signup(this.registerForm.value).subscribe(
      (res) => {
        localStorage.setItem("access-token", res["access_token"]);
        localStorage.setItem("username", res["username"]);
        this.authSerivce.login(res["access_token"]);
        this.router.navigateByUrl("/home");
      },
      (error: IErrorResponse) => {
        const errorMessages = error.error["messages"];
        errorMessages.forEach((element: IErrorMessage) => {
          if (element.field === "username") {
            this.registerForm.get("username").setErrors({ taken: true });
          }
          if (element.field === "email") {
            this.registerForm.get("email").setErrors({ taken: true });
          }
        });
      }
    );
  }
}
