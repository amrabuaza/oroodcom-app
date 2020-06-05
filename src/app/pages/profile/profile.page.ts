import { Component, OnInit } from "@angular/core";
import { ActionSheetController, ModalController } from "@ionic/angular";
import { Router } from "@angular/router";
import { ModalFormPage } from "../modal-form/modal-form.page";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
  constructor(
    public actionSheetController: ActionSheetController,
    private modalCtrl: ModalController,
    private route: Router
  ) {}

  ngOnInit() {}

  async onClick() {
    const modal = await this.modalCtrl.create({
      component: ModalFormPage,
      cssClass: "modal-transparency",
    });
    return await modal.present();
  }
}
