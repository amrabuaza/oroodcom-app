import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "src/app/services/login.service";
import { ILogin } from "src/app/services/types";
import { NavController } from "@ionic/angular";
@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  error: string;
  constructor(
    private router: Router,
    private Login: LoginService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {}

  login(form) {
    this.Login.sigin(form.value).subscribe(
      (res) => {
        localStorage.setItem("access-token", res["access_token"]);
        localStorage.setItem("username", res["username"]);
        this.navCtrl.navigateForward("/home");
      },
      (error) => {
        this.error = "Username of Password not valid !";
      }
    );
  }
}
