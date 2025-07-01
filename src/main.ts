import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { EmailCustomization } from './app/email-customization/email-customization';

bootstrapApplication(EmailCustomization)
  .catch((err) => console.error(err));
