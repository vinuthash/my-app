import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FileUploadComponent } from './file-upload';

@Component({
  selector: 'app-email-customization',
  standalone: true,
  imports: [FormsModule, FileUploadComponent],
  templateUrl: './email-customization.html',
  styleUrl: './email-customization.css'
})
export class EmailCustomization {
  signatureStyle = 'personal';
  greetingTone = 'supportive';
  messageLength = 'moderate';
  guidancePrompts = {
    welcome: true,
    booking: true,
    reminder: false,
    expect: false,
    faqs: false
  };
  plainLanguage = true;
  gradeLevel = true;
  spanishDraft = 'none';
  preferences = '';
  specifics = '';
  uploadedFiles: File[] = [];

  getGreetingPreview() {
    switch (this.greetingTone) {
      case 'friendly':
        return "Thanks for reaching out! I'm excited to help you get started.";
      case 'supportive':
        return "Thanks for reaching out. I know taking this step can feel overwhelming, and I want you to know you're in good hands.";
      case 'straightforward':
        return "Thank you for contacting us. Here's what you need to know to get started.";
      default:
        return '';
    }
  }

  savePreferences() {
    // TODO: Implement save logic
    alert('Preferences saved!');
  }

  previewDraft() {
    // TODO: Implement preview logic
    alert('Preview draft example!');
  }

  onFileChange(files: File[]) {
    this.uploadedFiles = files;
  }
}
