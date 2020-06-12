import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { HomePage } from "./home.page";
import { TranslateModule } from "@ngx-translate/core";
import { SearchFormPageModule } from "../search-form/search-form.module";
import { SearchFormPage } from "../search-form/search-form.page";

const routes: Routes = [
  {
    path: "",
    component: HomePage,
  },
];

@NgModule({
  entryComponents: [SearchFormPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchFormPageModule,
    TranslateModule,

    RouterModule.forChild(routes),
  ],
  declarations: [HomePage],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomePageModule {}
