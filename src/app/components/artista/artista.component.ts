import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
})
export class ArtistaComponent implements OnInit {
  artista: any = {};
  topTracks: any[] = [];
  token: any = {};
  loading: boolean = true;
  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.router.params.subscribe((params) => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getArtista(id: string) {
    this.spotify.getToken().subscribe((data) => {
      this.token = data;

      this.spotify
        .getArtista(id, this.token.access_token)
        .subscribe((artista) => {
          console.log(artista);
          this.artista = artista;
          this.loading = false;
        });
    });
  }

  getTopTracks(id: string) {
    this.spotify.getToken().subscribe((data) => {
      this.token = data;

      this.spotify
        .getTopTracks(id, this.token.access_token)
        .subscribe((tracks) => {
          console.log(tracks);
          this.topTracks = tracks;
        });
    });
  }

  ngOnInit(): void {}
}
