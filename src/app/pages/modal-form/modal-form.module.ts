import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { ModalFormPage } from "./modal-form.page";
import { TranslateModule } from "@ngx-translate/core";

/*const routes: Routes = [
  {
    path: '',
    component: ModalFormPage
  }
];*/

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TranslateModule,
    // RouterModule.forChild(routes)
  ],
  declarations: [ModalFormPage],
})
export class ModalFormPageModule {}
