import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  selectedFile: File | null = null;
  imageUrl: string | null = null;
  uploadMessage: string = '';

  constructor(private http: HttpClient) {
    console.log(environment.apiUrl);
  }

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

    this.http.post<any>(`${environment.apiUrl}/upload`, formData).subscribe({
      next: (res) => {
        this.uploadMessage = res.message;
        this.imageUrl = `${environment.apiUrl}${res.path}`;
      },
      error: (err) => {
        this.uploadMessage = 'Error al subir la imagen';
        console.error(err);
      },
    });
  }
}
