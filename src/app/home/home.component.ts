import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  selectedFile: File | null = null;
  imageUrl: string | null = null;
  uploadMessage: string = '';

  constructor(private http: HttpClient) {}

  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.selectedFile = fileInput.files[0];
    }
  }

  uploadImage(): void {
    if (!this.selectedFile) {
      this.uploadMessage = 'Selecciona una imagen primero.';
      return;
    }

    const formData = new FormData();
    formData.append('image', this.selectedFile);

    this.http.post<any>('http://localhost:3000/upload', formData).subscribe({
      next: (res) => {
        this.uploadMessage = res.message;
        this.imageUrl = 'http://localhost:3000' + res.path;
      },
      error: (err) => {
        this.uploadMessage = 'Error al subir la imagen';
        console.error(err);
      },
    });
  }
}
