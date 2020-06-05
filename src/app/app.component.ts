import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';
@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss']
})
export class AppComponent {
	constructor(
		private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar,
		private _translate: TranslateService
	) {
		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {

			this.statusBar.styleDefault();
            this.statusBar.overlaysWebView(false);
            this.statusBar.backgroundColorByHexString('#21A472');


			this.splashScreen.hide();
		});
  }
 
  private _initTranslate() 
  {
     // Set the default language for translation strings, and the current language.
     this._translate.setDefaultLang('en');


     if (this._translate.getBrowserLang() !== undefined) 
     {
         this._translate.use(this._translate.getBrowserLang());
     } 
     else 
     {
         this._translate.use('ar'); // Set your language here
     }
  }
}
