import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  artistas: any[] = [];
  loading: boolean = false;

  constructor(private spotify: SpotifyService) {}

  buscar(termino: string) {
    console.log(termino);
    if (termino !== '') {
      this.loading = true;
    }
    this.spotify.getArtista(termino).subscribe((data: any) => {
      this.artistas = data;
      this.loading = false;
    });
  }

  ngOnInit(): void {}
}
