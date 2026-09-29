import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

//imports for timezone and date format
import { registerLocaleData } from '@angular/common';
import sv from '@angular/common/locales/sv';

registerLocaleData(sv);


import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
  ]
};
