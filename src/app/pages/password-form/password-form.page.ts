import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ChangePasswordPage } from "../change-password/change-password.page";

@Component({
  selector: "app-password-form",
  templateUrl: "./password-form.page.html",
  styleUrls: ["./password-form.page.scss"],
})
export class PasswordFormPage implements OnInit {
  username: string;
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}
  async onClick() {
    const modal = await this.modalCtrl.create({
      component: ChangePasswordPage,
      cssClass: "modal-transparency",
    });
    return await modal.present();
  }
}
