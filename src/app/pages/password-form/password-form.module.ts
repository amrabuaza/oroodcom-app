import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { PasswordFormPage } from "./password-form.page";
import { ModalFormPageModule } from "../modal-form/modal-form.module";
import { TranslateModule } from "@ngx-translate/core";
import { ChangePasswordPage } from "../change-password/change-password.page";

const routes: Routes = [
  {
    path: "",
    component: PasswordFormPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalFormPageModule,
    TranslateModule,
    RouterModule.forChild(routes),
  ],
  declarations: [PasswordFormPage],
})
export class PasswordFormPageModule {}
