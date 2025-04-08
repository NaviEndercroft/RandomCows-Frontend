import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-random-cow',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './random-cow.component.html',
  styleUrl: './random-cow.component.css'
})
export class RandomCowComponent {
  cowUrl: string | null = null;
  loading = false;
  error = '';

  constructor(private http: HttpClient) { }

  getRandomCow() {
    this.loading = true;
    this.error = '';
    this.http.get<{ url: string }>(`${environment.apiUrl}/random-cow`).subscribe({
      next: (res) => {
        this.cowUrl = `${environment.apiUrl}${res.url}`;
        this.loading = false;
      },
      error: () => {
        this.error = 'No se pudo cargar la vaca 🐮';
        this.loading = false;
      }
    });
  }
}
