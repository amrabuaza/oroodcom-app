import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { ProfilePage } from "./profile.page";
import { ModalFormPage } from "../modal-form/modal-form.page";
import { ModalFormPageModule } from "../modal-form/modal-form.module";
import { TranslateModule } from "@ngx-translate/core";

const routes: Routes = [
  {
    path: "",
    component: ProfilePage,
  },
];

@NgModule({
  entryComponents: [ModalFormPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalFormPageModule,
    TranslateModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ProfilePage],
})
export class ProfilePageModule {}
