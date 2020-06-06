import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  AlertController,
  LoadingController,
  ModalController,
} from "@ionic/angular";
import { ProfileService } from "src/app/services/profile.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { IUser, IErrorResponse, IErrorMessage } from "src/app/services/types";
import { TranslateLaService } from "src/app/services/translate-la.service";
@Component({
  selector: "app-modal-form",
  templateUrl: "./modal-form.page.html",
  styleUrls: ["./modal-form.page.scss"],
})
export class ModalFormPage implements OnInit {
  profileForm: FormGroup;
  private ContentLanguageKey = "content-language";
  constructor(
    private router: Router,
    private alertCtrl: AlertController,
    private loading: LoadingController,
    private profileService: ProfileService,
    private translateLaService: TranslateLaService,
    private modalCtrl: ModalController
  ) {
    this.profileForm = new FormGroup({
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
      first_name: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
      last_name: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
    profileService.profileData().subscribe((res: IUser) => {
      this.profileForm.patchValue({
        username: res.username,
        email: res.email,
        first_name: res.first_name,
        last_name: res.last_name,
      });
    });
  }

  get username() {
    return this.profileForm.get("username");
  }

  get email() {
    return this.profileForm.get("email");
  }

  get first_name() {
    return this.profileForm.get("first_name");
  }

  get last_name() {
    return this.profileForm.get("last_name");
  }

  public errorMessages = {
    username: [
      {
        type: "required",
        message: "user.error_messages_username_required",
      },
      {
        type: "minlength",
        message: "user.error_messages_username_minlength",
      },
      {
        type: "taken",
        message: "user.error_messages_username_taken",
      },
    ],
    email: [
      {
        type: "required",
        message: "user.error_messages_email_required",
      },
      {
        type: "pattern",
        message: "user.error_messages_email_pattern",
      },
      {
        type: "taken",
        message: "user.error_messages_email_taken",
      },
    ],
    first_name: [
      {
        type: "required",
        message: "user.error_messages_first_name_required",
      },
      {
        type: "minlength",
        message: "user.error_messages_first_name_minlength",
      },
    ],
    last_name: [
      {
        type: "required",
        message: "user.error_messages_last_name_required",
      },
      {
        type: "minlength",
        message: "user.error_messages_last_name_minlength",
      },
    ],
  };

  public save() {
    this.profileService.updateProfile(this.profileForm.value).subscribe(
      (res) => {
        this.modalCtrl.dismiss();
        window.location.reload();
      },
      (error: IErrorResponse) => {
        const resErrorMessages = error.error["messages"];
        if (resErrorMessages["email"] !== undefined) {
          this.profileForm.get("email").setErrors({ taken: true });
        }
        if (resErrorMessages["username"] !== undefined) {
          this.profileForm.get("username").setErrors({ taken: true });
        }
      }
    );
  }

  async showPopup(title, text) {
    let alert = await this.alertCtrl.create({
      header: title,
      message: text,
      buttons: [
        {
          text: "OK",
          handler: (data) => {
            // if (this.saveSuccess) {
            //   // console.log('create successs');
            //   this.router.navigateByUrl("/home");
            // }
          },
        },
      ],
    });

    return await alert.present();
  }
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
}
