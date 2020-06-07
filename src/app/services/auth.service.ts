import { Injectable } from "@angular/core";
import { ToastController, Platform } from "@ionic/angular";
import { ToastOptions } from "@ionic/core";
import { Observable, BehaviorSubject } from "rxjs";
import { Storage } from "@ionic/storage";

const TOKEN_KEY = "access-token";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  authState = new BehaviorSubject(false);

  constructor(private storage: Storage, private plt: Platform) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }

  login(token) {
    return this.storage.set(TOKEN_KEY, token).then((res) => {
      this.authState.next(true);
    });
  }

  logout() {
    return this.storage.remove(TOKEN_KEY).then((res) => {
      this.authState.next(false);
    });
  }

  isAuthenticated() {
    return this.authState.value;
  }

  checkToken() {
    return this.storage.get(TOKEN_KEY).then((res) => {
      if (res) {
        this.authState.next(true);
      }
    });
  }
}
