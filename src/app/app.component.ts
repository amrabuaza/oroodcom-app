import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { TranslateService } from "@ngx-translate/core";
import { AuthService } from "./services/auth.service";
import { Router } from "@angular/router";
import { TranslateLaService } from "./services/translate-la.service";
@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  private ContentLanguageKey = "content-language";
  public language: string;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private _translate: TranslateService,
    private translateLaService: TranslateLaService,
    private authService: AuthService,
    private authSerivce: AuthService,
    private router: Router
  ) {
    this.initializeApp();
  }
  languageChanged() {
    localStorage.setItem(this.ContentLanguageKey, this.language);
    this.translateLaService.setLanguage(this.language);
    location.reload();
  }
  handleLogout() {
    localStorage.removeItem("access-token");
    localStorage.removeItem(this.ContentLanguageKey);
    this.authSerivce.logout();
    window.location.reload();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString("#21A472");

      this.splashScreen.hide();

      this.authService.authState.subscribe((state) => {
        if (state) {
          this.router.navigate(["home"]);
        } else {
          this.router.navigate(["login"]);
        }
      });
    });
  }

  private _initTranslate() {
    // Set the default language for translation strings, and the current language.
    this._translate.setDefaultLang("en");

    if (this._translate.getBrowserLang() !== undefined) {
      this._translate.use(this._translate.getBrowserLang());
    } else {
      this._translate.use("en"); // Set your language here
    }
  }
}
