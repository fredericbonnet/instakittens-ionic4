import { Injectable, ErrorHandler } from '@angular/core';
import { ToastController } from '@ionic/angular';

/**
 * Global error handler service.
 *
 * Displays a toast with the error message.
 */
@Injectable({
  providedIn: 'root',
})
export class AppErrorHandlerService implements ErrorHandler {
  constructor(private toastController: ToastController) {}

  /** Error handler method */
  async handleError(error) {
    const message = error.rejection ? error.rejection.message : error.message;
    const toast = await this.toastController.create({
      message,
      duration: 2000 /* ms */,
      color: 'danger',
    });
    await toast.present();
  }
}
