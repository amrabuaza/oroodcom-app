import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicSelectableModule } from "ionic-selectable";
import { IonicModule } from "@ionic/angular";
import { StarRatingModule } from "ionic4-star-rating";
import { SearchFormPage } from "./search-form.page";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    IonicSelectableModule,
    TranslateModule,
    StarRatingModule,
  ],
  declarations: [SearchFormPage],
})
export class SearchFormPageModule {}
