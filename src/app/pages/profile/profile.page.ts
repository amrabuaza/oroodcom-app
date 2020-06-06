import { Component, OnInit } from "@angular/core";
import { ActionSheetController, ModalController } from "@ionic/angular";
import { Router } from "@angular/router";
import { ModalFormPage } from "../modal-form/modal-form.page";
import { ProfileService } from "src/app/services/profile.service";
import { IUser } from "src/app/services/types";
import { TranslateLaService } from "src/app/services/translate-la.service";
@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
  private ContentLanguageKey = "content-language";
  constructor(
    public actionSheetController: ActionSheetController,
    private modalCtrl: ModalController,
    private route: Router,
    private profileService: ProfileService,
    private translateLaService: TranslateLaService
  ) {}

  private profile: IUser;
  username: string;
  email: string;
  first_name: string;
  last_name: string;

  ngOnInit() {
    this.profileService.profileData().subscribe((res: IUser) => {
      this.profile = res;
      this.username = this.profile.username;
      this.email = this.profile.email;
      this.first_name = this.profile.first_name;
      this.last_name = this.profile.last_name;
    });
    var lang;
    if (localStorage.getItem(this.ContentLanguageKey) === undefined) {
      localStorage.setItem(this.ContentLanguageKey, "en");
      lang = "en";
    } else {
      lang = localStorage.getItem(this.ContentLanguageKey);
    }
    this.translateLaService.setLanguage(lang);
  }

  async onClick() {
    const modal = await this.modalCtrl.create({
      component: ModalFormPage,
      cssClass: "modal-transparency",
    });
    return await modal.present();
  }
}
