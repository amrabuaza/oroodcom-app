import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "src/app/services/login.service";
import { ILogin } from "src/app/services/types";
import { NavController } from "@ionic/angular";
import { AuthService } from "src/app/services/auth.service";
import { TranslateLaService } from "src/app/services/translate-la.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  error: string;
  private ContentLanguageKey = "content-language";
  constructor(
    private router: Router,
    private Login: LoginService,
    private navCtrl: NavController,
    private authSerivce: AuthService,
    private translateLaService: TranslateLaService
  ) {}

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

  login(form) {
    this.Login.sigin(form.value).subscribe(
      (res) => {
        localStorage.setItem("access-token", res["access_token"]);
        this.authSerivce.login(res["access_token"]);
        localStorage.setItem("username", res["username"]);
        this.navCtrl.navigateForward("/home");
      },
      (error) => {
        this.error = "Username of Password not valid !";
      }
    );
  }
}
