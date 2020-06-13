import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { ChangePasswordPage } from "./change-password.page";
import { TranslateModule } from "@ngx-translate/core";
import { ModalFormPageModule } from "../modal-form/modal-form.module";

const routes: Routes = [
  {
    path: "",
    component: ChangePasswordPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalFormPageModule,
    TranslateModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ChangePasswordPage],
})
export class ChangePasswordPageModule {}
