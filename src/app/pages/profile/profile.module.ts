import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfilePage } from './profile.page';
import { ModalFormPage } from '../modal-form/modal-form.page';
import { ModalFormPageModule } from '../modal-form/modal-form.module';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  }
];

@NgModule({
  entryComponents: [
    ModalFormPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalFormPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
