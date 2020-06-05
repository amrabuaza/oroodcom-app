import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ToastOptions } from '@ionic/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

	  constructor( public toastController: ToastController ) { }
	  
	async presentToast(message: string) {
		const toast = await this.toastController.create({
		  message: message,
		  duration: 2000
		});
		toast.present();
	}
	

}
