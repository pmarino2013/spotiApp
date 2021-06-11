import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  artistas: any[] = [];
  loading: boolean = false;
  token: any = {};

  constructor(private spotify: SpotifyService) {}

  buscar(termino: string) {
    if (termino !== '') {
      this.loading = true;
      this.spotify.getToken().subscribe((data) => {
        this.token = data;

        this.spotify
          .getArtistas(termino, this.token.access_token)
          .subscribe((data: any) => {
            this.artistas = data;
            this.loading = false;
          });
      });
    }
  }

  ngOnInit(): void {}
}
