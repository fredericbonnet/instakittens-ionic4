import { Injectable, ErrorHandler, NgZone } from '@angular/core';
import { ToastController } from '@ionic/angular';

import { LoginRequiredError } from './auth/errors';
import { AuthService } from './auth/auth.service';

/**
 * Global error handler service.
 *
 * Redirects to the login page upon LoginRequiredError.
 * Displays a toast with the error message in the general case,
 */
@Injectable({
  providedIn: 'root',
})
export class AppErrorHandlerService implements ErrorHandler {
  constructor(
    private ngZone: NgZone,
    private authService: AuthService,
    private toastController: ToastController
  ) {}

  /** Error handler method */
  async handleError(error) {
    if (error.rejection instanceof LoginRequiredError) {
      // Redirect to the login page. The NgZone.run is needed because the
      // error handler runs outside of Angular.
      this.ngZone.run(() => {
        this.authService.openLoginPage();
      });
    } else {
      // Display a transient error message.
      const message =
        (error.rejection ? error.rejection.message : error.message) || error;
      const toast = await this.toastController.create({
        message,
        duration: 2000 /* ms */,
        color: 'danger',
      });
      await toast.present();
    }
  }
}
