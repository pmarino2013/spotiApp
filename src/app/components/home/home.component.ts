import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  nuevasCanciones: any[] = [];

  loading: boolean;

  constructor(private spotifyService: SpotifyService) {
    this.loading = true;
    this.spotifyService.getNewReleases().subscribe((data: any) => {
      setTimeout(() => {
        this.nuevasCanciones = data;
        this.loading = false;
      }, 3000);
    });
  }

  ngOnInit(): void {}
}
