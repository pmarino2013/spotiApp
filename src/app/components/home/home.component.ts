import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  nuevasCanciones: any[] = [];
  loading: boolean;
  token: any = {};
  error: boolean = false;
  message: string = '';

  constructor(private spotifyService: SpotifyService) {
    this.loading = true;

    this.spotifyService.getToken().subscribe((data) => {
      this.token = data;
      this.spotifyService.getNewReleases(this.token.access_token).subscribe(
        (data: any) => {
          this.nuevasCanciones = data;
          this.loading = false;
        },
        (err: any) => {
          this.loading = false;
          this.error = true;
          this.message = err.error.error.message;
        }
      );
    });
  }

  ngOnInit(): void {}
}
