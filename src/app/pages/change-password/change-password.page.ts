import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AlertController, ModalController } from "@ionic/angular";
import { TranslateLaService } from "src/app/services/translate-la.service";
import { UpdatePasswordService } from "src/app/services/update-password.service";

@Component({
  selector: "app-change-password",
  templateUrl: "./change-password.page.html",
  styleUrls: ["./change-password.page.scss"],
})
export class ChangePasswordPage implements OnInit {
  passwordForm: FormGroup;
  private ContentLanguageKey = "content-language";
  constructor(
    private alertCtrl: AlertController,
    private translateLaService: TranslateLaService,
    private modalCtrl: ModalController,
    private updatePasswordService: UpdatePasswordService
  ) {
    this.passwordForm = new FormGroup({
      old_password: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
      ]),
      new_password: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  get old_password() {
    return this.passwordForm.get("old_password");
  }
  get new_password() {
    return this.passwordForm.get("new_password");
  }

  public errorMessages = {
    old_password: [
      {
        type: "required",
        message: "user_password.old_password_required",
      },
      {
        type: "minlength",
        message: "user_password.old_password_length",
      },
      {
        type: "incorrect",
        message: "user_password.old_password_incorrect",
      },
    ],
    new_password: [
      {
        type: "required",
        message: "user_password.new_password_required",
      },
      {
        type: "minlength",
        message: "user_password.new_password_length",
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

  submit() {
    this.updatePasswordService
      .updatePassword(this.passwordForm.value)
      .subscribe(
        (res) => {
          this.modalCtrl.dismiss();
          window.location.reload();
        },
        (error) => {
          this.passwordForm.get("old_password").setErrors({ incorrect: true });
        }
      );
  }
}
