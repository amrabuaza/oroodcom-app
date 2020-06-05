import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CardCategoriesComponent } from './card-categories/card-categories.component';
import { CardInfoComponent } from './card-info/card-info.component';
import { CardAppointmentComponent } from './card-appointment/card-appointment.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule.forRoot(),
  ],
  declarations: [
    CardCategoriesComponent,
    CardInfoComponent,
    CardAppointmentComponent
  ],
  exports: [
    CardCategoriesComponent,
    CardInfoComponent,
    CardAppointmentComponent
  ],
  entryComponents: [],
})
export class ComponentsModule {}
