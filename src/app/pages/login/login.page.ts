import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "src/app/services/login.service";
import { ILogin } from "src/app/services/types";
import { NavController } from "@ionic/angular";
import { AuthService } from "src/app/services/auth.service";
import { TranslateLaService } from "src/app/services/translate-la.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  error: string;
  loginForm: FormGroup;
  private ContentLanguageKey = "content-language";
  constructor(
    private router: Router,
    private Login: LoginService,
    private navCtrl: NavController,
    private authSerivce: AuthService,
    private translateLaService: TranslateLaService
  ) {
    this.loginForm = new FormGroup({
      username: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  get username() {
    return this.loginForm.get("username");
  }

  get password() {
    return this.loginForm.get("password");
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
      {
        type: "incorrect",
        message: "Username of Password not valid !",
      },
    ],
  };

  ngOnInit() {
    var lang;
    if (localStorage.getItem(this.ContentLanguageKey) === undefined) {
      localStorage.setItem(this.ContentLanguageKey, "en");
      lang = "en";
    } else {
      lang = localStorage.getItem(this.ContentLanguageKey);
    }
    this.translateLaService.setLanguage(lang);
  }

  login() {
    this.Login.sigin(this.loginForm.value).subscribe(
      (res) => {
        localStorage.setItem("access-token", res["access_token"]);
        this.authSerivce.login(res["access_token"]);
        localStorage.setItem("username", res["username"]);

        this.navCtrl.navigateForward("home");
      },
      (error) => {
        this.loginForm.get("password").setErrors({ incorrect: true });
      }
    );
  }
}
