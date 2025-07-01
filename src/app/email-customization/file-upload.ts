import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'file-upload',
  standalone: true,
  templateUrl: './file-upload.html',
  styleUrl: './file-upload.css'
})
export class FileUploadComponent {
  @Output() filesSelected = new EventEmitter<File[]>();

  isDragging = false;

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.filesSelected.emit(Array.from(input.files));
    }
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;
    if (event.dataTransfer?.files) {
      this.filesSelected.emit(Array.from(event.dataTransfer.files));
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;
  }
} 